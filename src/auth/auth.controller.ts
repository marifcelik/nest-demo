import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  login() {
    console.log('giriş yapıldı');
  }
}
