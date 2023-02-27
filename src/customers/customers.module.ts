import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customers.controller';
import { CustomersService } from './service/customers/customers.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService]
})
export class CustomersModule {}
