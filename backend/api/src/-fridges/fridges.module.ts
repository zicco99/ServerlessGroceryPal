import { Module, forwardRef } from '@nestjs/common';
import { FridgesController } from './fridges.controller';
import { FridgesService } from './fridges.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => PrismaModule)], // Prisma module is injected here as a dependency
  controllers: [FridgesController],
  providers: [ FridgesService], // services are injected here
  exports: [FridgesService]
})
export class FridgesModule {}
