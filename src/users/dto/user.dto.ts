import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { IUser } from '../types/User';

export class CreateUserDto implements IUser {
  @IsEmail()
  email: string;
  @IsString()
  username: string;
  @IsStrongPassword({ minLength: 8, minUppercase: 1, minSymbols: 0 })
  password: string;
}
