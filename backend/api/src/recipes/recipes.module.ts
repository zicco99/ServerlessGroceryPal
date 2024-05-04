import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
  imports: [], 
  controllers: [RecipesController], // declare the controllers that this module uses ()
  providers: [RecipesService], // declare the components (services, providers, etc.) that are managed by the Nest.js dependency injection container within the current module or the module that imports this module
  exports: [RecipesService, RecipesController], // exports the component (service, provider, controller, etc.) from this module so that other modules can use it.
})
export class RecipesModule {}
