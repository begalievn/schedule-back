import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Subject } from '../../subject/model/subject.model';
import { BaseModel } from '../../../base/model/base.model';
import { WorkingTimeGraphicEnum } from '../../../utils/enums/working-time-graphic.enum';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { GenderEnum } from '../../../utils/enums/gender.enum';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema()
export class Teacher extends BaseModel {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop({
    enum: GenderEnum,
  })
  gender: GenderEnum;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  workingDays: number[];

  @Prop()
  birthday: Date;

  @Prop({
    enum: WorkingTimeGraphicEnum,
    required: true,
  })
  workingGraphic: WorkingTimeGraphicEnum;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }] })
  @Type(() => Subject)
  subjects: Subject[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
