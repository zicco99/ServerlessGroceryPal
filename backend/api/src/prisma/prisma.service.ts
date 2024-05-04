// prisma.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '../../prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = this.createPrismaClient();
  }

  createPrismaClient(): PrismaClient {
    let dbUrl: string;

    if (process.env.ENV === "cloud") {
      dbUrl = `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    } else {
      dbUrl = "postgresql://postgres:postgres@localhost:5432/postgres";
    }
    
    process.env.DATABASE_URL = dbUrl;

    return new PrismaClient({
      datasources: {
        db: {
          url: dbUrl,
        },
      },
    });
  }

  getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}
