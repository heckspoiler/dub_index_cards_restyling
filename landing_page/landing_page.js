// const btns = document.querySelectorAll(".landing__page--button");
// const title = document.querySelector(".landing__page--title");
// const text = document.querySelector(".landing__page--intro--text--p");
// const alien = document.querySelector(".fa-alien-8bit");
// const brackets = document.querySelector(".fa-brackets-curly");
// const saturn = document.querySelector(".fa-planet-ringed");
// const flask = document.querySelector(".fa-flask ");
// const buttons = document.querySelector(".landing__page--button--section");
// const logInSection = document.querySelector(".landing__page--login--section");
// const logInButton = document.querySelector(".landing__page--login--button");
// const logInCross = document.querySelector(".cross");
// const signUpSection = document.querySelector(".landing__page--signup--section");
// const signUpButton = document.querySelector(".landing__page--signup--button");
// const signUpCross = document.querySelector(".cross__sign--up");
// const hamburgerContainer = document.querySelector(".landing__page--nav--bar");
// const hamburger = document.querySelector(".header__main-nav--hamburger");
// const links = document.querySelectorAll(".landing__page--nav--bar--link");
// const passValue = document.getElementById("password-signup").value;
// const confpassValue = document.getElementById("password-signup-2").value;
// const signUpFormButton = document.getElementById("sign__up--button");

// hamburger.addEventListener("click", () => {
//   hamburgerContainer.classList.toggle("clicked");
//   hamburger.classList.toggle("clicked--bg");
//   links.forEach((link) => {
//     link.classList.toggle("fade");
//   });
// });

// const passwordInput = document.getElementById("password");
// const showPasswordCheckbox = document.getElementById("show-password");

// showPasswordCheckbox.addEventListener("change", function () {
//   passwordInput.type = this.checked ? "text" : "password";
// });

// window.onload = function () {
//   setTimeout(function () {
//     title.style.animation = "slide-in 1s ease-in-out forwards";
//   }, 500);
//   alien.style.left = "-200px";
//   alien.style.transform = "rotate(-80deg)";
//   setTimeout(function () {
//     alien.style.transition = "left 1s ease-out, transform 1s ease-out";
//     alien.style.left = "5vh";
//     alien.style.transform = "rotate(-40deg)";
//   }, 500);
//   brackets.style.left = "100vw";
//   brackets.style.transform = "rotate(160deg)";
//   setTimeout(function () {
//     brackets.style.transition = "left 1s ease-out, transform 1s ease-in";
//     brackets.style.left = "70vw";
//   }, 800);
//   saturn.style.left = "50vw";
//   setTimeout(() => {
//     saturn.style.transition = "left 1.2s ease-in-out";
//     saturn.style.left = "10vw";
//   }, 800);
//   flask.style.left = "-60vw";
//   flask.style.transform = "rotate(20deg)";
//   setTimeout(() => {
//     flask.style.transition = "left 1.4s ease-out";
//     flask.style.left = "12vw";
//   }, 900);
//   buttons.style.opacity = "0";
//   setTimeout(() => {
//     buttons.style.transition = "opacity 1.5s ease-in-out";
//     buttons.style.opacity = "1";
//   }, 1500);
// };

// document.addEventListener("DOMContentLoaded", function () {
//   const elements = document.querySelectorAll(
//     ".landing__page--background--icon"
//   );

//   elements.forEach((element) => {
//     element.style.opacity = 0;

//     setTimeout(() => {
//       element.style.transition = "opacity 1s ease-out";
//       element.style.opacity = 1;
//     }, 500);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   text.style.opacity = 0;

//   setTimeout(() => {
//     text.style.transition = "opacity 1.7s ease-in-out";
//     text.style.opacity = 1;
//   }, 600);
// });

// logInButton.addEventListener("click", () => {
//   logInSection.classList.add("landing__page--login--section--visible");
// });

// logInCross.addEventListener("click", () => {
//   logInSection.classList.remove("landing__page--login--section--visible");
// });

// signUpButton.addEventListener("click", () => {
//   signUpSection.classList.add("landing__page--signup--section--visible");
// });

// signUpCross.addEventListener("click", () => {
//   signUpSection.classList.remove("landing__page--signup--section--visible");
// });

// function ansValidation(ev) {
//   if (passValue !== confpassValue) {
//     window.alert("Passwords do not match!");
//   }
// }

// signUpFormButton.addEventListener("click", ansValidation);

// DOM elements
const btns = document.querySelectorAll(".landing__page--button");
const title = document.querySelector(".landing__page--title");
const text = document.querySelector(".landing__page--intro--text--p");
const buttons = document.querySelector(".landing__page--button--section");
const logInSection = document.querySelector(".landing__page--login--section");
const logInButton = document.querySelector(".landing__page--login--button");
const logInCross = document.querySelector(".cross");
const signUpSection = document.querySelector(".landing__page--signup--section");
const signUpButton = document.querySelector(".landing__page--signup--button");
const signUpCross = document.querySelector(".cross__sign--up");
const hamburgerContainer = document.querySelector(".landing__page--nav--bar");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".landing__page--nav--bar--link");
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("show-password");
const passValue = document.getElementById("password-signup");
const confpassValue = document.getElementById("password-signup-2");
const signUpFormButton = document.getElementById("sign__up--button");
const yellowBlobs = document.querySelector(".yellow-background-container");
const googleLogo = document.querySelector(".fa-google");
const facebookLogo = document.querySelector(".fa-facebook");
const githubLogo = document.querySelector(".fa-github");

githubLogo.addEventListener("mouseenter", (event) => {
  yellowBlobs.firstElementChild.classList.add("yellow-background-opacity-50");
  githubLogo.classList.add("background-github");
});

githubLogo.addEventListener("mouseleave", (event) => {
  yellowBlobs.firstElementChild.classList.remove(
    "yellow-background-opacity-50"
  );
  githubLogo.classList.remove("background-github");
});

googleLogo.addEventListener("mouseenter", (event) => {
  yellowBlobs.children[1].classList.add("yellow-background-opacity-50");
  googleLogo.classList.add("background-google");
});

googleLogo.addEventListener("mouseleave", (event) => {
  yellowBlobs.children[1].classList.remove("yellow-background-opacity-50");
  googleLogo.classList.remove("background-google");
});

facebookLogo.addEventListener("mouseenter", (event) => {
  yellowBlobs.children[2].classList.add("yellow-background-opacity-50");
  facebookLogo.classList.add("background-facebook");
});

facebookLogo.addEventListener("mouseleave", (event) => {
  yellowBlobs.children[2].classList.remove("yellow-background-opacity-50");
  facebookLogo.classList.remove("background-facebook");
});

console.log(yellowBlobs);
// Event Listeners
hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  hamburger.classList.toggle("clicked--bg");
  links.forEach((link) => link.classList.toggle("fade"));
});

showPasswordCheckbox.addEventListener("change", () => {
  passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
});

logInButton.addEventListener("click", () => {
  logInSection.classList.add("landing__page--login--section--visible");
});

logInCross.addEventListener("click", () => {
  logInSection.classList.remove("landing__page--login--section--visible");
});

signUpButton.addEventListener("click", () => {
  signUpSection.classList.add("landing__page--signup--section--visible");
});

signUpCross.addEventListener("click", () => {
  signUpSection.classList.remove("landing__page--signup--section--visible");
});

signUpFormButton.addEventListener("click", (ev) => {
  if (passValue.value !== confpassValue.value) {
    window.alert("Passwords do not match!");
    ev.preventDefault();
  }
});

// Functions
function fadeIn(elements) {
  elements.forEach((element) => {
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.transition = "opacity 1s ease-out";
      element.style.opacity = 1;
    }, 500);
  });
}

// submit form leading to new html

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("username").value;

  // store the name in localStorage
  localStorage.setItem("name", name);
  window.location.href = "../card_editor/card_editor.html";
}
