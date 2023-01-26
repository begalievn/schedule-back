import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto';
import { UsersService } from '../users/users.service';
import { Hash } from '../../utils/hash.util';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const isUserExists = await this.usersService.findOne({
      email: createUserDto.email,
    });
    if (isUserExists) {
      throw new BadRequestException('User already exists');
    }
    createUserDto.password = Hash.make(createUserDto.password);
    return this.usersService.create(createUserDto);
  }

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findOne({ email });
    if (user && Hash.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user._id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
