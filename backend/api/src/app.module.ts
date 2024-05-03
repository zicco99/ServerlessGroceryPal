import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesService } from './recipes/recipes.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RecipesService],
})
export class AppModule {}
