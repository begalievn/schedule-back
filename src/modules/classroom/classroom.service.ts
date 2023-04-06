import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { BaseService } from '../../base/base.service';
import { Classroom, ClassroomDocument } from './model/classroom.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SearchClassroomDto } from './dto/search-classroom.dto';

@Injectable()
export class ClassroomService extends BaseService<Classroom> {
  constructor(
    @InjectModel(Classroom.name)
    private classroomModel: Model<ClassroomDocument>,
  ) {
    super(classroomModel);
  }

  async create(createClassroomDto: CreateClassroomDto) {
    const isClassroomExists = await this.findByProperty({
      title: createClassroomDto.title,
    });
    if (isClassroomExists) {
      throw new BadRequestException(
        `Classroom ${createClassroomDto.title} already exists`,
      );
    }
    const newClassroom = new this.classroomModel(createClassroomDto);
    return newClassroom.save();
  }

  findByProperty(searchClassroom: SearchClassroomDto) {
    return this.classroomModel.findOne(searchClassroom);
  }

  findAll() {
    return `This action returns all classroom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classroom`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} classroom`;
  // }
}
