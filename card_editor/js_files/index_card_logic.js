import { subFolderContainer } from "./folder_functionality.js";

// edit button

const choiceFieldContainer = document.querySelector(".container");
const choiceFieldCross = document.querySelector(".cross-container");

choiceFieldCross.addEventListener("click", () => {
  choiceFieldContainer.style.visibility = "hidden";
});
const editButtonClickEvent = subFolderContainer.addEventListener(
  "click",
  (event) => {
    if (event.target.classList.contains("subfolder-button-edit")) {
      choiceFieldContainer.style.visibility = "visible";
    }
  }
);

// learn button

// delete button

// add index card type pop up

const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const buttonTop = document.querySelector(".button-top");
const buttonContainer = document.querySelector(".button-container");
const buttons = document.querySelectorAll(".button");
const boxLeft = document.querySelector(".left");
const boxRight = document.querySelector(".right");
const boxTop = document.querySelector(".top");
const text = document.querySelector(".text-container");
const addSingleAnswerCard = document.querySelector(".add-indexcard-button");

buttonLeft.addEventListener("click", () => {
  boxLeft.classList.toggle("margin-left-100");
  text.classList.toggle("text-margin-left-minus-1000");
});

buttonRight.addEventListener("click", () => {
  boxRight.classList.toggle("margin-right-100");
  text.classList.toggle("text-margin-left-1200");
});

buttonTop.addEventListener("click", () => {
  boxTop.classList.toggle("margin-top-100");
  text.classList.toggle("text-margin-top-minus-10rem");
  text.classList.toggle("text-margin-top-10rem");
});

const buttonArray = [buttonTop, buttonLeft, buttonRight];

function handleClick(event) {
  const clickedButton = event.target;
  console.log(clickedButton);

  buttonArray.forEach((button) => {
    if (button !== clickedButton) {
      button.style.visibility =
        button.style.visibility === "hidden" ? "" : "hidden";
    }

    clickedButton.classList.toggle("button-lower-clicked");
    if (button.hasAttribute("data-original-innerhtml")) {
      button.innerHTML = button.getAttribute("data-original-innerhtml");

      button.removeAttribute("data-original-innerhtml");
    } else {
      button.setAttribute("data-original-innerhtml", button.innerHTML);

      button.innerHTML = "Back";
    }
  });

  buttonContainer.classList.toggle("button-container-lower");
}

buttonArray.forEach((button) => {
  button.addEventListener("click", handleClick);
});

//pop up button handling

// edit --> add indexcards button

export let indexCardsArray = [];
let singleAnswerCards = [];
let multipleChoiceCards = [];
let openFormatCards = [];

const singleChoiceButton = document.getElementById(
  "add-single-choice-indexcard-button"
);
const multipleChoiceButton = document.getElementById(
  "add-multiple-choice-indexcard-button"
);

const openFormatButton = document.getElementById(
  "add-open-format-indexcard-button"
);

class IndexCard {
  constructor(question, answer, type) {
    (this.question = question), (this.answer = answer), (this.type = type);
  }
}

singleChoiceButton.addEventListener("click", (e) => {
  e.preventDefault();
  const questionInput = document.getElementById("single-word-question-field");
  const answerInput = document.getElementById("single-word-answer-field");
  const type = document.getElementById("single-word-question");

  const singleAnswerCard = new IndexCard(
    questionInput.value,
    answerInput.value,
    type.value
  );

  singleAnswerCards.push(singleAnswerCard);
  indexCardsArray.push(singleAnswerCard);

  // Clear form fields
  questionInput.value = "";
  answerInput.value = "";
});
