import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true, // Adds createdAt and updatedAt automatically
})
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'customer' }) // Roles: admin, customer
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
