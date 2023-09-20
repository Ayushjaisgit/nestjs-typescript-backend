import { Injectable } from '@nestjs/common';

@Injectable()

export class AuthService {

    signup(){
        return {lol: "is an object signup"}
    }
    signin(){
        return {lol: "is an object signin"}
    }
}
