// prisma.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor(private readonly datasourceUrl?: string) {
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: this.datasourceUrl || process.env.DATABASE_URL,
        },
      },
    });
  }

  getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}
