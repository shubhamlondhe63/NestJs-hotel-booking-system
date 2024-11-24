import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: any): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(userId: string): Promise<User> {
    return this.userModel.findById(userId).exec();
  }

  async updateUser(userId: string, updateUserDto: any): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(userId, updateUserDto, {
        new: true,
      })
      .exec();
  }

  async deleteUser(userId: string): Promise<User> {
    return this.userModel.findByIdAndDelete(userId).exec();
  }
}
