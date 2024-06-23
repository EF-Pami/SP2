import { BASE_URL, PROFILE_ENDPOINT } from "../baseapi.js";

export async function displayCredits() {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const apiKey = "b7156b33-16a5-4a94-a63d-b4b15d93b9cf";
    const userName = localStorage.getItem("userName");

    if (!userName) {   
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
      const profileData = data.data;

      if (profileData && profileData.credits !== undefined) {
        const creditsElement = document.querySelector("#creditsProfilePage");
        if (creditsElement) {
          creditsElement.innerHTML = `Available Credits: ${profileData.credits}$`;
        }
      }
    } else {
      alert(
        "Error fetching user profile:",
        response.status,
        response.statusText,
      );
    }
  } catch (error) {
    alert("Fetch error:", error.message);
  }
}
