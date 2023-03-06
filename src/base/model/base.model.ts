import { Prop } from '@nestjs/mongoose';

export abstract class BaseModel {
  @Prop({
    type: Date,
    default: Date.now(),
  })
  createdAt: Date;

  @Prop({
    type: Date,
    default: Date.now(),
  })
  updatedAt: Date;
}
