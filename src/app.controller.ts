import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello1(): string {
    return `Hello from Todo REST API!`;
  }
}