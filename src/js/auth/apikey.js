import { BASE_URL, API_KEY_ENDPOINT } from "../baseapi.js";

export const API_KEY = "b7156b33-16a5-4a94-a63d-b4b15d93b9cf"

export async function fetchApiKey() {
  try {
   
    const api_key = "api_key";
   

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };

    const response = await fetch(BASE_URL + API_KEY_ENDPOINT, options);

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(api_key, data.data.key);
    } else {
      alert("Error:", response.status, response.statusText);
    }
  } catch (error) {
    alert("Fetch error:", error.message);
  }
}
