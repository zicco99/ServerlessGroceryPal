import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [RecipesModule, PrismaModule], // Importing RecipesModule and PrismaModule, we are enheriting from them the controller and the db service
  controllers: [AppController],
  providers: [AppService, PrismaService], // This way we can use PrismaService within the entire app, as this module is the root module
})
export class AppModule {}
