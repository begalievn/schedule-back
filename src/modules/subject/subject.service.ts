import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Subject, SubjectDocument } from './model/subject.model';
import { Model } from 'mongoose';
import { BaseService } from '../../base/base.service';

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

  async create(createSubjectDto: CreateSubjectDto) {
    console.log(createSubjectDto, '--->');
    const newSubject = new this.subjectModel(createSubjectDto);
    console.log(newSubject);
    return newSubject.save();
  }
}
