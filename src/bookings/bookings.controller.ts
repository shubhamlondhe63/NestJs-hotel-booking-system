import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookingService } from './bookings.service';
import { CreateBookingDto, UpdateBookingDto } from './dto/booking.dto';
import { Booking } from './schemas/booking.schema';

@ApiTags('Bookings')
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: 'Create a new booking' })
  @ApiResponse({
    status: 201,
    description: 'Booking created successfully.',
    type: Booking,
  })
  @Post()
  async createBooking(
    @Body() createBookingDto: CreateBookingDto,
  ): Promise<Booking> {
    return this.bookingService.createBooking(createBookingDto);
  }

  @ApiOperation({ summary: 'Get all bookings' })
  @ApiResponse({
    status: 200,
    description: 'List of all bookings.',
    type: [Booking],
  })
  @Get()
  async getAllBookings(): Promise<Booking[]> {
    return this.bookingService.getAllBookings();
  }

  @ApiOperation({ summary: 'Get a booking by ID' })
  @ApiResponse({
    status: 200,
    description: 'The booking details.',
    type: Booking,
  })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  @Get(':id')
  async getBookingById(@Param('id') id: string): Promise<Booking> {
    return this.bookingService.getBookingById(id);
  }

  @ApiOperation({ summary: 'Update a booking by ID' })
  @ApiResponse({
    status: 200,
    description: 'Booking updated successfully.',
    type: Booking,
  })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  @Put(':id')
  async updateBooking(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    return this.bookingService.updateBooking(id, updateBookingDto);
  }

  @ApiOperation({ summary: 'Delete a booking by ID' })
  @ApiResponse({
    status: 200,
    description: 'Booking deleted successfully.',
    type: Booking,
  })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  @Delete(':id')
  async deleteBooking(@Param('id') id: string): Promise<Booking> {
    return this.bookingService.deleteBooking(id);
  }
}
