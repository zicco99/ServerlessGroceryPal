import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda';

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

  async userExists(owner_id: string) {
    let user = await this.db_client.user.findUnique({
      where: {
        id: owner_id
      }
    })

    if (user) {
      return true
    } else {
      return false
    }
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
    try {
      const existingFridges = await this.db_client.fridge.findMany({
        where: {
          name: fridge_name
        }
      })

      if (existingFridges && existingFridges.length > 0) {
        return new LambdaResponse(LambdaResponseCode.BAD_REQUEST, { message: 'A fridge with this name already exists.' });
      }

      const newFridge = await this.db_client.fridge.create({
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

      return newFridge;
    } catch (error) {
      console.error("Error creating fridge:", error);
      return new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Could not create fridge. Please try again later.' });
    }
  }


  async removeFridge(id: number) {
    return await this.db_client.fridge.delete({
      where: { id }
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
        fridgeId_productBarcode_ownerId_expire_date : {
          fridgeId: fridge_id,
          productBarcode: barcode,
          ownerId: owner_id,
          expire_date: expire_date
        }
      }
    })
  }

  async removeProductFromFridge(owner_id: string, fridge_id: number, barcode: string, expire_date: Date) {
    return await this.db_client.fridgeProduct.delete({
      where: {
        fridgeId_productBarcode_ownerId_expire_date : {
          fridgeId: fridge_id,
          productBarcode: barcode,
          ownerId: owner_id,
          expire_date: expire_date
        }
      },
    })
  }

  async updateQuantityFromFridge(owner_id: string, fridge_id: number, barcode: string, expire_date: Date, quantity: number) {
    return await this.db_client.fridgeProduct.update({
      where: {
        fridgeId_productBarcode_ownerId_expire_date : {
          fridgeId: fridge_id,
          productBarcode: barcode,
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

