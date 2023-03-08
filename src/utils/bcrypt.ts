import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync(3);
  return bcrypt.hashSync(rawPassword, SALT);
}

export function comparePasswords(password: string, hash: string) {
  return bcrypt.compareSync(password, hash)
}
