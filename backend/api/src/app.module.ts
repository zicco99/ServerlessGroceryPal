import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesService } from './recipes/recipes.service';
import { RecipesController } from './recipes/recipes.controller';

@Module({
  imports: [],
  controllers: [AppController, RecipesController],
  providers: [AppService],
})
export class AppModule {}
