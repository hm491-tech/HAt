import { notes } from "./notesData.js"
import { flashcards } from "./flashcardsData.js";

export const profiles = [
  {
    id: "professor1",
    name: "Dr. Shiv Vivis",
    course: "Physics",
    occupation: "Professor",
    xpPoints: 3000,
    followers: 52,
    isFollowing: false,
    notes: notes.physics,
    flashcards: flashcards.physics
  }, {
    id: "professor2",
    name: "Dr. Rohit JG",
    course: "Mathematics",
    occupation: "Professor",
    xpPoints: 3000,
    followers: 69,
    isFollowing: false,
    notes: notes.maths,
    flashcards: flashcards.maths
  }, {
    id: "student1",
    name: "Lalith Mukund Raj",
    course: "Electrical Engineering",
    occupation: "Student",
    xpPoints: 3000,
    followers: 69,
    isFollowing: false,
    notes: notes.electrical,
    flashcards: flashcards.electrical
  }
]


