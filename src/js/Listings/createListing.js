import { API_KEY } from "../auth/apikey.js";
import { BASE_URL, LISTINGS_ENDPOINT } from "../baseapi.js";

export async function createListing() {
    const titleInput = document.getElementById("listingTitle");
    const descriptionInput = document.getElementById("listingDescription");
    const mediaUrl1Input = document.getElementById("mediaUrl1");
    const mediaUrl2Input = document.getElementById("mediaUrl2");
    const mediaUrl3Input = document.getElementById("mediaUrl3");
    const endsAtInput = document.getElementById("listingEndsAt");

    const title = titleInput.Value.trim();
    const description = descriptionInput.Value.trim();
    const mediaUrls = [
        mediaUrl1Input.Value.trim(),
        mediaUrl2Input.Value.trim(),
        mediaUrl3Input.Value.trim(),
    ].filter(url => url).map(url => ({ url, alt: "Auction item image"}));
    const endsAt = endsAtInput.Value.trim();

    if (!title || !endsAt) {
        displayError('Please fill out all required fields.');
        return;
    }

    const listingData = {
        title,
        description,
        tags: [], 
        media: mediaUrls,
        endsAt: new Date(endsAt).toISOString(),
    };
    console.log('Listing Data:', listingData);

    const accessToken = localStorage.getItem("accessToken");
    if(!accessToken) {
        displayError('You must be logged in to create a listing.');
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}${LISTINGS_ENDPOINT}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Noroff-API-Key": API_KEY,
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(listingData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to create listing. Status: ${response.status}, Message: ${errorData.message}`);
        }

        const data = await response.json();
        console.log("Listing created successfully:", data);
        clearForm();
        location.reload();

    } catch (error) {
        displayError(error.message);
        console.error("Error creating listing:", error);
    }
}

function displayError(message) {
    const errorDiv = document.getElementById('createListingErrors');
    errorDiv.textContent = message;
}

function clearForm() {
    document.getElementById("createListingForm").reset();
}