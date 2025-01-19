import { profiles } from "../data/profileData.js";

let name;
let course;
let occupation;
let followers;
let xpPoints;
let isFollowing;

let notesLectureNames;
let flashcardLectureNames;

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let profID = getParameterByName("id");
for (var i = 0; i < profiles.length; i++) {
  if (profiles[i].id == profID) {
    let requiredProfile = profiles[i];

    name = requiredProfile.name;
    course = requiredProfile.course;
    occupation = requiredProfile.occupation;
    followers = requiredProfile.followers;
    xpPoints = requiredProfile.xpPoints;
    isFollowing = requiredProfile.isFollowing;

    notesLectureNames = Object.keys(requiredProfile.notes);
    flashcardLectureNames = Object.keys(requiredProfile.flashcards)
    break;
  }
}

function generateProfileContent(lectureNames, typeOfContent) {
  let profileContentHtmlText = ``;

  lectureNames.forEach((lectureName) => {
    const iconType =
      typeOfContent === "flashcards"
        ? "flashcard-icon.png"
        : "lecture-icon.png"; 

    profileContentHtmlText += `
      <a href="lecture-${typeOfContent}.html?lectureName=${lectureName}" class="lecture-button lecture-name-link">
        <img src="images/profile-images/${iconType}" alt="">
        <div class="lecture-name">${lectureName}</div>
      </a>
    `;
  });

  return profileContentHtmlText;
}


function updatePage() {
  let followButtonText;

  if (isFollowing) {
    followButtonText = "Following";
  } else {
    followButtonText = "Follow";
  }

  const htmlText = `
    <div class="heading">Profile</div>
    <div class="profile-container">
      <div class="profile-stats-container">
        <img src="images/profile-images/professor-profile.png" alt="" class="profile-img">
        <div class="profile-stats">
          <div class="profile-name">${name}</div>
          <div class="course-name">${occupation} . ${course}</div>
          <div class="mini-stats">
            <div class="followers">${followers} Followers</div>
            <div class="xpPoints">XP ${xpPoints}</div>
          </div>
        </div>
      </div>
      <button class="follow-button ${isFollowing ? 'following' : ''}">${followButtonText}</button>
    </div>
    <div class="profile-content-container">
      <div class="heading-container">
        <button class="notes-button selected">Notes</button>
        <button class="flashcards-button">Flashcards</button>
      </div>
      <div class="heading-content-container">
        ${generateProfileContent(notesLectureNames, 'notes')}
      </div>
    </div>
  `;

  const overallContainer = document.querySelector(".overall-container");
  overallContainer.innerHTML = htmlText;

  const followButton = document.querySelector(".follow-button");
  followButton.addEventListener("click", () => {
    isFollowing = !isFollowing;
    updatePage(); 
  });

  const notesButton = document.querySelector(".notes-button");
  const flashcardsButton = document.querySelector(".flashcards-button");
  const profilePageContent = document.querySelector(".heading-content-container");

  function selectButton(button) {
    document.querySelectorAll(".heading-container button").forEach((btn) => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");
  }

  notesButton.addEventListener("click", () => {
    selectButton(notesButton);
    profilePageContent.innerHTML = generateProfileContent(notesLectureNames, 'notes');
  });

  flashcardsButton.addEventListener("click", () => {
    selectButton(flashcardsButton);
    profilePageContent.innerHTML = generateProfileContent(flashcardLectureNames, 'flashcards');
  });
}


updatePage();
