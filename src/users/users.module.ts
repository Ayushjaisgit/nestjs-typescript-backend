import { Module, Controller, Get, Post, Req, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import {Userscontroller} from './users.controller'

@Module({
  controllers:[Userscontroller],
  providers: [UsersService],
})
@Controller('/api')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('/users')
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('/olll')
  getlello(): string {
    return this.userService.getHello();
  }  

  @Post('/status/:userid')
  store(@Req() req:Request, @Param() params:{userId:number}){
    return {user: req.body, age: params};
  }
}


export class UsersModule {}