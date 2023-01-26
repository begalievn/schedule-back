import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeacherDocument = HydratedDocument<Teacher>;

export class Teacher {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  subjects: string[];

  @Prop()
  working_days: string[];

  @Prop()
  working_hours: string[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
