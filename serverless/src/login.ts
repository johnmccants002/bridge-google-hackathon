/** Lambda Function
 * 
 * Post login and fetch data from DynamoDB on success
 * @param event {object} - Request object
 */

import { APIGatewayProxyHandler } from 'aws-lambda';
import { CognitoIdentityProviderClient, InitiateAuthCommand, InitiateAuthCommandInput   } from '@aws-sdk/client-cognito-identity-provider';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { generateSecretHash } from './helpers';

const ddbClient = new DynamoDBClient();
const dynamoDB = DynamoDBDocumentClient.from(ddbClient);
const cognitoClient = new CognitoIdentityProviderClient({ region: process.env.AWS_REGION });

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { email, password } = JSON.parse(event.body || '{}');

  if (!email || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email and password are required' }),
    };
  }

  // Authenticate with AWS Cognito using Client Secret
  try {
    const authParams: InitiateAuthCommandInput  = {
      AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.COGNITO_CLIENT_ID,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
          SECRET_HASH: generateSecretHash(email)
        },
    };
    await cognitoClient.send(new InitiateAuthCommand(authParams));
  } catch (error) {
    console.error('Cognito Auth Error:', error);
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Authentication failed' }),
    };
  }

  // Fetch user data from DynamoDB
  const TableName = process.env.USER_SCHEMA;
  if (!TableName) {
    console.error('Table name not set');
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Table name not set',
      }),
    };
  }

  const params = {
    TableName,
    Key: {
      id: email,
    },
  };

  try {
    const result = await dynamoDB.send(new GetCommand(params));
    if (result.Item) {
      return {
        statusCode: 200,
        body: JSON.stringify(result.Item),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: 'User not found',
        }),
      };
    }
  } catch (error) {
    console.error('DynamoDB Fetch Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Couldn\'t fetch the user.',
      }),
    };
  }
};
