import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { GenderEnum } from '../../../utils/enums/gender.enum';
import { WorkingTimeGraphicEnum } from '../../../utils/enums/working-time-graphic.enum';
import { Subject } from '../../subject/model/subject.model';
import { Type } from 'class-transformer';

export class UpdateTeacherDto {
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
  @IsOptional()
  email: string;

  @ApiProperty({
    enum: GenderEnum,
    example: GenderEnum.MALE,
    description: 'Gender of a teacher',
  })
  @IsEnum(GenderEnum)
  @IsOptional()
  gender: GenderEnum;

  @ApiProperty({
    enum: WorkingTimeGraphicEnum,
    example: WorkingTimeGraphicEnum.BEFORE,
    description: 'Working graphic of a teacher',
  })
  @IsEnum(WorkingTimeGraphicEnum)
  @IsOptional()
  workingGraphic: WorkingTimeGraphicEnum;

  @ApiProperty({
    example: 'Bokonbaeva 18',
    description: 'Address of a teacher',
  })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({
    example: '0556374856',
    description: 'Phone number of a teacher',
  })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({
    example: `${new Date()}`,
    description: 'Birthday of a teacher',
  })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  birthday: Date;

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
