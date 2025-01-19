import { profiles } from "../data/profileData.js";

function updateExplorePage() {
  let explorePageHtml = ``;

  profiles.forEach((profile) => {
    // Determine the profile picture based on the occupation
    const profileImage = profile.occupation.toLowerCase() === "student"
      ? "images/profile-images/student-profile.png"
      : "images/profile-images/professor-profile.png";

    explorePageHtml += `
      <a href="profile.html?id=${profile.id}" class="profile-container">
        <img src="${profileImage}" alt="">
        <div class="profile-stats">
          <div class="profile-name">${profile.name} . ${profile.occupation}</div>
          <div class="course">${profile.course}</div>
        </div>
      </a>
    `;
  });

  const listOfProfiles = document.querySelector(".list-of-profiles");
  listOfProfiles.innerHTML = explorePageHtml;
}

updateExplorePage();
