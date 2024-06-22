import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly db_client: PrismaService) {
  }

  //
  async getUser(id: string) {
    return await this.db_client.user.findUnique({
      where: { id },
    });
  }



}


