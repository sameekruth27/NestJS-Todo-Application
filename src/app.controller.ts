import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hey There! Thanks for visiting my Todo rest API site! You can access the Todo functionality here: <a href="https://nestjs-todo-sk.vercel.app/swagger">https://nestjs-todo-sk.vercel.app/swagger</a>';
  }

  @Get('/welcome')
  getSwaggerPage(): string {
    return this.appService.getSwaggerPage();
  }
}
