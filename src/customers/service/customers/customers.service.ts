import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    getCustomers() {
        return {
            name: 'arif',
            surname: 'celik',
            date: new Date
        }
    }
}
