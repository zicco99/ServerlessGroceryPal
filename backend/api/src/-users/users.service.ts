import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly db_client: PrismaService) {
  }

  //
  async getUser(id: string, isOwnerAsking: boolean = false) {

    let user: any = null;

    if (isOwnerAsking === true) {
        user = await this.db_client.user.findUnique({
            where: { id },
            include: {
              feedbacks: true,
              fridges: true
            }
          });
        
        console.log("User: ", user);

        if(!user) {
            console.log("User not found, creating...");
            user = await this.db_client.user.create({
                data: {
                  id
                },
              });

            console.log("User created: ", user);
        }
    }
    else{
        user = await this.db_client.user.findUnique({
            where: { id }
          });
    }

    return user;
  }

}


