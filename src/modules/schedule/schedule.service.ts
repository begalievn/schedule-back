import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { Schedule, ScheduleDocument } from './model/schedule.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubjectService } from '../subject/subject.service';
import { ListScheduleParamsDto } from './dto/list-schedule-params.dto';

@Injectable()
export class ScheduleService extends BaseService<Schedule> {
  constructor(
    @InjectModel(Schedule.name)
    private readonly scheduleModel: Model<ScheduleDocument>,
    private readonly subjectService: SubjectService,
  ) {
    super(scheduleModel);
  }

  async getExampleSubjects(listParams: ListScheduleParamsDto) {
    return await this.subjectService.getExampleSubjectsForSchedule(listParams);
  }
}
