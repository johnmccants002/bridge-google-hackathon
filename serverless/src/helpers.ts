import { pbkdf2Sync, randomBytes } from 'crypto';

export function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex');
  const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return Promise.resolve(`${salt}:${hash}`);
}

export function checkPassword(password: string, hash: string): Promise<boolean> {
  const [salt, key] = hash.split(':');
  const derivedKey = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return Promise.resolve(key === derivedKey);
}

export function generateSecretHash(username: string): string {
  const { createHmac } = require('crypto');
  return createHmac('SHA256', process.env.COGNITO_CLIENT_SECRET)
    .update(username + process.env.COGNITO_CLIENT_ID)
    .digest('base64');
}