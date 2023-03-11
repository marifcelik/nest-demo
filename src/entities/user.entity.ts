import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../users/types/User';

@Entity()
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
