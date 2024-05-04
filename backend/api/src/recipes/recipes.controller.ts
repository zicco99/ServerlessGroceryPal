import { Get, Delete, Injectable, Param, Controller } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from 'prisma/client';

@Injectable()
@Controller('/recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @Get()
    async getAllRecipes(): Promise<Recipe[]> {
      return this.recipesService.getAllRecipes();
    }
  
    @Get(':id')
    async getRecipeById(@Param('id') id: number): Promise<Recipe> {
      return this.recipesService.getRecipeById(id);
    }
  
    @Delete(':id')
    async deleteRecipe(@Param('id') id: number): Promise<void> {
      this.recipesService.deleteRecipe(id);
      return
    }

}
