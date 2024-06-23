import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly db_client: PrismaService) {
  }

  //
  async getUser(id: string, isOwnerAsking: boolean = false) {

    let user;

    if (isOwnerAsking) {
        user = await this.db_client.user.findUnique({
            where: { id },
            include: {
              feedbacks: true,
              fridges: true
            }
          });
    }
    else{
        user = await this.db_client.user.findUnique({
            where: { id }
          });
    }

    if(!user && isOwnerAsking) {
        console.log("Allocating user in user: ", id);
      // Cognito space is created but db linked user is missing -> allocate it
      user = await this.db_client.user.create({
        data: {
          id
        }
      });
      console.log("User created: ", user);
    }

    return user;
  }

}


