const { GoogleGenerativeAI } = require("@google/generative-ai");
import { ResourcesResponse } from "@/screens/results/resources-response";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAsr_AjndnXFAFv9Hivy325-mUUEHWRuP4");

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

export function buildPrompt(inputs: UserInputs): string {
  const fullPrompt: string =
    'List resources for a person looking for an american visa. \
    Use the person information and format provided.\n\
    Person information:\n\
    location: '+ inputs.location + ', status: ' + inputs.status + ', situation: ' + inputs.situation + ', age: ' + inputs.age
    + promptFormat
    console.log(fullPrompt)
  return fullPrompt
}

export async function runPrompt(prompt: string): Promise<ResourcesResponse> {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log(text);
    
    let parsedData;
    try {
      parsedData = JSON.parse(text);
    } catch {
      console.log("ERROR TRYING TO PARSE DATA");
    }

    if (!parsedData) {
      parsedData = parseJSONFromString(text);
    }

    console.log(parsedData);

  return parsedData as ResourcesResponse
}

function parseJSONFromString(stringWithJSON: string) {
  // Find the start and end positions of the JSON string
  const startIndex = stringWithJSON.indexOf("```json") + 7; // length of '```json'
  const endIndex = stringWithJSON.lastIndexOf("```");

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    throw new Error("Invalid JSON string format");
  }

  // Extract the JSON string
  const jsonString = stringWithJSON.substring(startIndex, endIndex);

  // Parse the JSON string
  return JSON.parse(jsonString);
}

const promptFormat = '\n\nRespond using this data structure as an example:\n\
  { \
    "data": [ \
    { \
      "type": "Federal", \
      "benefits": [ \
        { \
          "name": "Supplemental Security Income (SSI)", \
          "description": "Provides monthly payments to low-income adults aged 65 and older, blind, or disabled.", \
          "tags": ["Financial Assistance"], \
          "link": "https://www.ssa.gov/ssi/", \
        }, \
        { \
          "name": "Supplemental Nutrition Assistance Program (SNAP)", \
          "description": "Provides monthly benefits to purchase groceries for low-income individuals and families.", \
            "tags": ["Food and Nutrition"], \
            "link": "https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program", \
        }, \
        { \
          "name": "Medicare Savings Programs", \
          "description": "Helps pay Medicare premiums and may also cover deductibles, copayments, and coinsurance for low-income Medicare beneficiaries.", \
          "tags": ["Healthcare", "Financial Assistance"], \
          "link": "https://www.medicare.gov/your-medicare-costs/get-help-paying-costs/medicare-savings-programs", \
        } \
      ] \
    }, \
    { \
      "type": "State", \
      "benefits": [ \
        { \
          "name": "State Property Tax Relief Programs", \
          "description": "Many states offer property tax relief programs for seniors, veterans, and low-income individuals. These programs may offer exemptions, credits, or deferrals on property taxes.", \
          "tags": ["Housing"], \
          "link": "Contact your state\'s Department of Revenue or Taxation for more information.", \
        } \
      ] \
    }, \
    { \
      "type": "Local", \
      "benefits": [ \
        { \
          "name": "Senior Centers", \
          "description": "Offer a variety of services and activities for older adults, such as meals, transportation, and social events.", \
          "tags": ["Social support", "Community Support"], \
          "link": "Search online for senior centers in your area.", \
        } \
      ] \
    } \
  ] \
}'