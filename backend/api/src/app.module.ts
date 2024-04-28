import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { SubjectsModule } from './endpoints/subjects/subjects.module';
import { HourLogsModule } from './endpoints/hour-logs/hour-logs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinutesOverflowConstraint } from './validation/minutes-overflow.validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
    }),
    WinstonModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([]), // Include your TypeORM entities here
    SubjectsModule,
    HourLogsModule
  ],
  controllers: [AppController],
  providers: [AppService, MinutesOverflowConstraint],
})
export class AppModule {}
