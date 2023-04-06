import { ApiProperty } from '@nestjs/swagger';
import { SemesterEnum } from '../../../utils/enums/semester.enum';
import { IsArray, IsDate, IsEnum, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ScheduleDayDto } from './schedule-day.dto';

export class CreateScheduleDto {
  @ApiProperty({
    example: 'White seals',
    description: 'Name of a schedule',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
    example: '2023-04-04T09:40:29.222Z',
  })
  @Type(() => Date)
  @IsDate()
  year: Date;

  @ApiProperty({
    enum: [SemesterEnum.FALL, SemesterEnum.SPRING],
    example: 1,
    description: 'Semester of a subject',
  })
  @IsEnum(SemesterEnum)
  semester: SemesterEnum;

  @ApiProperty({
    type: () => [ScheduleDayDto],
  })
  @IsArray()
  // @ValidateNested({ each: true })
  @Type(() => ScheduleDayDto)
  days: ScheduleDayDto[];
}
