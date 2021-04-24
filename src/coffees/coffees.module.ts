import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({})
export class CoffeesModule {
  controllers: [CoffeesController]
  providers: [CoffeesService]
}
