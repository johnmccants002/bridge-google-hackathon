import { APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "./post"; // Replace with the path to your Lambda handler file

// Create a sample API Gateway proxy event
const event: APIGatewayProxyEvent = {
  body: JSON.stringify({
    id: "exampleId123",
    demographics: {
      age: 30,
      income: 50000,
      ethnicity: "Caucasian",
      veteran: false,
      disability: true,
      gender: "Male",
    },
  }),
  headers: {}, // You can add headers here if needed
  httpMethod: "POST", // Specify the HTTP method used in the request
  isBase64Encoded: false, // Set to true if the body is base64-encoded
  multiValueHeaders: {}, // Optional, used for multi-value headers
  multiValueQueryStringParameters: {}, // Optional, used for multi-value query string parameters
  path: "/example", // The resource path
  pathParameters: {}, // Optional, used for path parameters
  queryStringParameters: {}, // Optional, used for query string parameters
  resource: "", // The resource being accessed
  requestContext: {
    accountId: "your-account-id",
    apiId: "your-api-id",
    authorizer: {}, // You can add details about the authorizer if needed
    protocol: "HTTP/1.1",
    httpMethod: "GET",
    identity: {},
    path: "/example", // The resource path
    stage: "dev", // Specify the stage (e.g., 'dev', 'prod')
    // Add other required properties here
  },
  stageVariables: {}, // Optional, used for stage variables
};

const context = {}; // Create an empty context object

debugger;
// Call your Lambda handler function with the event and context objects
handler(event, context)
  .then((response) => {
    console.log("Lambda handler response:", response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
