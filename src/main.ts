import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeormStore } from 'connect-typeorm'
import * as session from 'express-session';
import * as passport from 'passport';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'do not use like this',
      saveUninitialized: false,
      resave: false,
      cookie: { maxAge: 1000 * 10 }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}

main();
