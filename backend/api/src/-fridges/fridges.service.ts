import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FridgesService {
  constructor(private readonly db_client: PrismaService) {
  }

  async userBelongsToFridge(owner_id: string, fridge_id: number) {
    // -> exists a relation between the user and the fridge
    return await this.db_client.userFridge.findUnique({
      where: {
        userId_fridgeId: {
          userId: owner_id,
          fridgeId: fridge_id
        }
      }
    })
  }


  async getFridge(id: number) {
    return await this.db_client.fridge.findUnique({
      where: { id },
      include: {
        users: true,
        products: true
      }
    });
  }

  async createFridge(creator_id: string, fridge_name: string) {
    return await this.db_client.fridge.create({
      data: {
        name: fridge_name,
        users: { 
          create: { 
            user: {
              connect: { id: creator_id },
            },
            isAdmin: true,
            isOwner: true,
          },
        },
      },
    });
  }

  async removeFridge(id: number) {
    return await this.db_client.fridge.delete({
      where: { id },
      include:{
        products: true
      }
    });
  }

  async addProductToFridge(fridge_id: number, owner_id: string, barcode: string, quantity: number, is_shared: boolean, expire_date: Date) {
    return await this.db_client.fridgeProduct.create({
      data: {
        fridge: { connect: { id: fridge_id } },
        product: { connect: { barcode: barcode } },
        ownerId: owner_id,
        is_shared: is_shared,
        quantity: quantity,
        expire_date: expire_date
      },
    })
  }

  async getFridgeProducts(fridge_id: number) {
    return await this.db_client.fridgeProduct.findMany({
      where: {
        fridgeId: fridge_id
      }
    })
  }

  async getFridgeProduct(fridge_id: number, barcode: string, owner_id: string, expire_date: Date) {
    return await this.db_client.fridgeProduct.findUnique({
      where: {
        fridgeId_barcode_ownerId_expire_date : {
          fridgeId: fridge_id,
          barcode: barcode,
          ownerId: owner_id,
          expire_date: expire_date
        }
      }
    })
  }

  async removeProductFromFridge(owner_id: string, fridge_id: number, barcode: string, expire_date: Date) {
    return await this.db_client.fridgeProduct.delete({
      where: {
          fridgeId_barcode_ownerId_expire_date : {
            fridgeId: fridge_id,
            barcode: barcode,
            ownerId: owner_id,
            expire_date: expire_date
          }
      },
    })
  }

  async updateQuantityFromFridge(owner_id: string, fridge_id: number, barcode: string, expire_date: Date, quantity: number) {
    return await this.db_client.fridgeProduct.update({
      where: {
        fridgeId_barcode_ownerId_expire_date : {
          fridgeId: fridge_id,
          barcode: barcode,
          ownerId: owner_id,
          expire_date: expire_date
        }
      },
      data: {
        quantity: quantity
      }
    })
  }

  async getAllOwnedProductsFromFridge(owner_id: string, fridge_id: number) {
    return await this.db_client.fridgeProduct.findMany({
      where: {
        ownerId: owner_id,
        fridgeId: fridge_id
      },
      include: {
        product: true
      }
    })
  }

  async getAllProductsFromFridge(fridge_id: number) {
    return await this.db_client.fridgeProduct.findMany({
      where: {
        fridgeId: fridge_id
      },
      include: {
        product: true
      }
    })
  }


  async getProduct(barcode: string) {
    return await this.db_client.product.findUnique({
      where: {
        barcode: barcode
      }
    })
  }
}

