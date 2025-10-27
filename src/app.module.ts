import { Module } from '@nestjs/common';
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

@Module({
  imports: [AlbumModule, EmployeeModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, PostController, DetailsController],
  providers: [AppService, UserService, PostService,

    {provide: APP_GUARD, useClass: AuthGuard},
    {provide: APP_GUARD, useClass: ApiKeyGuard},
  ],
})
export class AppModule { }
