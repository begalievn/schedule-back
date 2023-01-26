import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Block } from '../../../utils/enums/block.enum';

export class SearchClassroomDto {
  @ApiProperty({
    example: 'B201',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    enum: Block,
    example: Block.B,
  })
  @IsEnum(Block)
  @IsOptional()
  block?: Block;

  @ApiProperty({
    example: 40,
  })
  @IsNumber()
  @IsOptional()
  capacity?: number;
}
