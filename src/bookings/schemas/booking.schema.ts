import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Booking extends Document {
  @ApiProperty({
    description: 'ID of the user who made the booking',
    example: '64f3e8e0b2318b10f2345678',
  })
  @Prop({ required: true })
  userId: string;

  @ApiProperty({
    description: 'IDs of the rooms booked',
    example: ['64f3e8e0b2318b10f2341234', '64f3e8e0b2318b10f2345678'],
  })
  @Prop({ required: true, type: [String] })
  roomIds: string[];

  @ApiProperty({
    description: 'Check-in date',
    example: '2024-12-01T14:00:00.000Z',
  })
  @Prop({ required: true })
  checkInDate: Date;

  @ApiProperty({
    description: 'Check-out date',
    example: '2024-12-05T11:00:00.000Z',
  })
  @Prop({ required: true })
  checkOutDate: Date;

  @ApiProperty({ description: 'Status of the booking', example: 'confirmed' })
  @Prop({ default: 'pending', enum: ['pending', 'confirmed', 'cancelled'] })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
