import { Injectable } from '@nestjs/common';

type Customer = {
  id: number;
  name: string;
  email: string;
};

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'arif@mail.com',
      name: 'arif'
    },
    {
      id: 2,
      email: 'furkan@mail.com',
      name: 'furkan'
    },
    {
      id: 3,
      email: 'birkisi@mail.com',
      name: 'judy hopps'
    }
  ];

  getCustomers() {
    return this.customers;
  }

  findCustomer(id: number) {
    return this.customers.find((value) => value.id == id);
  }

  addCustomer(data: Customer) {
    this.customers.push(data);
  }
}
