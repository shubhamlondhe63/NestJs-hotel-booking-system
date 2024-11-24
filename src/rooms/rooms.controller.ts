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
import { RoomService } from './rooms.service';
import { CreateRoomDto, UpdateRoomDto } from './dto/room.dto';
import { Room } from './schemas/room.schema';

@ApiTags('Rooms') // Groups all endpoints under the "Rooms" section
@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ApiOperation({ summary: 'Create a new room' })
  @ApiResponse({
    status: 201,
    description: 'The room has been created successfully.',
    type: Room,
  })
  @Post()
  async createRoom(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomService.createRoom(createRoomDto);
  }

  @ApiOperation({ summary: 'Get all rooms' })
  @ApiResponse({ status: 200, description: 'List of all rooms.', type: [Room] })
  @Get()
  async getAllRooms(): Promise<Room[]> {
    return this.roomService.getAllRooms();
  }

  @ApiOperation({ summary: 'Get a room by ID' })
  @ApiResponse({ status: 200, description: 'The room details.', type: Room })
  @ApiResponse({ status: 404, description: 'Room not found.' })
  @Get(':id')
  async getRoomById(@Param('id') id: string): Promise<Room> {
    return this.roomService.getRoomById(id);
  }

  @ApiOperation({ summary: 'Update a room by ID' })
  @ApiResponse({
    status: 200,
    description: 'The room has been updated successfully.',
    type: Room,
  })
  @ApiResponse({ status: 404, description: 'Room not found.' })
  @Put(':id')
  async updateRoom(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Promise<Room> {
    return this.roomService.updateRoom(id, updateRoomDto);
  }

  @ApiOperation({ summary: 'Delete a room by ID' })
  @ApiResponse({
    status: 200,
    description: 'The room has been deleted successfully.',
    type: Room,
  })
  @ApiResponse({ status: 404, description: 'Room not found.' })
  @Delete(':id')
  async deleteRoom(@Param('id') id: string): Promise<Room> {
    return this.roomService.deleteRoom(id);
  }
}
