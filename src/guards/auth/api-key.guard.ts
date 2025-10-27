import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> { 
     const request = context.switchToHttp().getRequest();
     const apiKey = request.headers['x-api-key'];  

     if(!apiKey){
        throw new UnauthorizedException('API key is missing');
     }
     
     if(apiKey !== 'my-api-key'){
         throw new UnauthorizedException('Invalid API Key');
     }
    return true;
  }
}
