import {  IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString({message:'커피이름은 문자열로 입력해야합니다'})
  readonly name: string;
  @IsString({message: '브랜드 이름은 문자열로 입력해야합니다'})
  readonly brand: string;
  @IsString({message: '맛의 종류는 문자열의 배열로 입력해야합니다',
    each: true
  })
  readonly flavors: string[];
}

