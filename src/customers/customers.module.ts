import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomerController } from './controllers/customers.controller';
import { CustomerAuthMiddleware, CustomerValidationMiddleware } from './middlewares';
import { CustomersService } from './services/customers.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomerAuthMiddleware, CustomerValidationMiddleware).forRoutes({
      path: 'customers/search/:id',
      method: RequestMethod.GET
    });
  }
}
