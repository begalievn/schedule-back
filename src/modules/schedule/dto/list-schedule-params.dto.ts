import { ListParamsDto } from '../../../base/dto/list-params.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';
import { SemesterEnum } from '../../../utils/enums/semester.enum';

export class ListScheduleParamsDto extends ListParamsDto {
  @ApiProperty({
    type: Number,
    default: 1,
    required: false,
  })
  @IsNumber()
  @IsEnum(SemesterEnum)
  @Type(() => Number)
  semester: number;
}
