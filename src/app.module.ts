import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.services';

@Module({
  imports: [DatabaseModule, TodoModule, AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
