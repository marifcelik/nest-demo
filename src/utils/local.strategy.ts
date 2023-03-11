import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportSerializer, PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    console.log('username', username);
    console.log('pass', password);
    const user = await this.authService.validateUser(username, password);
    console.log('inside local strategy after validate user');
    console.log(user);
    if (!user) throw new UnauthorizedException(undefined, 'giriş başarısız');

    return user;
  }
}

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log('serialize user');
    done(null, user.id);
  }

  deserializeUser(payload: any, done: Function) {
    console.log('deserialize user');
    const user = this.userService.getUserById(payload.id);
    return done(null, user);
  }
}
