import { SemesterEnum } from '../../../utils/enums/semester.enum';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Teacher } from '../../teacher/model/teacher.model';
import { Group } from '../../group/model/group.model';

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
    example: 'This is a description of a subject',
    description: 'Description of a subject',
  })
  @IsString()
  description: string;

  @ApiProperty({
    enum: SemesterEnum,
    example: 1,
    description: 'Semester of a subject',
  })
  @IsEnum(SemesterEnum)
  semester: SemesterEnum;

  @ApiProperty({
    example: true,
    description: 'Status of a subject, active or not',
  })
  @IsOptional()
  status: boolean;

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [{ $ref: getSchemaPath(Teacher) }],
    },
    example: ['63d22850f649bf0d1d9e56b0'],
  })
  @IsArray()
  teachers: Teacher[];

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [{ $ref: getSchemaPath(Group) }],
    },
    example: ['_id'],
  })
  @IsArray()
  groups: Group[];
}
