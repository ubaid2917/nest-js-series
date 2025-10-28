import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { AlbumModule } from './album/album.module';
import { EmployeeModule } from './employee/employee.module';
import { DetailsController } from './details/details.controller';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiKeyGuard } from './guards/auth/api-key.guard';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { SiteMaintainceMiddleware } from './middleware/site-maintaince/site-maintaince.middleware';

@Module({
  imports: [AlbumModule, EmployeeModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, PostController, DetailsController],
  providers: [AppService, UserService, PostService,

    {provide: APP_GUARD, useClass: AuthGuard},
    {provide: APP_GUARD, useClass: ApiKeyGuard},
  ],
})
export class AppModule  implements NestModule { 
   // Configure middleware globally  
  configure(consumer: MiddlewareConsumer) {
   consumer.apply(LoggerMiddleware).forRoutes('*');  // middleware 1
   consumer.apply(SiteMaintainceMiddleware).forRoutes('*'); // middleware 2
  }
}
