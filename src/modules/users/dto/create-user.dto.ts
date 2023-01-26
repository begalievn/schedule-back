import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  surName: string;

  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  personalId: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  group: string;
}
