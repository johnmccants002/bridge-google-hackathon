export function generateSecretHash(username: string): string {
  const { createHmac } = require('crypto');
  return createHmac('SHA256', process.env.COGNITO_CLIENT_SECRET)
    .update(username + process.env.COGNITO_CLIENT_ID)
    .digest('base64');
}