import { ISession } from 'connect-typeorm/out';
import { Column, DeleteDateColumn, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sessions' })
export class SessionEntity implements ISession {
  @PrimaryColumn()
  id: string;

  @Column('text')
  json: string;

  @Index()
  @Column('bigint')
  expiredAt: number = Date.now();

  @DeleteDateColumn()
  destroyedAt?: Date | undefined;
}
