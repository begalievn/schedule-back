import { ApiProperty } from '@nestjs/swagger';
import { ScheduleSubjectDto } from './schedule-subject.dto';
import { IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class ScheduleCourseDto {
  @ApiProperty({
    example: 1,
    description: 'Course year',
  })
  course: number;

  @ApiProperty({
    type: () => [ScheduleSubjectDto, null],
  })
  @IsArray()
  @Type(() => ScheduleSubjectDto)
  subjects: (ScheduleSubjectDto | null)[];
}
