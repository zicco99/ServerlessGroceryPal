import { Get, Delete, Injectable, Param, Controller, Post, Body, Put, Req } from '@nestjs/common';
import { FridgesService } from './fridges.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda';
import { CreateFridgeDto, addProductToFridgeDto, deleteProductFromFridgeDto, updateProductFromFridgeDto } from './events.dto';

@Injectable()
@Controller('fridges')
export class FridgesController {
    constructor(private readonly fridgesService: FridgesService) {}

    async check_perm(
        user_id: string, 
        fridge_id: number, 
        should_be_fridge_owner: boolean, 
        should_be_fridge_admin: boolean
    ): Promise<{ isAllowed: boolean, response: LambdaResponse }> {
        try {
            const user_fridge = await this.fridgesService.userBelongsToFridge(user_id, fridge_id);

            if (!user_fridge) {
                console.log("User does not belong to the fridge");
                return {
                    isAllowed: false,
                    response: new LambdaResponse(LambdaResponseCode.UNAUTHORIZED, { message: 'User does not belong to the fridge' })
                };
            }

            if (should_be_fridge_owner && !user_fridge.isOwner) {
                console.log("User is not fridge owner");
                return {
                    isAllowed: false,
                    response: new LambdaResponse(LambdaResponseCode.FORBIDDEN, { message: 'User is not fridge owner' })
                };
            }

            if (should_be_fridge_admin && !user_fridge.isAdmin) {
                console.log("User is not fridge admin");
                return {
                    isAllowed: false,
                    response: new LambdaResponse(LambdaResponseCode.FORBIDDEN, { message: 'User is not fridge admin' })
                };
            }

            return {
                isAllowed: true,
                response: new LambdaResponse(LambdaResponseCode.OK, { message: 'Authorized' })
            };
        } catch (error) {
            console.log("Error checking permissions: ", error);
            return {
                isAllowed: false,
                response: new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' })
            };
        }
    }

    @Get(':id')
    async getFridge(@Req() req: Request, @Param('id') id: string): Promise<LambdaResponse> {
        try {
            const user_id = JSON.parse(req.headers['x-user']).id;
            const fridge_id = parseInt(id);

            if (isNaN(fridge_id)) {
                console.log("Invalid Fridge ID");
                return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
            }

            const { isAllowed, response } = await this.check_perm(user_id, fridge_id, false, false);
            if (!isAllowed) {
                return response;
            }

            const fridge = await this.fridgesService.getFridge(fridge_id);
            if (!fridge) {
                return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge does not exist' });
            }

            return new LambdaResponse(LambdaResponseCode.OK, fridge);
        } catch (error) {
            console.log("Error getting fridge: ", error);
            return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error retrieving fridge info' });
        }
    }

    @Post('')
    async createFridge(@Req() req: Request, @Body() event_body: CreateFridgeDto): Promise<LambdaResponse> {
        const user = JSON.parse(req.headers['x-user']);
        try {
            const fridge = await this.fridgesService.createFridge(user.id, event_body.fridge_name);
            console.log("Fridge: ", fridge);
            return new LambdaResponse(LambdaResponseCode.OK, "Created");
        } catch (error) {
            console.log("Error creating fridge: ", error);
            return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error creating fridge' });
        }
    }

    @Delete(':id')
    async deleteFridge(@Req() req: Request, @Param('id') id: string): Promise<LambdaResponse> {
        const user = JSON.parse(req.headers['x-user']);
        const fridge_id = parseInt(id);

        try {
            if (isNaN(fridge_id)) {
                return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
            }

            const { isAllowed, response } = await this.check_perm(user.id, fridge_id, true, true);
            if (!isAllowed) {
                return response;
            }

            const fridge = await this.fridgesService.removeFridge(fridge_id);
            console.log("Fridge: ", fridge);
            return new LambdaResponse(LambdaResponseCode.OK, "Deleted");
        } catch (error) {
            console.log("Error deleting fridge: ", error);
            return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Fridge deletion failed' });
        }
    }

    @Put(':id')
    async addProductToFridge(@Req() req: Request, @Body() event_body: addProductToFridgeDto, @Param('id') id: string): Promise<LambdaResponse> {
        const user = JSON.parse(req.headers['x-user']);
        const fridge_id = parseInt(id);

        try {

            if (isNaN(fridge_id)) {
                return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
            }

            const { isAllowed, response } = await this.check_perm(user.id, fridge_id, false, true);
            if (!isAllowed) {
                return response;
            }

            // Check if fridge exists
            const fridge = await this.fridgesService.getFridge(fridge_id);
            if (!fridge) {
                return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge does not exist' });
            }

            // Check if product exists
            const product = await this.fridgesService.getProduct(event_body.barcode);
            if (!product) {
                return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found' });
            }

            // Check if product is already added
            const existingProduct = await this.fridgesService.getFridgeProduct(fridge_id, event_body.barcode, user.id, new Date());
            if (existingProduct) {
                return new LambdaResponse(LambdaResponseCode.CONFLICT, { message: 'Product already added' });
            }

            const fridge_product = await this.fridgesService.addProductToFridge(
                fridge_id,
                user.id,
                event_body.barcode,
                event_body.quantity,
                event_body.is_shared,
                event_body.expire_date
            );

            console.log("Fridge product: ", fridge_product);

            return new LambdaResponse(LambdaResponseCode.OK, "Product added to fridge");
        } catch (error) {
            console.log("Error adding product to fridge: ", error);
            return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error adding product to fridge' });
        }
    }

    @Get(':id/product/:barcode')
    async getFridgeProduct(@Req() req: Request, @Param('id') id: string, @Param('barcode') barcode: string): Promise<LambdaResponse> {
        const user = JSON.parse(req.headers['x-user']);
        const fridge_id = parseInt(id);

        try {

            if (isNaN(fridge_id)) {
                return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
            }

            const { isAllowed, response } = await this.check_perm(user.id, fridge_id, false, true);
            if (!isAllowed) {
                return response;
            }

            const fridge_product = await this.fridgesService.getFridgeProduct(fridge_id, barcode, user.id, new Date());
            if (!fridge_product) {
                return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found in fridge' });
            }

            console.log("Fridge product: ", fridge_product);
            return new LambdaResponse(LambdaResponseCode.OK, fridge_product);
        } catch (error) {
            console.log("Error getting product from fridge: ", error);
            return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error retrieving fridge product info' });
        }
    }

    @Put(':id/product/:barcode')
    async updateProductFromFridge(@Req() req: Request, @Param('id') id: string, @Param('barcode') barcode: string, @Body() event_body: updateProductFromFridgeDto): Promise<LambdaResponse> {
        const user = JSON.parse(req.headers['x-user']);
        const fridge_id = parseInt(id);

        try {

            if (isNaN(fridge_id)) {
                return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
            }

            const { isAllowed, response } = await this.check_perm(user.id, fridge_id, false, true);
            if (!isAllowed) {
                return response;
            }

            if (await this.fridgesService.existsFridge(fridge_id) === false) {
                return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge does not exist' });
            }

            const fridge_product : any = await this.fridgesService.getFridgeProduct(fridge_id, barcode, user.id, event_body.expire_date);

            if (!fridge_product) {
                return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found in fridge' });
            }

            if (event_body.expire_date < new Date()) {
                return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Product already expired' });
            }

            switch (event_body.operation) {
                case "add":
                    this.fridgesService.updateQuantityFromFridge(user.id, fridge_id, barcode, event_body.expire_date,fridge_product.quantity + event_body.quantity);
                    break;
                case "remove":
                    this.fridgesService.updateQuantityFromFridge(user.id, fridge_id, barcode, event_body.expire_date,Math.min(0,fridge_product.quantity - event_body.quantity));
                    break;
                default:
                    return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid operation' });
            }
            return new LambdaResponse(LambdaResponseCode.OK, "Product updated in fridge");
        } catch (error) {
            console.log("Error updating product from fridge: ", error);
            return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error updating fridge product' });
        }
    }

    @Delete(':id/product/:barcode')
    async deleteFridgeProduct(@Req() req: Request, @Param('id') id: string, @Param('barcode') barcode: string, @Body() event_body: deleteProductFromFridgeDto): Promise<LambdaResponse> {
        const user = JSON.parse(req.headers['x-user']);
        const fridge_id = parseInt(id);

        try {

            if (isNaN(fridge_id)) {
                return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
            }

            const { isAllowed, response } = await this.check_perm(user.id, fridge_id, true, true);
            if (!isAllowed) {
                return response;
            }

            if (await this.fridgesService.existsFridge(fridge_id) == false) {
                return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge does not exist' });
            }

            const fridge_product = await this.fridgesService.getFridgeProduct(fridge_id, barcode, user.id, event_body.expire_date);

            if (!fridge_product) {
                return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found in fridge' });
            }
            
            await this.fridgesService.removeFridgeProduct(fridge_id, barcode, user.id, event_body.expire_date);

            return new LambdaResponse(LambdaResponseCode.OK, "Product deleted from fridge");

        } catch (error) {
            console.log("Error deleting product from fridge: ", error);
            return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error deleting fridge product' });
        }
    }
}
