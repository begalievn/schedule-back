import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('example/subjects')
  @ApiOperation({ summary: 'List of subjects to create a schedule' })
  findAll() {
    return this.scheduleService.list();
  }
}
