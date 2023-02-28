import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SerializedUser, IUser } from 'src/users/types/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRep: Repository<User>) { }

  private users: IUser[] = [
    {
      email: 'arif@mail.com',
      username: 'arif',
      password: '123'
    },
    {
      email: 'crazyboy@hotmail.com',
      username: 'crazyboy',
      password: '456'
    },
    {
      email: 'aarif@darkmail.com',
      username: 'aarif',
      password: 'hi'
    }
  ];

  async getUsers() {
    return await this.userRep.find()
  }

  async getUserByUsername(username: string) {
    return await this.userRep.findOneBy({ username })
  }

  async createUser(data: CreateUserDto) {
    const user = this.userRep.create(data);
    return await user.save();
  }
}
