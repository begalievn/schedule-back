import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  @IsString()
  firstName: string;

  @Prop()
  @IsString()
  surName: string;

  @Prop()
  @IsNumber()
  age: string;

  @Prop()
  @IsEmail()
  email: string;

  @Prop()
  @IsString()
  personalId: string;

  @Prop()
  @IsString()
  password: string;

  @Prop()
  group: string; // TODO: change to group model;

  @Prop({
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
