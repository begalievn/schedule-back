import { Block } from '../../../utils/enums/block.enum';
import { IsNumber, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassroomDto {
  @ApiProperty({
    example: 'B201',
  })
  @IsString()
  title: string;

  @ApiProperty({
    enum: Block,
    example: Block.B,
  })
  @IsEnum(Block)
  block: Block;

  @ApiProperty({
    example: 40,
  })
  @IsNumber()
  capacity: number;
}
