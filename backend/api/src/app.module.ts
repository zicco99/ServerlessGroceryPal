import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feedback } from './db/models/feedback.entity';
import { Recipe } from './db/models/recipe.model';
import { User } from './db/models/user.model';
import { EnvironmentService } from './config/environment.service';
import { UsersModule } from './endpoints/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'development' ? '.env' : undefined,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
        entities: [User, Feedback, Recipe],
      }),
    }),
    UsersModule,
    WinstonModule,
  ],
  controllers: [AppController],
  providers: [AppService, EnvironmentService],
})
export class AppModule {}

