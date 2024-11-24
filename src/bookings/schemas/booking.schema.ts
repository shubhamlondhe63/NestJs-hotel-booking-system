import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Booking extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  roomId: string;

  @Prop({ required: true })
  checkIn: Date;

  @Prop({ required: true })
  checkOut: Date;

  @Prop({ default: 'pending' }) // Status: pending, confirmed, canceled
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
