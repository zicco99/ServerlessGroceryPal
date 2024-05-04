import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // Defines PrismaService as a provider within this module
  exports: [PrismaService], // Exports PrismaService to make it available for dependency injection in other modules
})
export class PrismaModule {}