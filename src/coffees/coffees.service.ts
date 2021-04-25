import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeesService {

  constructor(
    @InjectRepository(Coffee)
    private  coffeeRepository: Repository<Coffee>
  ){}



  findAll() {
    return this.coffeeRepository.find({
      relations: ['flavors']
      }
    );
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne(id, {
      relations: ['flavors']
    });
    if(!coffee){
      throw new NotFoundException(`${id}번째 커피를 확인할 수 없습니다.`)
    }
    return coffee
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto)
   return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    })
    if (!coffee) {
     throw new NotFoundException('커피를 찾을 수 없습니다.')
    }
  }

  async remove(id: string) {
    const coffee = await this.findOne(id)
    return this.coffeeRepository.remove(coffee)
  }
}