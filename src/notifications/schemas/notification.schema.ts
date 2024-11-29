import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Notification extends Document {
  @Prop({ require: true })
  message: string;

  @Prop({ require: true })
  type: string;

  @Prop({ require: true })
  userId: string;

  @Prop({ require: true })
  isRead: boolean;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
