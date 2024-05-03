import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RecipesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllRecipes() {
    return await this.prismaService.recipe.findMany();
  }

  async getRecipeById(id: number) {
    return await this.prismaService.recipe.findUnique({
      where: { id },
    });
  }

  async deleteRecipe(id: number) {
    return await this.prismaService.recipe.delete({
      where: { id },
    });
  }
}
