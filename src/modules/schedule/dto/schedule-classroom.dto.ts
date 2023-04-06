import { Block } from '../../../utils/enums/block.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';

export class ScheduleClassroomDto {
  @ApiProperty({
    example: 'B201',
    description: 'Name of a classroom',
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: 'string',
    enum: Block,
    example: Block.B,
    description: 'Block in which a classroom is located',
  })
  @IsEnum(Block)
  block: Block;

  @ApiProperty({
    example: 40,
    description: 'Capacity of a classroom',
  })
  capacity: number;
}
