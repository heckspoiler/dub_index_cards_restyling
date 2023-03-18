// edit button section

// learn button section

// delete button section

// add index card type pop up

const buttonLeft = document.querySelector(".single-answer");
const buttonRight = document.querySelector(".multiple-choice-answer");
const buttonTop = document.querySelector(".open-format-answer");
const boxLeft = document.querySelector(".left");
const boxRight = document.querySelector(".right");
const boxTop = document.querySelector(".top");
const text = document.querySelector(".text");

buttonLeft.addEventListener("click", () => {
  if (boxLeft.style.marginLeft === "100%") {
    boxLeft.style.marginLeft = "0%";
    boxLeft.style.opacity = 1;
    text.style.marginLeft = "-1000px";
  } else {
    boxLeft.style.marginLeft = "100%";
    text.style.marginLeft = "0px";
  }
});

buttonRight.addEventListener("click", () => {
  if (boxRight.style.marginRight === "100%") {
    boxRight.style.marginRight = "0%";
    boxRight.style.opacity = 1;
    text.style.marginLeft = "1200px";
  } else {
    boxRight.style.marginRight = "100%";
    text.style.marginLeft = "0px";
  }
});

buttonTop.addEventListener("click", () => {
  if (boxTop.style.marginTop === "100%") {
    boxTop.style.marginTop = "0%";
    boxTop.style.opacity = 1;
    text.style.marginTop = "-10rem";
  } else {
    boxTop.style.marginTop = "100%";
    text.style.marginTop = " 10rem";
  }

  console.log(buttonTop);
});
