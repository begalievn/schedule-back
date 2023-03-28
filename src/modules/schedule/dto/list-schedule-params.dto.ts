import { ListParamsDto } from '../../../base/dto/list-params.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ListScheduleParamsDto extends ListParamsDto {
  @ApiProperty({
    type: Number,
    default: 1,
    required: false,
  })
  @IsNumber()
  @Type(() => Number)
  semester: number;
}
