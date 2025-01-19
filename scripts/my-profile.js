import { myProfile } from "../data/myProfileData.js";

const requiredProfile = myProfile;

let name = requiredProfile.name;
let course = requiredProfile.course;
let occupation = requiredProfile.occupation;
let followers = requiredProfile.followers;
let xpPoints = requiredProfile.xpPoints;
let isFollowing = requiredProfile.isFollowing;

let notesLectureNames = Object.keys(requiredProfile.notes);
let flashcardLectureNames = Object.keys(requiredProfile.flashcards);

function generateProfileContent(lectureNames, typeOfContent) {
  let profileContentHtmlText = ``;

  lectureNames.forEach((lectureName) => {
    profileContentHtmlText += `
      <a href="lecture-${typeOfContent}.html?lectureName=${lectureName}" class="lecture-button lecture-name-link">
        <img src="images/profile-images/lecture-icon.png" alt="">
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
    <div class="heading">My Profile</div>
    <div class="profile-container">
      <div class="profile-stats-container">
        <img src="images/profile-images/professor-profile.png" alt="" class="profile-img">
        <div class="profile-stats">
          <div class="profile-name">${name}</div>
          <div class="occupation">${occupation} . ${course}</div>
          <div class="mini-stats">
            <div class="followers">${followers} Followers</div>
            <div class="xpPoints">XP ${xpPoints}</div>
          </div>
        </div>
      </div>
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

  const notesButton = document.querySelector(".notes-button");
  const flashcardsButton = document.querySelector(".flashcards-button");
  const profilePageContent = document.querySelector(".heading-content-container");

  notesButton.addEventListener("click", () => {
    profilePageContent.innerHTML = generateProfileContent(notesLectureNames, 'notes');
    notesButton.classList.add("selected");
    flashcardsButton.classList.remove("selected");
    updateButtonImages('notes');
  });

  flashcardsButton.addEventListener("click", () => {
    profilePageContent.innerHTML = generateProfileContent(flashcardLectureNames, 'flashcards');
    flashcardsButton.classList.add("selected");
    notesButton.classList.remove("selected");
    updateButtonImages('flashcards');
  });

  // Function to update images in the buttons based on selected content
  function updateButtonImages(selectedContent) {
    const lectureButtons = document.querySelectorAll(".lecture-button img");
    
    lectureButtons.forEach((buttonImage) => {
      if (selectedContent === 'notes') {
        buttonImage.src = "images/profile-images/lecture-icon.png";
      } else if (selectedContent === 'flashcards') {
        buttonImage.src = "images/profile-images/flashcard-icon.png";
      }
    });
  }
}

updatePage();
