import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Subject, SubjectDocument } from './model/subject.model';
import { Model } from 'mongoose';
import { BaseService } from '../../base/base.service';
import { ListSubjectParamsDto } from './dto/list-subject-params.dto';
import { ListScheduleParamsDto } from '../schedule/dto/list-schedule-params.dto';
import { Teacher } from '../teacher/model/teacher.model';

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

  async getFilteredSubjects(listSubjectParams: ListSubjectParamsDto) {
    const result = await this.subjectModel
      .find({
        semester: listSubjectParams.semester,
        courses: { $all: [listSubjectParams.course] },
      })
      .populate('teachers');

    return result;
  }

  async getExampleSubjectsForSchedule(listParams: ListScheduleParamsDto) {
    const result = await this.subjectModel.find({
      semester: listParams.semester,
    });

    return result;
  }

  async create(createSubjectDto: CreateSubjectDto) {
    console.log(createSubjectDto, '--->');
    const newSubject = new this.subjectModel(createSubjectDto);
    console.log(newSubject);
    return newSubject.save();
  }
}
