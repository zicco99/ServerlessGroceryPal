import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private readonly db_client: PrismaService) {
  }

  async getAllRecipes() {
    return await this.db_client.recipe.findMany();
  }

  async getRecipeById(id: string) {
    return await this.db_client.recipe.findUnique({
      where: { id },
    });
  }

  async deleteRecipe(id: string) {
    return await this.db_client.recipe.delete({
      where: { id },
    });
  }
}
