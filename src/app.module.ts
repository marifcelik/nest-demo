import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_CONN_STR,
      entities: ['**/entities/*.entity.{js, ts}'],
      synchronize: true
    }),
    PassportModule.register({ session: true })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
