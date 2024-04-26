import axios from "axios";

export async function login(email: string, password: string) {
  const data = {
    email,
    password,
  };
  console.log(data);
  try {
    const response = await axios.post("https://api.example.com/login", data);
    return response;
  } catch (error) {
    console.log("Error logging in:", error);
    throw error;
  }
}

export async function signup(email: string, password: string) {
  const url =
    "https://dpnk8ddrr0.execute-api.us-west-1.amazonaws.com/dev/signup";

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods":
      "HEAD, DELETE, POST, GET, OPTIONS, PUT, PATCH",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type,Authorization, Accept",
  };

  let payload = {
    email: email,
    password: password,
    demographics: {
      household: 1,
    },
  };
  console.log(payload);

  try {
    const response = await axios.post(url, payload, { headers: headers });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function gemeniGetResources(demographics: any) {
  const data = demographics;
  try {
    const result = await axios.post(
      "https://api.example.com/getResources",
      data
    );
    return result;
  } catch (error) {
    console.log("Error fetching resources:", error);
    throw error;
  }
}

export async function gemeniGetDemographics(text: string) {
  const data = {
    text,
  };
  try {
    const result = await axios.post(
      "https://api.example.com/getDemographics",
      data
    );
    return result;
  } catch (error) {
    console.log("Error fetching demographics", error);
    throw error;
  }
}
