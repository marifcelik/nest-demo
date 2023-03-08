import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { AuthService } from "src/auth/auth.service"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(username: string, password: string) {
    console.log('username', username)
    console.log('pass', password)
    const user = await this.authService.validateUser(username, password)
    console.log('inside local strategy after validate user');
    console.log(user);
    if (!user)
      throw new UnauthorizedException(undefined, 'giriş başarısız');

    return user
  }
}