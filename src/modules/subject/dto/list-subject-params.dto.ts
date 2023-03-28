import { IsNumber, IsOptional } from 'class-validator';
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
}
