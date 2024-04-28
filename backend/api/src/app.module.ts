import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feedback } from './db/models/feedback.entity';
import { Recipe } from './db/models/recipe.entity';
import { User } from './db/models/user.entity';
import { EnvironmentService } from './config/environment.service';
import { UsersModule } from './endpoints/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'development' ? '.env' : undefined,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: process.env.NODE_ENV === 'production' ? process.env.DB_HOST : configService.get<string>('DB_HOST'),
        port: process.env.NODE_ENV === 'production' ? parseInt(process.env.DB_PORT as string, 10) : configService.get<number>('DB_PORT'),
        username: process.env.NODE_ENV === 'production' ? process.env.DB_USERNAME : configService.get<string>('DB_USERNAME'),
        password: process.env.NODE_ENV === 'production' ? process.env.DB_PASSWORD : configService.get<string>('DB_PASSWORD'),
        database: process.env.NODE_ENV === 'production' ? process.env.DB_NAME : configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
        entities: [User, Feedback, Recipe],
      } as TypeOrmModuleOptions),
      inject: [ConfigService]
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, EnvironmentService],
})
export class AppModule {}
