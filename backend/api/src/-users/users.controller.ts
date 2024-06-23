import { Get, Injectable, Controller, HttpException, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda';
import { Request, Response, NextFunction } from 'express';

@Injectable()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(
    @Param('id') id: string,
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<LambdaResponse> {
    try {
      console.log(`User ID: ${req.user.id}`);
      console.log(`User Name: ${req.user.name}`);

      if (id === req.user.id) { 
        const dataFromDB = await this.usersService.getUser(req.user.id);
        const enhancedUser = { ...req.user, ...dataFromDB };
        return new LambdaResponse(LambdaResponseCode.OK, enhancedUser);
      } else { 
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
