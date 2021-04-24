import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(){
    return 'This action returns all coffees'
  }

  @Get(':id')
  findOne(@Param('id')id: string){
    return `This action returns ${id} coffee`
  }


  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body('name') body){
    return body
  }

  @Patch(':id')
  update(@Param('id')id: string, @Body() body ){
    return `This action updates #${id} coffee`
  }

  @Delete(':id')
  delete(@Param('id')id: string){
    return `This action remove #${id} coffee`
  }
}
