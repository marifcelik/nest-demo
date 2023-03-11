import { NestFactory } from '@nestjs/core';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AppModule } from './app.module';
import { SessionEntity } from './entities/session.entity';
import { TypeormStore } from 'connect-typeorm';
import * as session from 'express-session';
import * as passport from 'passport';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'do not use like this',
      saveUninitialized: false,
      resave: false,
      cookie: { maxAge: 1000 * 10 },
      store: new TypeormStore().connect(app.get(getRepositoryToken(SessionEntity), { strict: false }))
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}

main();
