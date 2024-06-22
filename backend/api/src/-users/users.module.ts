import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class RecipesModule {}
