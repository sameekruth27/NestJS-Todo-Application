import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey There! Thanks for visiting my Todo rest API site! You can access the Todo functionality here: <a href="https://nestjs-todo-sk.vercel.app/swagger">https://nestjs-todo-sk.vercel.app/swagger</a>';
  }

  getSwaggerPage(): string {
    return 'Welcome to the Todo API!';
  }
}
