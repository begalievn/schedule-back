import { Block } from '../../../utils/enums/block.enum';
import { IsNumber, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ClassroomType } from '../../../utils/enums/classroom-type.enum';

export class CreateClassroomDto {
  @ApiProperty({
    example: 'B201',
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
    type: 'enum',
    enum: ClassroomType,
    description: 'Type of a classroom',
  })
  @IsEnum(ClassroomType)
  type: ClassroomType;

  @ApiProperty({
    example: 40,
  })
  @IsNumber()
  capacity: number;
}
