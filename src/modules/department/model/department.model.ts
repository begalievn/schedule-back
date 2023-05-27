import { BaseModel } from '../../../base/model/base.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DepartmentDocument = HydratedDocument<Department>;

@Schema()
export class Department extends BaseModel {
  @Prop()
  name: string;

  @Prop()
  code: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
