import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class CustomerValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { isValid } = req.headers;
    if (!isValid) return res.status(401).json({ error: 'account is invalid' });
    next();
  }
}
