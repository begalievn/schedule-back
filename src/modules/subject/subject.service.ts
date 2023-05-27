import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Subject, SubjectDocument } from './model/subject.model';
import { Model } from 'mongoose';
import { BaseService } from '../../base/base.service';
import { ListSubjectParamsDto } from './dto/list-subject-params.dto';
import { ListScheduleParamsDto } from '../schedule/dto/list-schedule-params.dto';
import { Teacher } from '../teacher/model/teacher.model';
import { Department } from '../department/model/department.model';

@Injectable()
export class SubjectService extends BaseService<Subject> {
  constructor(
    @InjectModel(Subject.name)
    private readonly subjectModel: Model<SubjectDocument>,
  ) {
    super(subjectModel);
  }

  async getAll() {
    return this.subjectModel.find().populate('teachers').populate('groups');
  }

  async getById(id: string) {
    return this.subjectModel
      .findById(id)
      .populate('teachers')
      .populate('department');
  }

  async getFilteredSubjects(listSubjectParams: ListSubjectParamsDto) {
    const { department, semester, course } = listSubjectParams;

    let departmentFilter = {};
    if (department) {
      departmentFilter = { 'department.code': department };
    }

    const result = await this.subjectModel.aggregate([
      {
        $match: {
          semester,
          courses: { $all: [course] },
        },
      },
      {
        $lookup: {
          from: 'departments',
          localField: 'department',
          foreignField: '_id',
          as: 'department',
        },
      },
      // {
      //   $unwind: {
      //     path: '$department',
      //   },
      // },
      {
        $lookup: {
          from: 'teachers',
          localField: 'teachers',
          foreignField: '_id',
          as: 'teachers',
        },
      },
      {
        $match: departmentFilter,
      },
    ]);

    return result;
  }

  async getExampleSubjectsForSchedule(listParams: ListScheduleParamsDto) {
    const result = await this.subjectModel.find({
      semester: listParams.semester,
    });

    return result;
  }

  async create(createSubjectDto: CreateSubjectDto) {
    const newSubject = new this.subjectModel(createSubjectDto);
    return newSubject.save();
  }
}
