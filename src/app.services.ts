import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey There! Thanks for visiting my Todo REST API site!';
  }
}