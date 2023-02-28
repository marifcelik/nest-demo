import { CustomerValidationMiddleware } from './customer-validation.middleware';

describe('CustomerValidationMiddleware', () => {
  it('should be defined', () => {
    expect(new CustomerValidationMiddleware()).toBeDefined();
  });
});
