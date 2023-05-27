import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { Department, DepartmentDocument } from './model/department.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Injectable()
export class DepartmentService extends BaseService<Department> {
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<DepartmentDocument>
  ) {
    super(departmentModel);
  }

  async create(createDepartment: CreateDepartmentDto) {
    const newDepartment = new this.departmentModel(createDepartment);
    return newDepartment.save();
  }
}
