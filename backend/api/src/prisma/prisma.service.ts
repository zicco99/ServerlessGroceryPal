// prisma.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../prisma/client';

let DB_URL: string

if(process.env.ENV==="cloud"){
  DB_URL = `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  console.log("DB_URL: ",DB_URL)
}

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    const db_url = process.env.ENV==="cloud" 
                  ? DB_URL
                  : "postgresql://postgres:postgres@localhost:5432/postgres";


    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: db_url,
        },
      },
    });
  }

  getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}

