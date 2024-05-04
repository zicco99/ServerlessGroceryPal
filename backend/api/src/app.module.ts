import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

console.log(`postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
@Module({
  imports: [RecipesModule, PrismaModule], // Importing RecipesModule and PrismaModule, we are enheriting from them the controller and the db ser
  controllers: [AppController],
  providers: [AppService, {
    provide: PrismaService,
    useFactory: () => new PrismaService(`postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`),
  },],
})
export class AppModule {}
