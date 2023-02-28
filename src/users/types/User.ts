import { Exclude } from 'class-transformer';

export interface IUser {
  email: string
  username: string;
  password: string;
}

export class SerializedUser implements IUser {
  email: string
  username: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
