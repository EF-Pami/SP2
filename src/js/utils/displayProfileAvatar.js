export function userProfileAvatar() {
    document.addEventListener("DOMContentLoaded", function () {
      const storedProfile = localStorage.getItem("profile");
      const profileData = storedProfile ? JSON.parse(storedProfile) : null;
      const accessToken = localStorage.getItem("accessToken");
      const profileImageElement = document.querySelector(".profile-image");
  
      if (profileImageElement) {
        if (accessToken && profileData) {
          profileImageElement.src = profileData.data.avatar.url;
          profileImageElement.alt = "profile picture";
        } else {
          const isIndexPage = window.location.href === "https://github.com/EF-Pami/SP2/index.html";
  
          const defaultProfilePath = isIndexPage
            ? "../assets/auction-default-profile.jpg"
            : "../assets/auction-default-profile.jpg";
  
          profileImageElement.src = defaultProfilePath;
          profileImageElement.alt = "User not logged in, default profile picture";
        }
      }
    });
  }
  
  export function userProfilePageAvatar() {
    document.addEventListener("DOMContentLoaded", function () {
      const storedProfile = localStorage.getItem("profile");
      const profileData = storedProfile ? JSON.parse(storedProfile) : null;
      const accessToken = localStorage.getItem("accessToken");
      const profileImageElement = document.querySelector(".profile-image");
  
      if (profileImageElement) {
        if (accessToken && profileData) {
          profileImageElement.src = profileData.data.avatar.url;
          profileImageElement.alt = "profile picture";
        } else {
          profileImageElement.src = "../assets/auction-default-profile.jpg";
          profileImageElement.alt = "User not logged in, default profile picture";
        }
      }
    });
  }
  