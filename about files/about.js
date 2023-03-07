const backArrow = document.querySelector(".fa-arrow-right");
console.log(backArrow);
const paragraphCross = document.querySelectorAll(".fa-xmark");

const paragraphs = document.querySelectorAll(
  ".about__section--paragraphs--paragraph"
);

// paragraphs.forEach(function (paragraph) {
//   const button = paragraph.previousElementSibling;
//   button.addEventListener("click", function () {
//     paragraph.style.display =
//       paragraph.style.display === "none" ? "block" : "none";
//     paragraph.style.transition === "display 2s ease-in-out";
//   });
// });

backArrow.addEventListener("click", function () {
  window.location = "../landing_page/landing_page.html";
});
