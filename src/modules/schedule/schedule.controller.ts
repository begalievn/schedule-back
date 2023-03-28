import { Controller, Get, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListScheduleParamsDto } from './dto/list-schedule-params.dto';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('example/subjects')
  @ApiOperation({ summary: 'List of subjects to create a schedule' })
  findAll(@Query() listParams: ListScheduleParamsDto) {
    return this.scheduleService.getExampleSubjects(listParams);
  }
}
