import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Public } from '../public.decorator';

@Controller('post')
export class PostController {
   constructor(private readonly postService: PostService) {}
    
    @Public()
    @Get()
    getPost() : any {
         return this.postService.getAllPosts();
    }   

    @Get(':id')
    getPostById(@Param('id') id: string){
        return this.postService.getPostById(Number(id));
    }
}
