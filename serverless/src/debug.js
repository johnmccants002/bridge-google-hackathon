import { handler } from "./post"; // Replace with the path to your Lambda handler file

// Create a mock event object with a JSON body
const mockEvent = {
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
};

// Create an empty context object
const context = {};

// Call your Lambda handler function with the mock event and context
handler(mockEvent, context, (error, response) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Lambda handler response:", response);
  }
});
