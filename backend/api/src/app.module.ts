import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './-recipes/recipes.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import {CheckAuthCognitoMiddleware} from './utils/cognito.middleware'
import { FridgesModule } from './-fridges/fridges.module';
import { UsersModule } from './-users/users.module';

@Module({
  imports: [UsersModule, FridgesModule, RecipesModule, PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckAuthCognitoMiddleware)
      .forRoutes('*');
  }
}

