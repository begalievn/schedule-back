import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseModel } from '../../../base/model/base.model';
import { Subject } from '../../subject/model/subject.model';

export type GroupDocument = HydratedDocument<Group>;

@Schema()
export class Group extends BaseModel {
  @Prop()
  name: string;

  @Prop()
  studentsCount: number;

  @Prop()
  year: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }] })
  subjects: Subject[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
