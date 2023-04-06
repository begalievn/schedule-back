import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { ScheduleCourseDto } from './schedule-course.dto';
import { Type } from 'class-transformer';

export class ScheduleDayDto {
  @ApiProperty({
    example: 'Monday',
    description: 'Day of the week',
  })
  @IsString()
  day: string;

  @ApiProperty({
    type: () => [ScheduleCourseDto],
  })
  @IsArray()
  @Type(() => ScheduleCourseDto)
  courses: ScheduleCourseDto[];
}
