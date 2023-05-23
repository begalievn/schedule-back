import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, Put,
  Query,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListScheduleParamsDto } from './dto/list-schedule-params.dto';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  @ApiOperation({ summary: 'Получение списка расписаний' })
  listSchedule(@Query() listParams: ListScheduleParamsDto) {
    return this.scheduleService.listSchedules(listParams);
  }

  @Post()
  @ApiOperation({ summary: 'Создание расписания' })
  createSchedule(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.createSchedule(createScheduleDto);
  }

  @Get('active')
  @ApiOperation({ summary: 'Получение активного расписания' })
  getActiveSchedule() {
    return this.scheduleService.getActiveSchedule();
  }

  @Put('active/:id')
  @ApiOperation({ summary: 'Изменение активного расписания' })
  changeActiveSchedule(@Param('id') id: string) {
    return this.scheduleService.changeActiveSchedule(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение расписания по ID' })
  findById(@Param('id') id: string) {
    return this.scheduleService.getScheduleById(id);
  }

  @Get('example/subjects')
  @ApiOperation({ summary: 'List of subjects to create a schedule' })
  findAll(@Query() listParams: ListScheduleParamsDto) {
    return this.scheduleService.getExampleSubjects(listParams);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a schedule by id' })
  async update(
    @Param('id') id: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.scheduleService.update(id, updateScheduleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a schedule by id' })
  async remove(@Param('id') id: string) {
    return this.scheduleService.delete(id);
  }
}
