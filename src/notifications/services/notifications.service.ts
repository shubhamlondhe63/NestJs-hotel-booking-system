import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from '../schemas/notification.schema';
import { CreateNotificationDto } from '../dtos/create-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<Notification>,
  ) {}

  async create(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const notification = new this.notificationModel(createNotificationDto);
    return notification.save();
  }

  async findAllForUser(userId: string): Promise<Notification[]> {
    return this.notificationModel
      .find({ userId })
      .sort({ createdAt: -1 })
      .exec();
  }

  async markAsRead(notificationId: string): Promise<Notification> {
    const notification = await this.notificationModel.findById(notificationId);
    if (!notification) throw new NotFoundException('Notification not found');
    notification.isRead = true;
    return notification.save();
  }

  async delete(notificationId: string): Promise<void> {
    const result =
      await this.notificationModel.findByIdAndDelete(notificationId);
    if (!result) throw new NotFoundException('Notification not found');
  }
}
