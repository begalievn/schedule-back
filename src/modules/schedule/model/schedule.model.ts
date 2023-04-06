import { BaseModel } from '../../../base/model/base.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SemesterEnum } from '../../../utils/enums/semester.enum';
import { Classroom } from '../../classroom/model/classroom.model';

export type ScheduleDocument = HydratedDocument<Schedule>;

export interface IClassroom {
  classroom: Classroom;
}

export interface ISubjectSubject {
  name: string;
  teachers: string[];
  classroom: string;
  index: number;
  numberOfHours: number;
}

export interface ICourse {
  course: number;
  subjects: ISubjectSubject[] | null[];
}

export interface IDays {
  day: string;
  courses: ICourse[];
}

@Schema()
export class Schedule extends BaseModel {
  @Prop()
  name: string;

  @Prop({
    enum: SemesterEnum,
    required: true,
  })
  semester: SemesterEnum;

  @Prop({
    type: Date,
  })
  year: Date;

  @Prop()
  days: IDays[];
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
