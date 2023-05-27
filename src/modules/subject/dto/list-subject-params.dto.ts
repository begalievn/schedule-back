import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ListSubjectParamsDto {
  @ApiProperty({
    example: 1,
    description: 'Semester',
    required: false,
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  semester?: number;

  @ApiProperty({
    example: 1,
    description: 'Course year',
    required: false,
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  course?: number;

  @ApiProperty({
    example: 'COM',
    description: 'Name of the department',
    required: false,
  })
  @IsString()
  @IsOptional()
  department?: string;
}
