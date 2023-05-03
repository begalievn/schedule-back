import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SearchTeacherV2Dto {
  @ApiProperty({
    description: 'Search teacher',
    required: false,
  })
  @IsString()
  @IsOptional()
  search: string;
}
