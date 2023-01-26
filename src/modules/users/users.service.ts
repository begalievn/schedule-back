import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './model/user.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto';
import { SearchUserDto } from './dto/search-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async findOne(searchUserDto: SearchUserDto) {
    const user = await this.userModel.findOne(searchUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
