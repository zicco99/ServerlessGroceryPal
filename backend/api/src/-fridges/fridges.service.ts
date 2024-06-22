import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FridgesService {
  constructor(private readonly db_client: PrismaService) {
  }

  async getFridge(id: number) {
    return await this.db_client.fridge.findUnique({
      where: { id }
    });
    /*
    TODO: va aggiunto l'include
    include: {
        fridges_products: true
      }
    */
  }
}

