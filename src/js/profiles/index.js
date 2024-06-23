import { BASE_URL, PROFILE_ENDPOINT } from "../baseapi.js";
import { logout, manageLoginButton } from "../auth/logout.js";
import { userProfileAvatar } from "../utils/displayProfileAvatar.js";
import { displayCredits } from "../utils/displayCredits.js";
import { displayUserInfo } from "./singleProfile.js";
import { updateAvatar } from "./updateProfile.js";
import { fetchUserProfile } from "./getProfile.js";

fetchUserProfile();
updateAvatar();
displayUserInfo();
displayCredits();
userProfileAvatar();
logout();
document.addEventListener("DOMContentLoaded", function () {
  manageLoginButton();
});
