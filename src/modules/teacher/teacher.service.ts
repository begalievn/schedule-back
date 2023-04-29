import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from './model/teacher.model';
import { Model } from 'mongoose';
import { BaseService } from '../../base/base.service';
import { SearchTeacherDto } from './dto/search-teacher.dto';

@Injectable()
export class TeacherService extends BaseService<Teacher> {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<TeacherDocument>,
  ) {
    super(teacherModel);
  }

  async create(createTeacherDto: CreateTeacherDto) {
    console.log(createTeacherDto);
    const newTeacher = new this.teacherModel(createTeacherDto);
    console.log(newTeacher);
    return await this.teacherModel.insertMany([newTeacher]);
  }

  async searchTeacher(searchTeacherDto: SearchTeacherDto): Promise<Teacher[]> {
    const { firstName, lastName, email } = searchTeacherDto;
    const result = await this.teacherModel.aggregate([
      {
        $match: {
          $or: [
            { firstName: { $regex: new RegExp(`^${firstName}`, 'i') } },
            { lastName: { $regex: new RegExp(`^${lastName}`, 'i') } },
            { email: { $regex: new RegExp(`^${email}`, 'i') } },
          ],
        },
      },
    ]);

    return result;
  }

  async findByProperty(searchTeacherDto: SearchTeacherDto) {
    return this.teacherModel.findOne(searchTeacherDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
