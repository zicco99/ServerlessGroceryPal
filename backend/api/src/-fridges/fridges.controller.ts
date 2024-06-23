import { Get, Delete, Injectable, Param, Controller, HttpException, Post, Body, Put, Req, Query } from '@nestjs/common';
import { FridgesService } from './fridges.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda';
import { CreateFridgeDto, addProductToFridgeDto, updateProductFromFridgeDto } from './events.dto';

@Injectable()
@Controller('fridges')
export class FridgesController {
    constructor(private readonly recipesService: FridgesService) {}

    async check_perm(user_id: string, fridge_id: number, should_be_fridge_owner: boolean, should_be_fridge_admin: boolean) {
        const user_fridge = await this.recipesService.userBelongsToFridge(user_id, fridge_id);
        if (user_fridge == null) {
            console.log("User is not a member of the fridge")
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.UNAUTHORIZED, { message: 'Unauthorized' }),
                LambdaResponseCode.UNAUTHORIZED
            );
        }
        if (should_be_fridge_owner == true && user_fridge.isOwner == false) {
            console.log("User is not fridge owner")
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.FORBIDDEN, { message: 'Forbidden' }),
                LambdaResponseCode.FORBIDDEN
            );
        }
        if (should_be_fridge_admin == true && user_fridge.isAdmin == false) {
            console.log("User is not fridge admin")
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.FORBIDDEN, { message: 'Forbidden' }),
                LambdaResponseCode.FORBIDDEN
            );
        }
    }


    @Get(':id')
    async getFridge(@Req() req: Request, @Param('id') id: string): Promise<LambdaResponse> {
        const user_id = JSON.parse(req.headers['x-user']).id
        this.check_perm(user_id, parseInt(id), false, false);
        try {
            let fridge_id = parseInt(id)
            if ((isNaN(fridge_id) == true) ) {
                throw "Fridge Id is not correct";
            }
            const fridge = await this.recipesService.getFridge(fridge_id);
            return new LambdaResponse(LambdaResponseCode.OK, fridge);
        } catch (error) {
            console.log("Error getting fridge: ", error)
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Post('')
    async createFridge(@Req() req: Request, @Body () event_body: CreateFridgeDto): Promise<LambdaResponse> {
        let user = JSON.parse(req.headers['x-user']);
        try {
            const fridge = await this.recipesService.createFridge(user.id, event_body.fridge_name);
            console.log("Fridge: ", fridge);
            return new LambdaResponse(LambdaResponseCode.OK,"Created");
        } catch (error) {
            console.log("Error creating fridge: ", error)
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Delete(':id')
    async deleteFridge(@Req() req: Request, @Param('id') id: string): Promise<LambdaResponse> {
        let user = JSON.parse(req.headers['x-user']);
        this.check_perm(user.id, parseInt(id), true, true);
        try {
            let fridge_id = parseInt(id)
            if ((isNaN(fridge_id) == true) ) {
                throw "Fridge Id is not correct";
            }
            const fridge = await this.recipesService.removeFridge(fridge_id);
            console.log("Fridge: ", fridge);
            return new LambdaResponse(LambdaResponseCode.OK,"Deleted");
        } catch (error) {
            console.log("Error deleting fridge: ", error)
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Put(':id')
    async addProductToFridge(@Req() req: Request, @Body() event_body: addProductToFridgeDto, @Param('id') id: string): Promise<LambdaResponse> {
        let user = JSON.parse(req.headers['x-user']);
        this.check_perm(user.id, parseInt(id), false, true);
        try {
            let fridge_id = parseInt(id)
            if ((isNaN(fridge_id) == true) ) {
                throw "Fridge Id is not correct";
            }

            const fridge_product = await this.recipesService.addProductToFridge(
                fridge_id, 
                user.id, 
                event_body.barcode,
                event_body.quantity,
                event_body.is_shared,
                event_body.expire_date
            );

            console.log("Fridge product: ", fridge_product);
            
            return new LambdaResponse(LambdaResponseCode.OK,"Product added to fridge");
        } catch (error) {
            console.log("Error adding product to fridge: ", error)
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Get(':id/product/:barcode')
    async getFridgeProduct(@Req() req: Request, @Param('id') id: string, @Param('barcode') barcode: string): Promise<LambdaResponse> {

        let user = JSON.parse(req.headers['x-user']);
        this.check_perm(user.id, parseInt(id), false, true);

        try {
            let fridge_id = parseInt(id)
            if ((isNaN(fridge_id) == true) ) {
                throw "Fridge Id is not correct";
            }
            const fridge_product = await this.recipesService.getFridgeProduct(fridge_id, barcode, user.id, new Date());
            console.log("Fridge product: ", fridge_product);
            return new LambdaResponse(LambdaResponseCode.OK, fridge_product);
        } catch (error) {
            console.log("Error getting product from fridge: ", error)
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Put(':id/product/:barcode')
    async updateProductFromFridge(@Req() req: Request, @Param('id') id: string, @Param('barcode') barcode: string, @Body() event_body: updateProductFromFridgeDto): Promise<LambdaResponse> {
        
        try {
            let fridge_id = parseInt(id)
            if ((isNaN(fridge_id) == true) ) {
                throw "Fridge Id is not correct";
            }

            let user = JSON.parse(req.headers['x-user']);
            this.check_perm(user.id, fridge_id, false, true);

            const fridge_product = await this.recipesService.getFridgeProduct(fridge_id,user.id, barcode, event_body.expire_date)

            if(fridge_product == null) {
                throw new HttpException(
                    new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found' }),
                    LambdaResponseCode.NOT_FOUND
                );

            }

            if(event_body.operation=="remove") {
                if (fridge_product.quantity < event_body.quantity) {
                    throw new HttpException(
                        new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'You cant remove more than you have' }),
                        LambdaResponseCode.BAD_REQUEST
                    );
                }

                if (fridge_product.quantity == event_body.quantity) {
                    await this.recipesService.removeProductFromFridge(user.id, fridge_id, barcode, event_body.expire_date)
                } else {

                    await this.recipesService.updateQuantityFromFridge(user.id, fridge_id, barcode, event_body.expire_date, fridge_product.quantity - event_body.quantity)
                }

            } else if(event_body.operation=="add") {
                await this.recipesService.updateQuantityFromFridge(user.id, fridge_id, barcode, event_body.expire_date, fridge_product.quantity + event_body.quantity)
            }

            return new LambdaResponse(LambdaResponseCode.OK,"Product removed from fridge");
        } catch (error) {
            console.log("Error updating product from fridge: ", error)
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }
}
