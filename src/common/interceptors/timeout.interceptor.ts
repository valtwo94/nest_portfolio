import { CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException } from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(timeout(3000), catchError(err => {
      if(err instanceof TimeoutError){
        return throwError(new RequestTimeoutException('요청 시간이 초과되었습니다.'));
      }
      return throwError(err);
    }))
  }
}
