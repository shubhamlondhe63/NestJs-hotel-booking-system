import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('UserMaster') // Groups all endpoints under "users"
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' }) // Operation summary
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'John Doe' },
        email: { type: 'string', example: 'john.doe@example.com' },
        password: { type: 'string', example: 'securePassword123' },
        role: { type: 'string', example: 'customer' },
      },
    },
  }) // Define the body schema
  async createUser(@Body() createUserDto: any) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'User ID',
    example: '63f24b2c8b12345abc678901',
  })
  async findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'User ID',
    example: '63f24b2c8b12345abc678901',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'Updated Name' },
        email: { type: 'string', example: 'updated.email@example.com' },
        password: { type: 'string', example: 'newPassword123' },
        role: { type: 'string', example: 'admin' },
      },
    },
  })
  async updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'User ID',
    example: '63f24b2c8b12345abc678901',
  })
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
