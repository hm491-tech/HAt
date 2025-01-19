import { flashcards } from "../data/flashcardsData.js";

let homePageFlashcards = [];

for (const subject in flashcards) {
  let lectureNames = flashcards[subject];
  for (const lectureName in lectureNames) {
    let lectureFlashcards = lectureNames[lectureName];
    lectureFlashcards.forEach((flashcard) => {
      homePageFlashcards.push(flashcard);
    })
  }
}

let questionNumber = 0;

function updateFlashcardsPage() {
  const flashcardsPageHtml = `
    <div class="question">${homePageFlashcards[questionNumber].question}</div>
    <img src="${homePageFlashcards[questionNumber].imgSrc}" alt="">
    <div class="options-container">
      <button class="option">${homePageFlashcards[questionNumber].options.a}</button>
      <button class="option">${homePageFlashcards[questionNumber].options.b}</button>
      <button class="option">${homePageFlashcards[questionNumber].options.c}</button>
      <button class="option">${homePageFlashcards[questionNumber].options.d}</button>
    </div>
  `;

  const flashcardsContent = document.querySelector(".flashcards-content");
  flashcardsContent.innerHTML = flashcardsPageHtml;

  const optionsButtons = document.querySelectorAll(".options-container .option");
  optionsButtons.forEach((button) => {
    if (button.innerHTML == homePageFlashcards[questionNumber].answer) {
      button.classList.add("correctOption");
    }
    else {button.classList.add("incorrectOption");}
  });

  let correctOption = document.querySelector(".correctOption");
  let incorrectOptions = document.querySelectorAll(".incorrectOption");

  correctOption.addEventListener("click", () => {
    correctOption.style.backgroundColor = "green";
    homePageFlashcards[questionNumber].difficulty = 2;
  });

  incorrectOptions.forEach((incorrectOption) => {
    incorrectOption.addEventListener("click", () => {
      correctOption.style.backgroundColor = "green";
      incorrectOption.style.backgroundColor = "red";
      homePageFlashcards[questionNumber].difficulty = 1;
    })
  });
}

const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");

rightButton.addEventListener("click", () => {
  if (questionNumber < homePageFlashcards.length - 1) {
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