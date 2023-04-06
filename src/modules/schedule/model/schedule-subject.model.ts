import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseModel } from '../../../base/model/base.model';
import mongoose, { HydratedDocument } from 'mongoose';
import { Classroom } from '../../classroom/model/classroom.model';
import { Subject } from '../../subject/model/subject.model';
import { Type } from 'class-transformer';
import { Teacher } from '../../teacher/model/teacher.model';

export type ScheduleSubjectDocument = HydratedDocument<ScheduleSubject>;

@Schema()
export class ScheduleSubject extends BaseModel {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
  subject: Subject;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }] })
  @Type(() => Teacher)
  teachers: Teacher[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' })
  classroom: Classroom;

  @Prop()
  numberOfHours: number;
}

export const ScheduleSubjectSchema =
  SchemaFactory.createForClass(ScheduleSubject);
