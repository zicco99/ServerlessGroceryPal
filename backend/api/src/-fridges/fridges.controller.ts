import {
    Get, Delete, Injectable, Param, Controller, Post, Body, Put, Req
  } from '@nestjs/common';
  import { FridgesService } from './fridges.service';
  import { LambdaResponse, LambdaResponseCode } from '../utils/lambda';
  import {
    CreateFridgeDto, addProductToFridgeDto, deleteProductFromFridgeDto, updateProductFromFridgeDto
  } from './events.dto';
  
  @Injectable()
  @Controller('fridges')
  export class FridgesController {
    constructor(private readonly fridgesService: FridgesService) {}
  
    private async checkPermission(
      userId: string, fridgeId: number, shouldBeOwner: boolean, shouldBeAdmin: boolean
    ): Promise<{ isAllowed: boolean, response: LambdaResponse }> {
      try {
        const userFridge = await this.fridgesService.userBelongsToFridge(userId, fridgeId);
  
        if (!userFridge) {
          return {
            isAllowed: false,
            response: new LambdaResponse(LambdaResponseCode.UNAUTHORIZED, { message: 'User does not belong to the fridge' }),
          };
        }
  
        if (shouldBeOwner && !userFridge.isOwner) {
          return {
            isAllowed: false,
            response: new LambdaResponse(LambdaResponseCode.FORBIDDEN, { message: 'User is not fridge owner' }),
          };
        }
  
        if (shouldBeAdmin && !userFridge.isAdmin) {
          return {
            isAllowed: false,
            response: new LambdaResponse(LambdaResponseCode.FORBIDDEN, { message: 'User is not fridge admin' }),
          };
        }
  
        return {
          isAllowed: true,
          response: new LambdaResponse(LambdaResponseCode.OK, { message: 'Authorized' }),
        };
      } catch (error) {
        console.error('Error checking permissions:', error);
        return {
          isAllowed: false,
          response: new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
        };
      }
    }
  
    private parseUser(req: Request): { id: string } {
      return JSON.parse(req.headers['x-user'] as string);
    }
  
    @Get(':id')
    async getFridge(@Req() req: Request, @Param('id') id: string): Promise<LambdaResponse> {
      try {
        const userId = this.parseUser(req).id;
        const fridgeId = parseInt(id);
  
        if (isNaN(fridgeId)) {
          return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
        }
  
        const { isAllowed, response } = await this.checkPermission(userId, fridgeId, false, false);
        if (!isAllowed) return response;
  
        const fridge = await this.fridgesService.getFridge(fridgeId);
        if (!fridge) {
          return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge does not exist' });
        }
  
        return new LambdaResponse(LambdaResponseCode.OK, fridge);
      } catch (error) {
        console.error('Error getting fridge:', error);
        return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error retrieving fridge info' });
      }
    }
  
    @Post()
    async createFridge(@Req() req: Request, @Body() createFridgeDto: CreateFridgeDto): Promise<LambdaResponse> {
      try {
        const user = this.parseUser(req);
        const fridge = await this.fridgesService.createFridge(user.id, createFridgeDto.fridge_name);
        console.log('Fridge created:', fridge);
        return new LambdaResponse(LambdaResponseCode.OK, 'Created');
      } catch (error) {
        console.error('Error creating fridge:', error);
        return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error creating fridge' });
      }
    }
  
    @Delete(':id')
    async deleteFridge(@Req() req: Request, @Param('id') id: string): Promise<LambdaResponse> {
      try {
        const user = this.parseUser(req);
        const fridgeId = parseInt(id);
  
        if (isNaN(fridgeId)) {
          return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
        }
  
        const { isAllowed, response } = await this.checkPermission(user.id, fridgeId, true, true);
        if (!isAllowed) return response;
  
        await this.fridgesService.removeFridge(fridgeId);
        return new LambdaResponse(LambdaResponseCode.OK, 'Deleted');
      } catch (error) {
        console.error('Error deleting fridge:', error);
        return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Fridge deletion failed' });
      }
    }
  
    @Put(':id')
    async addProductToFridge(
      @Req() req: Request, @Body() addProductDto: addProductToFridgeDto, @Param('id') id: string
    ): Promise<LambdaResponse> {
      try {
        const user = this.parseUser(req);
        const fridgeId = parseInt(id);
  
        if (isNaN(fridgeId)) {
          return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
        }
  
        const { isAllowed, response } = await this.checkPermission(user.id, fridgeId, false, true);
        if (!isAllowed) return response;
  
        const fridge = await this.fridgesService.getFridge(fridgeId);
        if (!fridge) {
          return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge does not exist' });
        }
  
        const product = await this.fridgesService.getProduct(addProductDto.barcode);
        if (!product) {
          return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found' });
        }
  
        const existingProduct = await this.fridgesService.getFridgeProduct(fridgeId, addProductDto.barcode, user.id, new Date());
        if (existingProduct) {
          return new LambdaResponse(LambdaResponseCode.CONFLICT, { message: 'Product already added' });
        }
  
        await this.fridgesService.addProductToFridge(
          fridgeId, user.id, addProductDto.barcode, addProductDto.quantity,
          addProductDto.is_shared, addProductDto.expire_date
        );
  
        return new LambdaResponse(LambdaResponseCode.OK, 'Product added to fridge');
      } catch (error) {
        console.error('Error adding product to fridge:', error);
        return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error adding product to fridge' });
      }
    }
  
    @Get(':id/product/:barcode')
    async getFridgeProduct(
      @Req() req: Request, @Param('id') id: string, @Param('barcode') barcode: string
    ): Promise<LambdaResponse> {
      try {
        const user = this.parseUser(req);
        const fridgeId = parseInt(id);
  
        if (isNaN(fridgeId)) {
          return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
        }
  
        const { isAllowed, response } = await this.checkPermission(user.id, fridgeId, false, true);
        if (!isAllowed) return response;
  
        const fridgeProduct = await this.fridgesService.getFridgeProduct(fridgeId, barcode, user.id, new Date());
        if (!fridgeProduct) {
          return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found in fridge' });
        }
  
        return new LambdaResponse(LambdaResponseCode.OK, fridgeProduct);
      } catch (error) {
        console.error('Error getting product from fridge:', error);
        return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error retrieving fridge product info' });
      }
    }
  
    @Put(':id/product/:barcode')
    async updateProductFromFridge(
      @Req() req: Request, @Param('id') id: string, @Param('barcode') barcode: string,
      @Body() updateProductDto: updateProductFromFridgeDto
    ): Promise<LambdaResponse> {
      try {
        const user = this.parseUser(req);
        const fridgeId = parseInt(id);
  
        if (isNaN(fridgeId)) {
          return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
        }
  
        const { isAllowed, response } = await this.checkPermission(user.id, fridgeId, false, true);
        if (!isAllowed) return response;
  
        if (!(await this.fridgesService.existsFridge(fridgeId))) {
          return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge does not exist' });
        }
  
        const fridgeProduct : any = await this.fridgesService.getFridgeProduct(fridgeId, barcode, user.id, updateProductDto.expire_date);
        if (!fridgeProduct) {
          return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found in fridge' });
        }
  
        if (updateProductDto.expire_date < new Date()) {
          return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Product already expired' });
        }
  
        switch (updateProductDto.operation) {
          case 'add':
            await this.fridgesService.updateQuantityFromFridge(
              user.id, fridgeId, barcode, updateProductDto.expire_date, fridgeProduct.quantity + updateProductDto.quantity
            );
            break;
          case 'remove':
            await this.fridgesService.updateQuantityFromFridge(
              user.id, fridgeId, barcode, updateProductDto.expire_date, Math.max(0, fridgeProduct.quantity - updateProductDto.quantity)
            );
            break;
          default:
            return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid operation' });
        }
  
        return new LambdaResponse(LambdaResponseCode.OK, 'Product updated in fridge');
      } catch (error) {
        console.error('Error updating product from fridge:', error);
        return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error updating fridge product' });
      }
    }
  
    @Delete(':id/product/:barcode')
    async deleteFridgeProduct(
      @Req() req: Request, @Param('id') id: string, @Param('barcode') barcode: string,
      @Body() deleteProductDto: deleteProductFromFridgeDto
    ): Promise<LambdaResponse> {
      try {
        const user = this.parseUser(req);
        const fridgeId = parseInt(id);
  
        if (isNaN(fridgeId)) {
          return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'Invalid Fridge ID' });
        }
  
        const { isAllowed, response } = await this.checkPermission(user.id, fridgeId, true, true);
        if (!isAllowed) return response;
  
        if (!(await this.fridgesService.existsFridge(fridgeId))) {
          return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge does not exist' });
        }
  
        const fridgeProduct = await this.fridgesService.getFridgeProduct(fridgeId, barcode, user.id, deleteProductDto.expire_date);
        if (!fridgeProduct) {
          return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found in fridge' });
        }
  
        await this.fridgesService.removeFridgeProduct(fridgeId, barcode, user.id, deleteProductDto.expire_date);
        return new LambdaResponse(LambdaResponseCode.OK, 'Product deleted from fridge');
      } catch (error) {
        console.error('Error deleting product from fridge:', error);
        return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Error deleting fridge product' });
      }
    }
  }
  