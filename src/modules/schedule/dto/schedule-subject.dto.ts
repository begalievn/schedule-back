import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ScheduleSubjectDto {
  @ApiProperty({
    example: 'Operating Systems',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: [String],
    example: 'Imtiyaz Gulbarga',
  })
  @IsArray()
  @IsOptional()
  teachers: string[];

  @ApiProperty({
    example: 'B201',
  })
  @IsString()
  classroom: string;

  @ApiProperty({
    example: 2,
  })
  @Type(() => Number)
  @IsNumber()
  index: number;

  @ApiProperty({
    example: 2,
    type: 'number',
  })
  @Type(() => Number)
  @IsNumber()
  numberOfHours: number;
}
