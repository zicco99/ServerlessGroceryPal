import { Get, Injectable, Controller, HttpException, HttpStatus, Param, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda';
import { Response, NextFunction } from 'express';

@Injectable()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: string, @Req() req: Request): Promise<LambdaResponse> {
    try {

        const asker_user = JSON.parse(req.headers['x-user']);
        const asked_user_id = id;

        console.log("Asking user stuff populated by the middleware: ", asker_user);
        console.log("User asked for: ", asked_user_id);

        if (asked_user_id === asker_user.id) {
            // If the user asking for his own profile
            const dataFromDB = await this.usersService.getUser(asker_user.id);
            const enhancedUser = { ...asker_user, ...dataFromDB };
            return new LambdaResponse(LambdaResponseCode.OK, enhancedUser);
        } else {
            // If the user asking for another user
            const dataFromDB = await this.usersService.getUser(id, true);
            const hiddenStuff = ['email'];
            const publicUser = Object.fromEntries(
            Object.entries(dataFromDB).filter(([key]) => !hiddenStuff.includes(key))
            );
            return new LambdaResponse(LambdaResponseCode.OK, publicUser);
        }
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new HttpException(
        new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
