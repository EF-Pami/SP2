import { BASE_URL, PROFILE_ENDPOINT } from "../baseapi.js";
import { API_KEY } from "../auth/apikey.js";

export async function fetchUserProfile() {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const apiKey = API_KEY;
    const userName = localStorage.getItem("userName");

    if (!userName || !accessToken) {
      console.error("User name or access Token is missing.")     
      return;
    }

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(
      `${BASE_URL}${PROFILE_ENDPOINT}/${userName}`,
      options,
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Profile data fetched successfully:", data.data);
      return data.data;
    } else {
      console.error(
        `Error fetching user profile: ${response.status}${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
