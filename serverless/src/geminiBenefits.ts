/** Lambda Function
 * 
 * Get request for Gemini API
 * @param event {object} - Request object
 */

import { APIGatewayProxyHandler } from 'aws-lambda';

const key = process.env.GEMINI_KEY;
const baseUrl = process.env.GEMINI_URL;

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  if (!key || !baseUrl) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Gemini key or URL not set',
      }),
    };
  }

  const url = `${baseUrl}/v1beta/models/gemini-pro:generateContent?key=${key}`;

  const requestBody = event.body ? JSON.parse(event.body) : { age: 68, income: '<15000', ethnicity: 'Native American', veteran: 'veteran', gender: 'non_binary', disability: 'not disabled' };
  const { age, income, ethnicity, veteran, gender, disability } = requestBody;
  const query = 'Create a list of government benefit programs offered in the United States. Present the information in a JSON format, but do not include ```json ' + `like this: type Benefit = {name: string;description: string;c'Healthcare' | 'Housing' | 'Financial Assistance' | 'Food and Nutrition';link: string;};type BenefitCategory = {type: 'Federal' | 'State' | 'Local';benefits: Benefit[];};type BenefitsSchema = {data: BenefitCategory[];};. Focus on programs that assist a person in the following demographics (ignore programs that this person would not qualify for): ${age} years old, income ${income}, ${ethnicity}, ${veteran}, ${gender}, ${disability}`
  
  const requestToGeminiBody = {
    "contents": [{
      "parts": [{
        "text": query
      }]
    }]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestToGeminiBody),
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: cleanJsonString(data?.candidates[0]?.content?.parts[0]?.text || '{}'),
  }
}

function cleanJsonString(str: string) {
  let cleanedString = str.replace(/\\n/g, '');
  cleanedString = cleanedString.replace(/\\/g, '');
  return cleanedString;
}