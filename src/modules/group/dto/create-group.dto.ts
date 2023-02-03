import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({
    example: 'COM19',
    description: 'Name of a group',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 75,
    description: 'Number of students in a group',
  })
  @IsNumber()
  studentsCount: number;

  @ApiProperty({
    example: 4,
    description: 'Year of a group',
  })
  @IsNumber()
  year: number;
}
