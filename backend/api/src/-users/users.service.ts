import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly db_client: PrismaService) {
  }

  //
  async getUser(id: string, isOwnerAsking: boolean = false) {
    let user = await this.db_client.user.findUnique({
      where: { id },
    });

    if(!user && isOwnerAsking) {
      // Cognito space is created but db linked user is missing -> allocate it
      user = await this.db_client.user.create({
        data: {
          id
        }
      });
    }

    return user;
  }

}


