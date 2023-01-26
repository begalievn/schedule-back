import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class SearchUserDto {
  @ApiProperty({
    example: 'playerone@gmail.com',
  })
  @IsEmail()
  @IsOptional()
  email: string;
}
