// src/hateoas/hateoas.interceptor.ts

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HateoasLinks, HateoasResponse } from './hateoas.helper';

@Injectable()
export class HateoasInterceptor<T> implements NestInterceptor {

    constructor(private readonly transformer: (data: T, baseUrl: string) => HateoasLinks) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        const request = context.switchToHttp().getRequest();
        const baseUrl = `${request.protocol}://${request.get('host')}`;

        return next.handle().pipe(
            map((data: T | T[]) => {
                if (Array.isArray(data)) {
                    const transformedData = data.map(item => 
                        new HateoasResponse(item, this.transformer(item, baseUrl))
                    );
                    return transformedData;
                }
                
                return new HateoasResponse(data, this.transformer(data as T, baseUrl));
            }),
        );
    }
}