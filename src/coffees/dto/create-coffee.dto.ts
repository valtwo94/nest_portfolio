import {  IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({description: '커피 이름'})
  @IsString({message:'커피이름은 문자열로 입력해야합니다'})
  readonly name: string;
  @ApiProperty({description: '커피 브랜드'})
  @IsString({message: '브랜드 이름은 문자열로 입력해야합니다'})
  readonly brand: string;
  @ApiProperty({description: '커피 맛 배열'})
  @IsString({message: '맛의 종류는 문자열의 배열로 입력해야합니다',
    each: true
  })
  readonly flavors: string[];
}

