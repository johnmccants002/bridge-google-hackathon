/** Lambda Function
 *
 * Post user data to DynamoDB
 * @param event {object} - Request object
 */
import { Handler } from "aws-lambda";
import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// Create a DynamoDB client
const ddbClient = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(ddbClient);

export const handler: Handler<any, any> = async (event, _context) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body || "{}");

  const TableName = process.env.USER_SCHEMA;

  if (!TableName) {
    console.error("Table name not set");
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Table name not set",
      }),
    };
  }

  type Demographics = {
    age: number;
    income: number;
    ethnicity: string;
    veteran: boolean;
    disability: boolean;
    gender: string;
  };

  const demographics: Demographics = data.demographics;

  const params = {
    TableName,
    Item: {
      id: data.id,
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
