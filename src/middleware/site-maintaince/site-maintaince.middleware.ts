import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';


@Injectable() 
export class SiteMaintainceMiddleware implements NestMiddleware {  
    
  use(req: Request, res: Response, next: NextFunction) { 
   const isUnderMaintenance = process.env.SITE_MAINTENANCE; // Set to true to enable maintenance mode

    if(isUnderMaintenance === 'true') {
       return res.status(503).json({
        statusCode: 503,
        message: 'Site is currently under maintenance. Please try again later.',
       })
    }
    next();
  }
}
