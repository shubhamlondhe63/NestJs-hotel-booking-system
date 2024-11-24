import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty({ description: 'Room number', example: '101' })
  roomNumber: string;

  @ApiProperty({ description: 'Type of room', example: 'Deluxe' })
  type: string;

  @ApiProperty({ description: 'Maximum occupancy of the room', example: 2 })
  capacity: number;

  @ApiProperty({ description: 'Price per night for the room', example: 150 })
  price: number;

  @ApiProperty({
    description: 'List of amenities provided',
    example: ['WiFi', 'TV', 'Air Conditioning'],
  })
  amenities: string[];

  @ApiProperty({
    description: 'Availability status of the room',
    example: true,
  })
  available?: boolean;
}

export class UpdateRoomDto {
  @ApiProperty({ description: 'Room number', example: '101', required: false })
  roomNumber?: string;

  @ApiProperty({
    description: 'Type of room',
    example: 'Deluxe',
    required: false,
  })
  type?: string;

  @ApiProperty({
    description: 'Maximum occupancy of the room',
    example: 2,
    required: false,
  })
  capacity?: number;

  @ApiProperty({
    description: 'Price per night for the room',
    example: 150,
    required: false,
  })
  price?: number;

  @ApiProperty({
    description: 'List of amenities provided',
    example: ['WiFi', 'TV', 'Air Conditioning'],
    required: false,
  })
  amenities?: string[];

  @ApiProperty({
    description: 'Availability status of the room',
    example: true,
    required: false,
  })
  available?: boolean;
}
