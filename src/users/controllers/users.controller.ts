import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { SerializedUser } from 'src/users/types/User';
import { UsersService } from 'src/users/services/users.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    throw new NotFoundException(undefined, 'user not found')
  }

  @Post('add')
  @UsePipes(ValidationPipe)
  async createUser(@Body() data: CreateUserDto) {
    return await this.userService.createUser(data);
  }
}
