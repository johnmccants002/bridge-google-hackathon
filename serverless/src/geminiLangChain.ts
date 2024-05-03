/** Lambda Function
 * 
 * Get request for Gemini API
 * @param event {object} - Request object
 */

import { z } from "zod";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { APIGatewayProxyHandler } from 'aws-lambda';
import { StructuredOutputParser } from "langchain/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";

const organizationSchema = z.array(z.object({
  title: z.string(),
  description: z.string(),
  tags: z.enum(["legal aid", "education", "visa help", "employment", "housing", "support", "advocacy", "citizenship", "workshops", "family", "reunification", "scholarships", "rights", "cultural", "integration"])
}));

const key = process.env.GOOGLE_API_KEY;

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  if (!key) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Google API Key not set',
      }),
    };
  }

  const parser = StructuredOutputParser.fromZodSchema(
    organizationSchema
  );

  const data = JSON.parse(event.body || '{}');

  const { location, status, situation, age } = data;

  try {
    const chain = RunnableSequence.from([
      PromptTemplate.fromTemplate(
        "Answer the users question as best as possible.\n{format_instructions}\n{question}"
      ),
      new ChatGoogleGenerativeAI({ temperature: 0 }),
      parser,
    ]);
    
    
    const res = await chain.invoke({
        question: `List resources for a person looking for an American visa. Use this person information: Location: ${location}, status: ${status}, situation: ${situation}, age: ${age}`,
        format_instructions: parser.getFormatInstructions(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: error,
      }),
    };
  }

}