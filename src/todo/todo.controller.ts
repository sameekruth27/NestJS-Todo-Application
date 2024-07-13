import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UserEmail } from '../common/decorators/user-email.decorator';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({
    summary: 'Create a new todo item',
    description: 'This endpoint allows an authenticated user to create a new todo item.'
  })
  create(@Body() createTodoDto: CreateTodoDto, @UserEmail() userEmail: string) {
    return this.todoService.create(createTodoDto, userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({
    summary: 'Get all todo items',
    description: 'This endpoint retrieves all todo items for the authenticated user.'
  })
  findAll(@UserEmail() userEmail: string) {
    return this.todoService.findAll(userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({
    summary: 'Get a specific todo item',
    description: 'This endpoint retrieves a specific todo item by its ID.'
  })
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific todo item',
    description: 'This endpoint allows an authenticated user to update a specific todo item by its ID.'
  })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a specific todo item',
    description: 'This endpoint allows an authenticated user to delete a specific todo item by its ID.'
  })
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
