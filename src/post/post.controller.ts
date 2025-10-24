import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {

    @Get()
    getPost() : string {
        return 'This is the post endpoint';
    }
}
