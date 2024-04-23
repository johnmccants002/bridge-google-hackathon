/** Lambda Function
 * 
 * Post user data to DynamoDB
 * @param event {object} - Request object
 */

import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { hashPassword } from './helpers';

// Create a DynamoDB client
const ddbClient = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(ddbClient);

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body || '{}');

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

  type Demographics = {
    age: number;
    income: number,
    ethnicity: string,
    veteran: boolean,
    disability: boolean,
    gender: string
  }

  const demographics: Demographics = data.demographics;
  
  const { id, password } = data;

  if (!id || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'ID and password are required' }),
    };
  }

  const hashedPassword = await hashPassword(password);
  
  const params = {
    TableName,
    Item: {
      id: data.id,
      password: hashedPassword,
      demographics,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  try {
    await docClient.send(new PutCommand(params));
    return {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Couldn't post the data item.",
      }),
    };
  }
};
