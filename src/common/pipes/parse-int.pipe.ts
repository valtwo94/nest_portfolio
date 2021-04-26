import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if(isNaN(val)){
      throw new BadRequestException(
        `인증 실패. "${val}" 는 정수가 아닙니다. `
      )
    }
    return val;
  }
}
