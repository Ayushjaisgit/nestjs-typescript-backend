import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';


@Module({

  controllers: [UserController,AppController,AuthController],
  providers: [AppService,UsersService,AuthService],
  imports: [AuthModule],

})

export class AppModule {}
