import { CustomerAuthMiddleware } from './customer-auth.middleware';

describe('CustomerAuthMiddleware', () => {
  it('should be defined', () => {
    expect(new CustomerAuthMiddleware()).toBeDefined();
  });
});
