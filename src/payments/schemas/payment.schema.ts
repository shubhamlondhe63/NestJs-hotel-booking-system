// payment.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Payment extends Document {
  @Prop({ required: true })
  bookingId: string; // Reference to the booking

  @Prop({ required: true })
  userId: string; // Reference to the user

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  method: string; // e.g., 'Credit Card', 'PayPal', 'Cash'

  @Prop({ required: true, enum: ['paid', 'pending', 'failed'] })
  status: string; // Payment status

  @Prop({ default: '' })
  transactionId: string; // Transaction ID from payment gateway
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
