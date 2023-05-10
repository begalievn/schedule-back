import { Model, HydratedDocument } from 'mongoose';
import { BaseModel } from './model/base.model';

export abstract class BaseService<T extends BaseModel> {
  model: Model<HydratedDocument<T>>;

  protected constructor(model: Model<HydratedDocument<T>>) {
    this.model = model;
  }

  async list() {
    return this.model.find().exec();
  }

  async listWithPopulate(populate: string) {
    return this.model.find().populate(populate);
  }

  async get(id: string) {
    return this.model.findById(id);
  }

  async update(id: string, updateDto: any) {
    return this.model.findByIdAndUpdate(
      id,
      { updatedAt: Date.now(), ...updateDto },
      { new: true },
    );
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
