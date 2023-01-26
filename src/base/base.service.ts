import { Model, HydratedDocument } from 'mongoose';

export abstract class BaseService<T> {
  model: Model<HydratedDocument<T>>;

  protected constructor(model: Model<HydratedDocument<T>>) {
    this.model = model;
  }

  async list() {
    return this.model.find().exec();
  }

  async get(id: string) {
    return this.model.findById(id);
  }

  async update(id: string, updateDto: any) {
    return this.model.findByIdAndUpdate(id, updateDto, { new: true });
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
