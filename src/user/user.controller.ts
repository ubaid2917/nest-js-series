import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUser() {
          return this.userService.getAllProducts();
    }   

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.userService.getProductById(Number(id));
    }

}
