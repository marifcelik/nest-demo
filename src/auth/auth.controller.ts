import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from './auth.guard';

@Controller('/auth')
export class AuthController {
  @Get('')
  authSession(@Session() session: Record<string, any>) {
    console.log(session);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login() {
    console.log('giriş yapıldı');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  getStatus(@Req() req: Request) {
    return req.user;
  }
}
