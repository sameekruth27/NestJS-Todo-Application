import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getSwaggerPage(): string {
    return 'Welcome to the Todo API!';
  }
}
