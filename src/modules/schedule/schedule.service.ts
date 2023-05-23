import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { Schedule, ScheduleDocument } from './model/schedule.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubjectService } from '../subject/subject.service';
import { ListScheduleParamsDto } from './dto/list-schedule-params.dto';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import {
  ScheduleSubject,
  ScheduleSubjectDocument,
} from './model/schedule-subject.model';
import { TeacherService } from '../teacher/teacher.service';

@Injectable()
export class ScheduleService extends BaseService<Schedule> {
  constructor(
    @InjectModel(Schedule.name)
    private readonly scheduleModel: Model<ScheduleDocument>,
    @InjectModel(ScheduleSubject.name)
    private readonly scheduleSubjectModel: Model<ScheduleSubjectDocument>,
    private readonly teacherService: TeacherService,
    private readonly subjectService: SubjectService,
  ) {
    super(scheduleModel);
  }

  async listSchedules(listParams: ListScheduleParamsDto): Promise<Schedule[]> {
    const { semester } = listParams;
    return this.scheduleModel.find({
      semester,
    });
  }

  async createSchedule(createScheduleDto: CreateScheduleDto) {
    const schedule = new this.scheduleModel(createScheduleDto);
    return schedule.save();
  }

  async getScheduleById(id: string) {
    const schedule = await this.scheduleModel.findById(id).exec();
    return schedule;
  }

  async getExampleSubjects(listParams: ListScheduleParamsDto) {
    return await this.subjectService.getExampleSubjectsForSchedule(listParams);
  }

  async getActiveSchedule() {
    const activeSchedule = await this.scheduleModel.findOne({ active: true });
    return activeSchedule;
  }

  async changeActiveSchedule(id: string) {
    const activeSchedule = await this.getActiveSchedule();
    if (activeSchedule) {
      await this.update(activeSchedule._id.toString(), { active: false });
    }

    const result = await this.update(id, { active: true });
    return result;
  }
}
