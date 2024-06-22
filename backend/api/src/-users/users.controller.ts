import { Get, Injectable, Controller, HttpException, HttpStatus, Query, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda'; // Adjust the import path as needed
import { Request, Response, NextFunction } from 'express';

@Injectable()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(req: Request, res: Response, next: NextFunction, @Param('id') id ): Promise<LambdaResponse> {
    try {
        console.log(`User ID: ${req.user.id}`);
        console.log(`User Name: ${req.user.name}`);

        if(id === req.user.id ){ // If the caller is the user itself -> return all data
            const dataFromDB = await this.usersService.getUser(req.user.id);
            //Merge dictionaries
            const enhancedUser = { ...req.user, ...dataFromDB };
            return new LambdaResponse(LambdaResponseCode.OK, enhancedUser);
        }
        else{ // Return only public data for other users
            const dataFromDB = await this.usersService.getUser(id);
            const hidden_stuff = ["email"];
            const publicUser = Object.fromEntries(Object.entries(dataFromDB).filter(([key]) => !hidden_stuff.includes(key)));
            return new LambdaResponse(LambdaResponseCode.OK, publicUser);

        }
    } catch (error) {
      console.error('Error fetching users:', error); // Log the error for debugging
      throw new HttpException(
        new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
