import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Payment extends Document {
  @Prop({ required: true })
  bookingId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ default: 'completed' }) // Status: pending, completed, failed
  status: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
