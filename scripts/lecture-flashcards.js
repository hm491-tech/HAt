import { flashcards } from "../data/flashcardsData.js";

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let lectureName = getParameterByName("lectureName");
let lectureData;
let questionNumber = 0;

for (const subject in flashcards) {
  if (flashcards[subject][lectureName]) {
    lectureData = flashcards[subject][lectureName];
    break;
  }
}

function updateFlashcardsPage() {
  const flashcardsPageHtml = `
    <div class="question">${lectureData[questionNumber].question}</div>
    <img src="${lectureData[questionNumber].imgSrc}" alt="">
    <div class="options-container">
      <button class="option">${lectureData[questionNumber].options.a}</button>
      <button class="option">${lectureData[questionNumber].options.b}</button>
      <button class="option">${lectureData[questionNumber].options.c}</button>
      <button class="option">${lectureData[questionNumber].options.d}</button>
    </div>
  `;

  const flashcardsContent = document.querySelector(".flashcards-content");
  flashcardsContent.innerHTML = flashcardsPageHtml;

  const optionsButtons = document.querySelectorAll(".options-container .option");
  optionsButtons.forEach((button) => {
    if (button.innerHTML == lectureData[questionNumber].answer) {
      button.classList.add("correctOption");
    }
    else {button.classList.add("incorrectOption");}
  });

  let correctOption = document.querySelector(".correctOption");
  let incorrectOptions = document.querySelectorAll(".incorrectOption");

  correctOption.addEventListener("click", () => {
    correctOption.style.backgroundColor = "green";
    lectureData[questionNumber].difficulty = 2;
  });

  incorrectOptions.forEach((incorrectOption) => {
    incorrectOption.addEventListener("click", () => {
      correctOption.style.backgroundColor = "green";
      incorrectOption.style.backgroundColor = "red";
      lectureData[questionNumber].difficulty = 1;
    })
  });
}

const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");

rightButton.addEventListener("click", () => {
  if (questionNumber < lectureData.length - 1) {
    questionNumber += 1;
    updateFlashcardsPage();
  }
});

leftButton.addEventListener("click", () => {
  if (questionNumber > 0) {
    questionNumber -= 1;
    updateFlashcardsPage();
  }
});

updateFlashcardsPage();

