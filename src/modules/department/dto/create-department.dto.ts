import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({
    example: 'Computer Science',
    description: 'Name of a department',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'COM',
    description: 'Code name of a department',
  })
  @IsString()
  code: string;
}
