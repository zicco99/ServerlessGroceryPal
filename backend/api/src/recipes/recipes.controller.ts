import { Get, Delete, Injectable, Param, Controller } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from 'prisma/client';

@Injectable()
@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @Get()
    async getAllRecipes(): Promise<Recipe[]> {
      return this.recipesService.getAllRecipes();

      
    }
  
    @Get(':id')
    async getRecipeById(@Param('id') id: string): Promise<Recipe> {
      return this.recipesService.getRecipeById(parseInt(id));
    }
  
    @Delete(':id')
    async deleteRecipe(@Param('id') id: string): Promise<void> {
      await this.recipesService.deleteRecipe(parseInt(id));
      return
    }

}
