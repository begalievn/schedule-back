import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClassroomDocument = HydratedDocument<Classroom>;

@Schema()
export class Classroom {
  @Prop()
  title: string;

  @Prop({
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E'],
    default: 'B',
  })
  block: string;

  @Prop()
  capacity: number;
}

export const ClassroomSchema = SchemaFactory.createForClass(Classroom);
