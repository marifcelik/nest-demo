import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/service/customers/customers.service';

@Controller('customers')
export class CustomerController {
    constructor(private customerService: CustomersService) {}

    @Get()
    getCustomers(): Object   {
        return this.customerService.getCustomers()
    }
}
