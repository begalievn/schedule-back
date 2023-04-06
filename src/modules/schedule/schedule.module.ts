import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Schedule, ScheduleSchema } from './model/schedule.model';
import { SubjectModule } from '../subject/subject.module';
import {
  ScheduleSubject,
  ScheduleSubjectSchema,
} from './model/schedule-subject.model';
import { TeacherModule } from '../teacher/teacher.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Schedule.name, schema: ScheduleSchema },
      { name: ScheduleSubject.name, schema: ScheduleSubjectSchema },
    ]),
    SubjectModule,
    TeacherModule,
  ],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
