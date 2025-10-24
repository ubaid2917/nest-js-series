import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, PostController],
  providers: [AppService, UserService],
})
export class AppModule {}
