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

@Module({
  imports: [AlbumModule, EmployeeModule, CategoryModule],
  controllers: [AppController, UserController, PostController, DetailsController],
  providers: [AppService, UserService, PostService, ],
})
export class AppModule {}
