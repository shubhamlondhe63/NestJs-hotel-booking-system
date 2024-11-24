import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Room extends Document {
  @ApiProperty({
    description: 'Unique identifier for the room',
    example: '64f3e8e0b2318b10f2345678',
  })
  _id: string;

  @ApiProperty({ description: 'Room number', example: '101' })
  @Prop({ required: true })
  roomNumber: string;

  @ApiProperty({ description: 'Type of room', example: 'Deluxe' })
  @Prop({ required: true })
  type: string;

  @ApiProperty({ description: 'Maximum occupancy of the room', example: 2 })
  @Prop({ required: true })
  capacity: number;

  @ApiProperty({ description: 'Price per night for the room', example: 150 })
  @Prop({ required: true })
  price: number;

  @ApiProperty({
    description: 'List of amenities provided',
    example: ['WiFi', 'TV', 'Air Conditioning'],
  })
  @Prop({ default: [] })
  amenities: string[];

  @ApiProperty({
    description: 'Availability status of the room',
    example: true,
  })
  @Prop({ default: true })
  available: boolean;

  @ApiProperty({
    description: 'Timestamp when the room was created',
    example: '2024-11-22T12:34:56.789Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Timestamp when the room was last updated',
    example: '2024-11-22T12:34:56.789Z',
  })
  updatedAt: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
