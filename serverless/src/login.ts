/** Lambda Function
 * 
 * Get user data to DynamoDB
 * @param pathParameters.id {string} - ID of the user
 */

import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { checkPassword } from './helpers';

const ddbClient = new DynamoDBClient();
const dynamoDB = DynamoDBDocumentClient.from(ddbClient);

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const data = JSON.parse(event.body || '{}')

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

  const { id, password } = data;

  if (!id || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'ID and password are required' }),
    };
  }

  const params = {
    TableName,
    Key: {
      id
    },
  };

  try {
    const result = await dynamoDB.send(new GetCommand(params));

    if (result.Item) {
      const isValid = await checkPassword(password, result.Item.password);
      if (!isValid) {
        return {
          statusCode: 401,
          body: JSON.stringify({
            message: 'Invalid password',
          }),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(result.Item),
        };
      }
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: 'User not found',
        }),
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Couldn\'t fetch the user.',
      }),
    };
  }
};