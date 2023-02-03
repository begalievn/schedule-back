import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupDocument } from './model/group.model';
import { Model } from 'mongoose';
import { BaseService } from '../../base/base.service';

@Injectable()
export class GroupService extends BaseService<Group>{
  constructor(
    @InjectModel(Group.name)
    private readonly groupModel: Model<GroupDocument>,
  ) {
    super(groupModel);
  }

  create(createGroupDto: CreateGroupDto) {
    const newGroup = new this.groupModel(createGroupDto);
    return newGroup.save();
  }
}
