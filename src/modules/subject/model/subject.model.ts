import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { SemesterEnum } from '../../../utils/enums/semester.enum';
import { BaseModel } from '../../../base/model/base.model';
import { Teacher } from '../../teacher/model/teacher.model';
import { Group } from '../../group/model/group.model';
import { Type } from 'class-transformer';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject extends BaseModel {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  description: string;

  @Prop()
  department: string;

  @Prop()
  credits: number;

  @Prop({
    enum: SemesterEnum,
    required: true,
  })
  semester: SemesterEnum;

  @Prop({
    type: Boolean,
    default: true,
  })
  status: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }] })
  @Type(() => Teacher)
  teachers: Teacher[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }] })
  @Type(() => Group)
  groups: Group[];
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
