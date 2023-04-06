import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ScheduleTeacherDto {
  @ApiProperty({
    type: [String],
    isArray: true,
    description: 'Array of teachers IDs',
  })
  @IsOptional()
  teachers: string[];
}
