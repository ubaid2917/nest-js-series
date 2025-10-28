import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); 

    const response = ctx.getResponse<Response>();  

    const request = ctx.getRequest<Request>();

    const status =
      typeof exception?.getStatus === 'function' ? exception.getStatus() : 500;
    
   response.status(status).json({
    statusCode: status,
    message: exception?.message || 'Internal server error',
   })
  }
}
