import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomerDto } from 'src/customers/dto/customer.dto';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customerService.getCustomers();
  }

  @Get('/:id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const customer = this.customerService.findCustomer(id);
    if (customer) return res.send(customer);
    res.status(404).json({ msg: 'customer not found' });
  }

  // without req and res objects
  @Get('/search/:id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findCustomer(id);
    if (customer) return customer;
    throw new NotFoundException(null, 'user not found');
  }

  @Post('add')
  @UsePipes(ValidationPipe)
  addCustomer(@Body() customer: CustomerDto) {
    console.log(customer);
    this.customerService.addCustomer(customer);
    return { msg: 'created' };
  }
}
