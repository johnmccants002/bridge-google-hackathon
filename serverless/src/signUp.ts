/** Lambda Function
 * 
 * Post sign up to Cognito and user data to DynamoDB
 * @param event {object} - Request object
 */

import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { CognitoIdentityProviderClient, SignUpCommand, SignUpCommandInput  } from '@aws-sdk/client-cognito-identity-provider';
import { generateSecretHash } from './helpers';
import AWSXRay from 'aws-xray-sdk-core';

// Create a DynamoDB client
const xrayWrappedDynamoDBClient = AWSXRay.captureAWSv3Client(new DynamoDBClient());
const docClient = DynamoDBDocumentClient.from(xrayWrappedDynamoDBClient);
const xrayWrappedCognitoClient = AWSXRay.captureAWSv3Client(new CognitoIdentityProviderClient({ region: process.env.AWS_REGION }));

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { email, password, demographics } = JSON.parse(event.body || '{}');

  if (!email || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email and password are required' }),
    };
  }

  try {
    const signUpParams: SignUpCommandInput  = {
      ClientId: process.env.COGNITO_CLIENT_ID,
      Username: email,
      Password: password,
      SecretHash: generateSecretHash(email),
    };
    
    const response = await xrayWrappedCognitoClient.send(new SignUpCommand(signUpParams));

    console.log('Signup response:', response);

    if (!response.UserConfirmed) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'User not confirmed' }),
      };
    }
  } catch (error: any) {
    console.error('Signup error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Signup failed, please try again.',
        error: error.message,
      }),
    };
  }

  // If Cognito signup is successful, continue to store additional data in DynamoDB
  const TableName = process.env.USER_SCHEMA;
  if (!TableName) {
    console.error('Table name not set');
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Table name not set' }),
    };
  }

  // Store user data in DynamoDB;
  const timestamp = new Date().getTime();
  const params = {
    TableName,
    Item: {
      id: email, // Using email as the primary key
      demographics,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  try {
    await docClient.send(new PutCommand(params));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Signup successful' }),
    };
  } catch (error) {
    console.error('DynamoDB error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Couldn't post the data item." }),
    };
  }
};