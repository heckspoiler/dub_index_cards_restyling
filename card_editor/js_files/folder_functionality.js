// hover cross
const backgroundSvg = document.querySelector(".folder_section--bg-svg");
const createFolderCross = document.querySelector(".cross");
const createFolderField = document.querySelector(
  ".folder_section--folder-form"
);
createFolderCross.addEventListener("click", (event) => {
  formSection.style.visibility = "hidden";
  plusSign.style.visibility = "visible";
  mainSection.style.opacity = 1;
  mainWordingSection.style.visibility = "visible";
});

// color array

let colorArray = [
  "rgba(255, 221, 214, 1)",
  "rgba(255, 254, 214, 1)",
  "rgba(214, 255, 253, 1)",
  "rgba(247, 217, 254, 1)",
  "rgba(217, 219, 254, 1)",
  "rgba(220, 254, 217 ,1)",
  "rgba( 254, 221, 217 , 1)",
];

// retrieve the name from localStorage
const name = localStorage.getItem("name");

// set the title
document.querySelector(".card_editor--main-title").innerHTML = `Hello, ${name}`;

class Folder {
  constructor(folderName, created, tags) {
    this.folderName = folderName;
    this.created = created;
    this.tags = tags;
  }
}

const folderSectionContainer = document.querySelector(
  ".folder_section--added-folders-container"
);

addButton.addEventListener("mouseup", (event) => {
  event.preventDefault();

  const randomIndex = Math.floor(Math.random() * colorArray.length);
  const randomColor = colorArray[randomIndex];

  const folderNameInput = document.querySelector("#folder-name");
  const createdInput = document.querySelector("#folder-created");
  const tagsInput = document.querySelector("#folder-tags");
  const date = new Date(createdInput.value);
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const newFolder = new Folder(
    folderNameInput.value.toUpperCase(),
    formattedDate,
    tagsInput.value.toLowerCase()
  );

  // append the new folder to the DOM
  const folderDiv = document.createElement("div");
  folderDiv.className = "added_folder--div";
  folderDiv.style.background = `${randomColor}`;
  folderDiv.innerHTML = `
  <img
  src="../icons_and_images/folderPix.png"
  class="added_folder--img"
  alt="Image of an added Folder"
/>
<div class="added_folder--paragraph-container">
  <p class="added_folder--folder-name">${newFolder.folderName}</p>
  <p class="added_folder--created">created: ${newFolder.created}</p>
  <p class="added_folder--tags">${newFolder.tags}</p>
  <div class="added_folder--buttons">
    <button id="access-button" class="access-button-class">Access</button
    ><button id="delete-button" class="delete-button-class">Delete</button>
  </div>
</div>
  `;
  folderSectionContainer.insertBefore(
    folderDiv,
    folderSectionContainer.firstElementChild
  );

  // clear the input fields
  folderNameInput.value = "";
  createdInput.value = "";
  tagsInput.value = "";

  formSection.style.visibility = "hidden";
  plusSign.style.visibility = "visible";
  folderSectionContainer.style.visibility = "visible";
  mainSection.style.opacity = 1;
  mainWordingSection.style.visibility = "hidden";
});

//writing the function to open a folder (basically replacing the whole html)

//note: this process is done by bubbling or so. It's not possible to access an object that is dynamically
// created in the DOM the usual way, that's why we have to check if the parent element that is in the HTML document
// at some point contains an element with a certain class, here "access-button-class".

const subFolderTitle = document.querySelector(".added_folder--folder-name");
const subFolderSubTitle = document.querySelector(".card_editor--sub-title");

const titleTest = function (e) {
  if (e.target.classList.contains("added_folder--folder-name")) {
    console.log("bitch");
  }
};

console.log(titleTest());

console.log(titleTest);
folderSectionContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("access-button-class")) {
    document.querySelector(
      ".folder_section--added-subfolders-container"
    ).style.visibility = "visible";
    // document.querySelector(".card_editor--main-title").innerHTML =
    //   newFolder.folderName;
    subFolderSubTitle.innerHTML =
      "Add, edit and delete your index card stacks here!";
    document.querySelector(".card_editor--main-title").innerHTML =
      e.target.textContent;
  }
});

// // hover cross
// const backgroundSvg = document.querySelector(".folder_section--bg-svg");
// const createFolderCross = document.querySelector(".cross");
// const createFolderField = document.querySelector(
//   ".folder_section--folder-form"
// );
// createFolderCross.addEventListener("click", (event) => {
//   formSection.style.visibility = "hidden";
//   plusSign.style.visibility = "visible";
//   mainSection.style.opacity = 1;
//   mainWordingSection.style.visibility = "visible";
// });

// // color array

// let colorArray = [
//   "rgba(255, 221, 214, 1)",
//   "rgba(255, 254, 214, 1)",
//   "rgba(214, 255, 253, 1)",
//   "rgba(247, 217, 254, 1)",
//   "rgba(217, 219, 254, 1)",
//   "rgba(220, 254, 217 ,1)",
//   "rgba( 254, 221, 217 , 1)",
// ];

// // retrieve the name from localStorage
// const name = localStorage.getItem("name");

// // set the title
// document.querySelector(".card_editor--main-title").innerHTML = `Hello, ${name}`;

// class Folder {
//   constructor(folderName, created, tags) {
//     this.folderName = folderName;
//     this.created = created;
//     this.tags = tags;
//   }
// }

// const folderSectionContainer = document.querySelector(
//   ".folder_section--added-folders-container"
// );

// addButton.addEventListener("mouseup", (event) => {
//   event.preventDefault();

//   const randomIndex = Math.floor(Math.random() * colorArray.length);
//   const randomColor = colorArray[randomIndex];

//   const folderNameInput = document.querySelector("#folder-name");
//   const createdInput = document.querySelector("#folder-created");
//   const tagsInput = document.querySelector("#folder-tags");
//   const date = new Date(createdInput.value);
//   const options = { day: "numeric", month: "numeric", year: "numeric" };
//   const formattedDate = date.toLocaleDateString("en-US", options);

//   const newFolder = new Folder(
//     folderNameInput.value.toUpperCase(),
//     formattedDate,
//     tagsInput.value.toLowerCase()
//   );

//   // append the new folder to the DOM
//   const folderDiv = document.createElement("div");
//   folderDiv.className = "added_folder--div";
//   folderDiv.style.background = `${randomColor}`;
//   folderDiv.innerHTML = `
//   <img
//   src="../icons_and_images/folderPix.png"
//   class="added_folder--img"
//   alt="Image of an added Folder"
// />
// <div class="added_folder--paragraph-container">
//   <p class="added_folder--folder-name">${newFolder.folderName}</p>
//   <p class="added_folder--created">created: ${newFolder.created}</p>
//   <p class="added_folder--tags">${newFolder.tags}</p>
//   <div class="added_folder--buttons">
//     <button id="access-button" class="access-button-class">Access</button
//     ><button id="delete-button" class="delete-button-class">Delete</button>
//   </div>
// </div>
//   `;
//   folderSectionContainer.insertBefore(
//     folderDiv,
//     folderSectionContainer.firstElementChild
//   );

//   // clear the input fields
//   folderNameInput.value = "";
//   createdInput.value = "";
//   tagsInput.value = "";

//   formSection.style.visibility = "hidden";
//   plusSign.style.visibility = "visible";
//   folderSectionContainer.style.visibility = "visible";
//   mainSection.style.opacity = 1;
//   mainWordingSection.style.visibility = "hidden";
// });

// //writing the function to open a folder (basically replacing the whole html)

// //note: this process is done by bubbling or so. It's not possible to access an object that is dynamically
// // created in the DOM the usual way, that's why we have to check if the parent element that is in the HTML document
// // at some point contains an element with a certain class, here "access-button-class".

// folderSectionContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("access-button-class")) {
//     document.querySelector(
//       ".folder_section--added-subfolders-container"
//     ).style.visibility = "visible";
//     document.querySelector(".card_editor--main-title").innerHTML =
//       newFolder.folderName;
//   }
// });
