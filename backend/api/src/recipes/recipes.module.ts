import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
  imports: [PrismaModule], //import prisma module to use prisma service in your module
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}