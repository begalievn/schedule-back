import { Subject } from '../../subject/model/subject.model';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsArray, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { WorkingTimeGraphicEnum } from '../../../utils/enums/working-time-graphic.enum';

export class CreateTeacherDto {
  @ApiProperty({
    example: 'Alex',
    description: 'FirstName of a teacher',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Blare',
    description: 'LastName of a teacher',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'teacher@gmail.com',
    description: 'email of a teacher',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    enum: WorkingTimeGraphicEnum,
    example: WorkingTimeGraphicEnum.BEFORE,
    description: 'Working graphic of a teacher',
  })
  @IsEnum(WorkingTimeGraphicEnum)
  @IsOptional()
  workingGraphic: WorkingTimeGraphicEnum;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'number',
    },
    example: [1, 2, 3, 4, 5],
  })
  @IsArray()
  @IsOptional()
  workingDays: number[];

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [{ $ref: getSchemaPath(Subject) }],
    },
    example: ['63d22850f649bf0d1d9e56b0'],
  })
  @IsArray()
  @IsOptional()
  subjects: Subject[];
}
