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

  const requestBody = event.body;
  const { text } = JSON.parse(requestBody || '{}');
  const query = 'Extract a JSON object with the following properties: income: [value: <15000},value: 15000-30000},value: 30000-50000},value: >50000},],ethnicity: [value: hispanic_latino},value: caucasian},value: african_american},value: asian},value: native_american},value: pacific_islander},value: other},],veteran_status: [value: veteran},value: active_duty},value: reserve},value: non_veteran},],gender: [value: female},value: male},value: non_binary},value: prefer_not_to_say},value: other},]. Do not include ```json. Take the informaiton from the following text: ' + text
  
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