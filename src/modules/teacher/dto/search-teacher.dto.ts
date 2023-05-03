import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SearchTeacherDto {
  @ApiProperty({
    example: 'Alex',
    description: 'FirstName of a teacher',
    required: false,
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    example: 'Blare',
    description: 'LastName of a teacher',
    required: false,
  })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    example: 'teacher@gmail.com',
    description: 'Email of a teacher',
    required: false,
  })
  @IsString()
  @IsOptional()
  email: string;
}
