import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.getUserByUsername(username);
    console.log('inside validate user');
    console.log('username', username);
    console.log('pass', password);
    console.log(user);
    if (user && comparePasswords(password, user.password)) return user;

    return null;
  }
}
