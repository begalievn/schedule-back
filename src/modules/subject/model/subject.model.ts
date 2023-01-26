import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject {
  @Prop()
  name: string;

  @Prop()
  credits: number;

  @Prop()
  semester: number;
}

export const CatSchema = SchemaFactory.createForClass(Subject);
