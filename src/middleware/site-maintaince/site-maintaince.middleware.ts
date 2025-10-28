import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class SiteMaintainceMiddleware implements NestMiddleware { 
  private isUnderMaintenance = true; // Set to true to enable maintenance mode
  use(req: Request, res: Response, next: NextFunction) { 

    if(this.isUnderMaintenance){
       return res.status(503).json({
        statusCode: 503,
        message: 'Site is currently under maintenance. Please try again later.',
       })
    }
    next();
  }
}
