import sendRequest from "./send-request";

const BASE_URL = "/api/users";

export async function signUp(userData) {
  // Fetch uses an options object as a second arg
  // to make requests other than GET, include data,
  // set headers.
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export async function login(credentials) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (res.ok) {
    return res.json();
  } else {
    const errorMsg = await res.text();
    throw new Error(errorMsg || "Invalid Login");
  }
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
