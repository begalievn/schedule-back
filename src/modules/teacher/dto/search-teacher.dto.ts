import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SearchTeacherDto {
  @ApiProperty({
    example: 'Alex',
    description: 'FirstName of a teacher',
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    example: 'Blare',
    description: 'LastName of a teacher',
  })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    example: 'teacher@gmail.com',
    description: 'Email of a teacher',
  })
  @IsEmail()
  @IsOptional()
  email: string;
}
