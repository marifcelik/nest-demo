import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/services/users.service';
import { LocalStrategy, SessionSerializer } from 'src/utils/local.strategy';
import { AuthController } from './auth.controller';
import { AuthenticatedGuard, LocalAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    LocalStrategy,
    SessionSerializer,
    LocalAuthGuard,
    AuthenticatedGuard
  ]
})
export class AuthModule {}
