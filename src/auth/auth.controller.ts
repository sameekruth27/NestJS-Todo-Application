import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({
    summary: 'Register a new user',
    description: 'This endpoint allows a new user to register by providing their email, password, and other required details.'
  })
  create(@Body() registerDTO: RegisterDTO) {
    return this.authService.register(registerDTO);
  }

  @Post('/login')
  @ApiOperation({
    summary: 'User login',
    description: 'This endpoint allows a user to login by providing their email and password. Upon successful authentication, a JWT token will be returned for subsequent requests.'
  })
  login(@Body() loginDTO : LoginDTO) {
    return this.authService.login(loginDTO);
  }
}
