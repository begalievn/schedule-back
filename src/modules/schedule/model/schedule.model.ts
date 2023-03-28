import { Teacher } from '../../teacher/model/teacher.model';
import { BaseModel } from '../../../base/model/base.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScheduleDocument = HydratedDocument<Schedule>;

interface Subject {
  title: string;
  teachers: Teacher[];
  code: string;
}

interface Course {
  course: number;
  subject: Subject[];
}

interface Days {
  day: string;
  courses: Course[];
}

@Schema()
export class Schedule extends BaseModel {
  @Prop()
  name: string;

  @Prop()
  courses: Course[];
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
