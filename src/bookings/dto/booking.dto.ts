import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({
    description: 'ID of the user making the booking',
    example: '64f3e8e0b2318b10f2345678',
  })
  userId: string;

  @ApiProperty({
    description: 'IDs of the rooms to be booked',
    example: ['64f3e8e0b2318b10f2341234', '64f3e8e0b2318b10f2345678'],
  })
  roomIds: string[];

  @ApiProperty({
    description: 'Check-in date',
    example: '2024-12-01T14:00:00.000Z',
  })
  checkInDate: Date;

  @ApiProperty({
    description: 'Check-out date',
    example: '2024-12-05T11:00:00.000Z',
  })
  checkOutDate: Date;
}

export class UpdateBookingDto {
  @ApiProperty({
    description: 'Status of the booking',
    example: 'confirmed',
    required: false,
  })
  status?: string;

  @ApiProperty({
    description: 'Updated check-in date',
    example: '2024-12-02T14:00:00.000Z',
    required: false,
  })
  checkInDate?: Date;

  @ApiProperty({
    description: 'Updated check-out date',
    example: '2024-12-06T11:00:00.000Z',
    required: false,
  })
  checkOutDate?: Date;
}
