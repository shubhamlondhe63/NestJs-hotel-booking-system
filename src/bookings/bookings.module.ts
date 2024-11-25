import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingController } from './bookings.controller';
import { BookingService } from './bookings.service';
import { Booking, BookingSchema } from './schemas/booking.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
