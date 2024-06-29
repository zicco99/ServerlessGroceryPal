import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda';

@Injectable()
export class FridgesService {
  constructor(private readonly dbClient: PrismaService) {}

  // Helper Methods
  private async entityExists(entity: string, where: object): Promise<boolean> {
    const result = await this.dbClient[entity].findUnique({ where });
    return !!result;
  }

  private async findUnique(entity: string, where: object, include?: object): Promise<any> {
    return this.dbClient[entity].findUnique({ where, include });
  }

  private async findMany(entity: string, where: object, include?: object): Promise<any> {
    return this.dbClient[entity].findMany({ where, include });
  }

  // User Related Methods
  async userExists(ownerId: string): Promise<boolean> {
    return this.entityExists('user', { id: ownerId });
  }

  async userBelongsToFridge(ownerId: string, fridgeId: number): Promise<any> {
    return this.findUnique('userFridge', {
      userId_fridgeId: { userId: ownerId, fridgeId },
    });
  }

  // Fridge Related Methods
  async existsFridge(id: number): Promise<boolean> {
    return this.entityExists('fridge', { id });
  }

  async existsFridgeByName(name: string): Promise<boolean> {
    const fridges = await this.findMany('fridge', { name });
    return fridges.length > 0;
  }

  async getFridge(id: number): Promise<any> {
    return this.findUnique('fridge', { id }, { users: true, products: true });
  }

  async createFridge(creatorId: string, fridgeName: string): Promise<LambdaResponse | any> {
    try {
      if (await this.existsFridgeByName(fridgeName)) {
        return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'A fridge with this name already exists.' });
      }

      const newFridge = await this.dbClient.fridge.create({
        data: {
          name: fridgeName,
          users: {
            create: {
              user: { connect: { id: creatorId } },
              isAdmin: true,
              isOwner: true,
            },
          },
        },
      });

      return newFridge;
    } catch (error) {
      console.error('Error creating fridge:', error);
      return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Could not create fridge. Please try again later.' });
    }
  }

  async removeFridge(id: number): Promise<LambdaResponse | any> {
    if (!(await this.existsFridge(id))) {
      return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge not found' });
    }

    return this.dbClient.fridge.delete({ where: { id } });
  }

  // Product Related Methods
  async getProduct(barcode: string): Promise<any> {
    return this.findUnique('product', { barcode });
  }

  async addProductToFridge(
    fridgeId: number,
    ownerId: string,
    barcode: string,
    quantity: number,
    isShared: boolean,
    expireDate: Date
  ): Promise<LambdaResponse | any> {
    if (!(await this.existsFridge(fridgeId))) {
      return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge not found' });
    }

    if (!(await this.userBelongsToFridge(ownerId, fridgeId))) {
      return new LambdaResponse(LambdaResponseCode.FORBIDDEN, { message: 'You are not a member of this fridge' });
    }

    if (!(await this.getProduct(barcode))) {
      return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Product not found' });
    }

    return this.dbClient.fridgeProduct.create({
      data: {
        fridge: { connect: { id: fridgeId } },
        product: { connect: { barcode } },
        ownerId,
        is_shared: isShared,
        quantity,
        expire_date: expireDate,
      },
    });
  }

  async updateQuantityFromFridge(
    ownerId: string,
    fridgeId: number,
    barcode: string,
    expireDate: Date,
    quantity: number
  ): Promise<LambdaResponse | any> {
    if (!(await this.existsFridge(fridgeId))) {
      return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge not found' });
    }

    return this.dbClient.fridgeProduct.update({
      where: {
        fridgeId_productBarcode_ownerId_expire_date: {
          fridgeId,
          productBarcode: barcode,
          ownerId,
          expire_date: expireDate,
        },
      },
      data: { quantity },
    });
  }

  async removeProductFromFridge(
    ownerId: string,
    fridgeId: number,
    barcode: string,
    expireDate: Date
  ): Promise<any> {
    return this.dbClient.fridgeProduct.delete({
      where: {
        fridgeId_productBarcode_ownerId_expire_date: {
          fridgeId,
          productBarcode: barcode,
          ownerId,
          expire_date: expireDate,
        },
      },
    });
  }

  async getFridgeProducts(fridgeId: number): Promise<LambdaResponse | any> {
    if (!(await this.existsFridge(fridgeId))) {
      return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge not found' });
    }

    return this.findMany('fridgeProduct', { fridgeId });
  }

  async getFridgeProduct(
    fridgeId: number,
    barcode: string,
    ownerId: string,
    expireDate: Date
  ): Promise<LambdaResponse | any> {
    if (!(await this.existsFridge(fridgeId))) {
      return new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Fridge not found' });
    }

    return this.findUnique('fridgeProduct', {
      fridgeId_productBarcode_ownerId_expire_date: {
        fridgeId,
        productBarcode: barcode,
        ownerId,
        expire_date: expireDate,
      },
    });
  }

  async getAllOwnedProductsFromFridge(ownerId: string, fridgeId: number): Promise<any> {
    return this.findMany('fridgeProduct', {
      ownerId,
      fridgeId,
    }, { product: true });
  }

  async getAllProductsFromFridge(fridgeId: number): Promise<any> {
    return this.findMany('fridgeProduct', {
      fridgeId,
    }, { product: true });
  }

  async removeFridgeProduct(
    fridgeId: number,
    barcode: string,
    ownerId: string,
    expireDate: Date
  ): Promise<any> {
    return this.dbClient.fridgeProduct.delete({
      where: {
        fridgeId_productBarcode_ownerId_expire_date: {
          fridgeId,
          productBarcode: barcode,
          ownerId,
          expire_date: expireDate,
        },
      },
    });
  }
}
