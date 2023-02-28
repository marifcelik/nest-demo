import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../types/User";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  username: string
  @Column()
  email: string
  @Column()
  password: string
}
