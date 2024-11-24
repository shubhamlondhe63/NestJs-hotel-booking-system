import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schemas/room.schema';
import { CreateRoomDto, UpdateRoomDto } from './dto/room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<Room>,
  ) {}

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    const newRoom = new this.roomModel(createRoomDto);
    return await newRoom.save();
  }

  async getAllRooms(): Promise<Room[]> {
    return await this.roomModel.find().exec();
  }

  async getRoomById(id: string): Promise<Room> {
    return await this.roomModel.findById(id).exec();
  }

  async updateRoom(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    return await this.roomModel
      .findByIdAndUpdate(id, updateRoomDto, { new: true })
      .exec();
  }

  async deleteRoom(id: string): Promise<Room> {
    return await this.roomModel.findByIdAndDelete(id).exec();
  }
}
