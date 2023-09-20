import { Module, Controller, Get, Post, Req, Param, Body, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/user-update.dto';

@Module({
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

  @Post('/status/')
  store(@Req() req:Request, @Param() params:{userId:number} , @Body() body:any ){
    return {user: body, age: params };
    // return  body

  }

  // request payload - defining the structure of the body 
  @Patch('/update')

  update(@Body() updateUserDto:updateUserDto ){

    return  updateUserDto;

  }
}


export class Userscontroller {}



