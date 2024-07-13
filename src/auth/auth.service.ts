import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDTO: RegisterDTO) {
    const user = await this.databaseService.user.findFirst({
      where: {
        email: registerDTO.email,
      },
    });

    if (user) {
      throw new BadGatewayException('User with this email already exists!');
    }

    registerDTO.password = await bcrypt.hash(registerDTO.password, 10);
    const res = await this.databaseService.user.create({ data: registerDTO });
    return res;
  }

  async login(loginDTO: LoginDTO) {
    const user = await this.databaseService.user.findFirst({
      where: {
        email: loginDTO.email,
      },
    });

    if (!user) {
      throw new NotFoundException('User Not exist!');
    }
    const validatePassword = await bcrypt.compare(
      loginDTO.password,
      user.password,
    );

    if (!validatePassword) {
      throw new NotFoundException('Wrong Password!');
    }

    return {
      accessToken: this.jwtService.sign({ email: loginDTO.email }),
    };
  }
}
