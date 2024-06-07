import { Get, Delete, Injectable, Param, Controller, HttpException } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { LambdaResponse, LambdaResponseCode } from '../utils/lambda'; // Adjust the import path as needed

@Injectable()
@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @Get()
    async getAllRecipes(): Promise<LambdaResponse> {
        try {
            const recipes = await this.recipesService.getAllRecipes();
            return new LambdaResponse(LambdaResponseCode.OK, recipes);
        } catch (error) {
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Get(':id')
    async getRecipeById(@Param('id') id: string): Promise<LambdaResponse> {
        try {
            const recipe = await this.recipesService.getRecipeById(id);
            if (recipe) {
                return new LambdaResponse(LambdaResponseCode.OK, recipe);
            } else {
                throw new HttpException(
                    new LambdaResponse(LambdaResponseCode.NOT_FOUND, { message: 'Recipe not found' }),
                    LambdaResponseCode.NOT_FOUND
                );
            }
        } catch (error) {
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Delete(':id')
    async deleteRecipe(@Param('id') id: string): Promise<LambdaResponse> {
        try {
            await this.recipesService.deleteRecipe(id);
            return new LambdaResponse(LambdaResponseCode.OK, { message: 'Recipe deleted successfully' });
        } catch (error) {
            throw new HttpException(
                new LambdaResponse(LambdaResponseCode.INTERNAL_SERVER_ERROR, { message: 'Internal Server Error' }),
                LambdaResponseCode.INTERNAL_SERVER_ERROR
            );
        }
    }
}
