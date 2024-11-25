import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './schemas/booking.schema';
import { CreateBookingDto, UpdateBookingDto } from './dto/booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = new this.bookingModel(createBookingDto);
    return booking.save();
  }

  async getAllBookings(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }

  async getBookingById(id: string): Promise<Booking> {
    const booking = await this.bookingModel.findById(id).exec();
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  async updateBooking(
    id: string,
    updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    const updatedBooking = await this.bookingModel
      .findByIdAndUpdate(id, updateBookingDto, { new: true })
      .exec();
    if (!updatedBooking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return updatedBooking;
  }

  async deleteBooking(id: string): Promise<Booking> {
    const deletedBooking = await this.bookingModel.findByIdAndDelete(id).exec();
    if (!deletedBooking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return deletedBooking;
  }
}
