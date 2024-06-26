import { logout, manageLoginButton } from "../auth/logout.js";
import { API_KEY } from "../auth/apikey.js";
import { fetchListings } from "./listings.js";
import { createListing } from "./createListing.js";
import { userProfileAvatar } from "../utils/displayProfileAvatar.js";
import { searchForListing } from "./search.js";

searchForListing();

fetchListings();
userProfileAvatar();
logout();

document.addEventListener("DOMContentLoaded", function () {
  manageLoginButton();
});

document
  .getElementById("createListingBtn")
  .addEventListener("click", function () {
    createListing();
  });
