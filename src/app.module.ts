import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [AlbumModule],
  controllers: [AppController, UserController, PostController],
  providers: [AppService, UserService, PostService, ],
})
export class AppModule {}
