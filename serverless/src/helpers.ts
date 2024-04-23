const bcrypt = require('bcrypt');

export function generateSecretHash(username: string): string {
  const { createHmac } = require('crypto');
  return createHmac('SHA256', process.env.COGNITO_CLIENT_SECRET)
    .update(username + process.env.COGNITO_CLIENT_ID)
    .digest('base64');
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Cost factor controls how much time is needed to calculate a single bcrypt hash.
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

export async function checkPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}