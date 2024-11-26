// dto/create-payment.dto.ts
import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  bookingId: string;

  @IsString()
  userId: string;

  @IsNumber()
  amount: number;

  @IsString()
  method: string; // e.g., 'Credit Card'

  @IsEnum(['paid', 'pending', 'failed'])
  status: string;

  @IsOptional()
  @IsString()
  transactionId?: string;
}
