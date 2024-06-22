import { Get, Delete, Injectable, Param, Controller, HttpException } from '@nestjs/common';
import { FridgesService } from './fridges.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda'; // Adjust the import path as needed

@Injectable()
@Controller('fridges')
export class FridgesController {
    constructor(private readonly recipesService: FridgesService) {}

    @Get(':id')
    async getFridge(@Param('id') id: string): Promise<LambdaResponse> {
        try {
            let fridge_id = parseInt(id)
            if ((isNaN(fridge_id) == true) ) {
                throw "Error1";
            }
            const recipes = await this.recipesService.getFridge(fridge_id);
            return new LambdaResponse(LambdaResponseCode.OK, recipes);
        } catch (error) {
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }
}
