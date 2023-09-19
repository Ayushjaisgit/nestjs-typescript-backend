import { Injectable } from '@nestjs/common';
import { updateUserDto } from './dto/user-update.dto';

@Injectable()

export class UsersService {
  getHello(): string {
    return 'Alright niqq';
  }
  getlello(): string {
    return '';   
  }
}
