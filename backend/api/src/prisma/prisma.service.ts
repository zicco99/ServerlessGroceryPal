import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../prisma/client';
import { Prisma } from '../../prisma/client/default';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(optionsArg?: Prisma.Subset<Prisma.PrismaClientOptions, Prisma.PrismaClientOptions>) {
    if(process.env.ENV === 'cloud') {
      optionsArg.datasourceUrl = `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    }
    super(optionsArg);
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
