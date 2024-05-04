import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecipesService {
    db_client: any;

  constructor(private readonly prismaService: PrismaService) {
    this.db_client = this.prismaService.getPrismaClient();
  }

  async getAllRecipes() {
    return await this.db_client.recipe.findMany();
  }

  async getRecipeById(id: number) {
    return await this.db_client.recipe.findUnique({
      where: { id },
    });
  }

  async deleteRecipe(id: number) {
    return await this.db_client.recipe.delete({
      where: { id },
    });
  }
}
