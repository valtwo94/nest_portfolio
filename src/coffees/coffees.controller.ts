import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query, SetMetadata,
  UsePipes,
} from '@nestjs/common';
import {CoffeesService} from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Public } from '../common/decorators/public.decorator';


@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {
  }

  @Public()
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeesService.findAll(paginationQuery);
  }


  @Get(':id')
  findOne(@Param('id')id: string) {
    return this.coffeesService.findOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id')id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto );
  }

  @Delete(':id')
  delete(@Param('id')id: string) {
    return this.coffeesService.remove(id);
  }
}
