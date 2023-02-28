import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class CustomerAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(403).json({ error: 'no auth token provided' });
    if (authorization == '123') req.headers['isValid'] = 'true';
    next();
  }
}
