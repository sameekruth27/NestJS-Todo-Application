import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/swagger')
  getSwaggerPage(): string {
    return this.appService.getSwaggerPage();
  }
}
