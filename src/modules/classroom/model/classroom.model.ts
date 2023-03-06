import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Block } from '../../../utils/enums/block.enum';
import { BaseModel } from '../../../base/model/base.model';

export type ClassroomDocument = HydratedDocument<Classroom>;

@Schema()
export class Classroom extends BaseModel {
  @Prop()
  title: string;

  @Prop({
    type: String,
    enum: Block,
    default: Block.B,
  })
  block: Block;

  @Prop()
  capacity: number;
}

export const ClassroomSchema = SchemaFactory.createForClass(Classroom);
