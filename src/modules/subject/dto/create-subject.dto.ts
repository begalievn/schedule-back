import { SemesterEnum } from '../../../utils/enums/semester.enum';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Teacher } from '../../teacher/model/teacher.model';
import { CourseYear } from '../../../utils/enums/course-year.enum';

export class CreateSubjectDto {
  @ApiProperty({
    example: 'Information Security',
    description: 'Name of a subject',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'COM401',
    description: 'Code of a subject',
  })
  @IsString()
  code: string;

  @ApiProperty({
    example: 6,
    description: 'Credits of a subject',
  })
  @IsNumber()
  credits: number;

  @ApiProperty({
    example: 4,
  })
  @IsNumber()
  numberOfHours: number;

  @ApiProperty({
    example: 0,
  })
  @IsNumber()
  lectureHours: number;

  @ApiProperty({
    example: 4,
  })
  @IsNumber()
  labHours: number;

  @ApiProperty({
    example: 'This is a description of a subject',
    description: 'Description of a subject',
  })
  @IsString()
  description: string;

  @ApiProperty({
    enum: [SemesterEnum.FALL, SemesterEnum.SPRING],
    example: 1,
    description: 'Semester of a subject',
  })
  @IsEnum(SemesterEnum)
  semester: SemesterEnum;

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [{ $ref: getSchemaPath(Teacher) }],
    },
    example: ['63d22850f649bf0d1d9e56b0'],
  })
  @IsArray()
  @IsOptional()
  teachers: Teacher[];

  @ApiProperty({
    enum: [CourseYear.FIRST_YEAR, CourseYear.SECOND_YEAR],
    isArray: true,
    example: [CourseYear.FIRST_YEAR, CourseYear.SECOND_YEAR],
  })
  @IsArray()
  courses: CourseYear[];
}
