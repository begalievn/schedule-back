import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from './model/teacher.model';
import { Model } from 'mongoose';
import { BaseService } from '../../base/base.service';
import { SearchTeacherDto } from './dto/search-teacher.dto';
import { SearchTeacherV2Dto } from './dto/search-teacher-v2.dto';

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

  async searchTeacher(
    searchTeacherDto: SearchTeacherV2Dto,
  ): Promise<Teacher[]> {
    const { search = '' } = searchTeacherDto;
    const result = await this.teacherModel.aggregate([
      {
        $match: {
          $or: [
            { firstName: { $regex: new RegExp(`^${search}`, 'i') } },
            { lastName: { $regex: new RegExp(`^${search}`, 'i') } },
            { email: { $regex: new RegExp(`^${search}`, 'i') } },
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
