import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
  controllers: [RecipesController],
  providers: [RecipesService],
  exports: [RecipesController, RecipesService], // Export controllers and services
})
export class RecipesModule {}


