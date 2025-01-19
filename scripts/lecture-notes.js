import { notes } from "../data/notesData.js";

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

for (const subject in notes) {
  if (notes[subject][lectureName]) {
    lectureData = notes[subject][lectureName];
    break;
  }
}

function updateLecturePage () {
  let lecturePoint = lectureData[questionNumber];
  const notesContent = document.querySelector(".notes-content");
  const lecturePageHtml = `
    <div class="title">${lecturePoint.question}</div>
    <img src="${lecturePoint.imgSrc}" alt="">
    <div class="important-point">${lecturePoint.answer}</div>
  `;
  notesContent.innerHTML = lecturePageHtml;
}

const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");

rightButton.addEventListener("click", () => {
  if (questionNumber < lectureData.length - 1) {
    questionNumber += 1;
    updateLecturePage();
  }
});

leftButton.addEventListener("click", () => {
  if (questionNumber > 0) {
    questionNumber -= 1;
    updateLecturePage();
  }
});

updateLecturePage();