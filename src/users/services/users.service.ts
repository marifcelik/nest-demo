import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRep: Repository<User>) {}

  async getUsers() {
    return await this.userRep.find();
  }

  getUserByUsername(username: string) {
    return this.userRep.findOneBy({ username });
  }

  async createUser(data: CreateUserDto) {
    const password = encodePassword(data.password);
    const user = this.userRep.create({ ...data, password });
    return user.save();
  }

  getUserById(id: number) {
    return this.userRep.findOneBy({ id });
  }
}
