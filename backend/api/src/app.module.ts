import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './-recipes/recipes.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import {CheckAuthCognitoMiddleware} from './utils/cognito.middleware'

@Module({
  imports: [RecipesModule, PrismaModule], // Importing RecipesModule and PrismaModule, we are enheriting from them the controller and the db service
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

