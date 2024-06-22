import { Module, forwardRef } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  controllers: [RecipesController],
  providers: [RecipesService],
  exports: [RecipesService]
})
export class RecipesModule {}
