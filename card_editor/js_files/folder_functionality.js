// hover cross
const backgroundSvg = document.querySelector(".folder_section--bg-svg");
const createFolderCross = document.querySelector(".cross");
const createFolderField = document.querySelector(
  ".folder_section--folder-form"
);
createFolderCross.addEventListener("click", (event) => {
  formSection.style.visibility = "hidden";
  folderPlusSign.style.visibility = "visible";
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

let newFolder; // Declare an initialized variable with let keyword to be accessible to both listener and button.

addButton.addEventListener("mouseup", (event) => {
  event.preventDefault();

  const folderNameInput = document.querySelector("#folder-name");
  const createdInput = document.querySelector("#folder-created");
  const tagsInput = document.querySelector("#folder-tags");
  const date = new Date(createdInput.value);
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  newFolder = new Folder( //Assigning the value here instead of const makes it possible for other elements outside the function to access its values.
    folderNameInput.value.toUpperCase(),
    formattedDate,
    tagsInput.value.toLowerCase()
  );

  const randomIndex = Math.floor(Math.random() * colorArray.length);
  const randomColor = colorArray[randomIndex];

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

  [folderNameInput, createdInput, tagsInput].forEach(
    (input) => (input.value = "")
  );

  formSection.style.visibility = "hidden";
  folderPlusSign.style.visibility = "visible";
  folderSectionContainer.style.visibility = "visible";
  mainSection.style.opacity = 1;
  mainWordingSection.style.visibility = "hidden";
});

//***********************Subfolder Functionality***********************/

//note: this process is done by bubbling or so. It's not possible to access an object that is dynamically
// created in the DOM the usual way, that's why we have to check if the parent element that is in the HTML document
// at some point contains an element with a certain class, here "access-button-class".

//Writing the function to open a folder (basically replacing the whole html)

class SubFolder {
  constructor(subFolderName) {
    this.subFolderName = subFolderName;
  }
}

const addSubFolderSectionContainer = document.querySelector(
  ".card_editor--add-indexcard"
);
const subFolderTitle = document.querySelector(".added_folder--folder-name");
const subFolderSubTitle = document.querySelector(".card_editor--sub-title");
const subFolder = document.querySelector(".folder_section--added-subfolders");
const addFolderContainer = document.querySelector(".card_editor--add-folder");
const indexCardImage = document.querySelector(".indexcard_image");
const subFolderForm = document.querySelector(
  ".index_cards_creating_subfolder_container"
);
const subFolderNameInput = document.querySelector("#subfolder-name");
export const subFolderContainer = document.querySelector(
  ".folder_section--added-subfolders-container"
);

// const elementsToHide = folderSectionContainer.querySelectorAll(
//   ":not(.card_editor--add-indexcard)"
// );

folderSectionContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("access-button-class")) {
    // get the selected folder's name using template literals
    const folderName = `${
      e.target.parentNode.parentNode.parentNode.querySelector(
        ".added_folder--paragraph-container .added_folder--folder-name"
      ).textContent
    }`;

    //update the main card editor's title with the selected folder's name
    document.querySelector(".card_editor--main-title").innerHTML = `Learning ${
      folderName ? folderName : "something"
    }!`;

    subFolderSubTitle.innerHTML =
      "Add, edit and delete your index card stacks here!";

    const addingFolderSection = [folderPlusSign, addFolderContainer];
    addingFolderSection.forEach((element) => {
      element.style.visibility = "hidden";
    });
    addSubFolderSectionContainer.style.visibility = "visible";
    folderSectionContainer.style.visibility = "hidden";
  }
});

const indexCardPlusSign = document.querySelector(".add-indexcard-plus-sign");

indexCardPlusSign.addEventListener("mouseover", () => {
  indexCardImage.style.opacity = "1";
});

indexCardPlusSign.addEventListener("mouseout", () => {
  indexCardImage.style.opacity = "0.6";
});

// functionality for the plus sign on the index card stack

indexCardPlusSign.addEventListener("click", (event) => {
  subFolderForm.style.visibility = "visible";
  subFolderForm.style.opacity = "1";
  document.querySelector(".card_editor--main-title").style.visibility =
    "hidden";
  subFolderSubTitle.style.visibility = "hidden";
});

const subFolderFormCross = document.querySelector(
  ".index_cards_creating_subfolder_cross"
);

subFolderFormCross.addEventListener("click", () => {
  subFolderForm.style.visibility = "hidden";
  subFolderForm.style.opacity = "0";
});

// Adding functionality to the create subfolder button
let newSubFolder;

const addSubFolderButton = document.querySelector(".create-subfolder-button");

addSubFolderButton.addEventListener("click", (e) => {
  e.preventDefault();
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  const randomColor = colorArray[randomIndex];
  subFolderContainer.style.visibility = "visible";
  folderSectionContainer.style.visibility = "hidden";

  newSubFolder = new SubFolder(subFolderNameInput.value.toUpperCase());

  const subFolderDivInnerHTML = `<h3 class="folder_section--added-subfolders-title subfolder-title">${newSubFolder.subFolderName}</h3> <div class="subfolder-span-container"> <div class="subfolder-span">Number of Index Cards</div> <div class="subfolder-span">Description of Content</div> </div> <div class="subfolder-button-container"> <button class="subfolder-button subfolder-button-learn">Learn</button> <button class="subfolder-button subfolder-button-edit">Edit</button> <button class="subfolder-button subfolder-button-delete"> Delete </button> </div>`;

  const subFolderDiv = document.createElement("div");
  subFolderDiv.className = "folder_section--added-subfolders";
  subFolderDiv.innerHTML = subFolderDivInnerHTML;

  subFolderContainer.appendChild(subFolderDiv);
  // clear input field
  subFolderDiv.style.background = `${randomColor}`;
  subFolderNameInput.value = "";
  subFolderForm.style.visibility = "hidden";
  subFolderForm.style.opacity = "0";
  document.querySelector(".card_editor--main-title").style.visibility =
    "visible";
  subFolderSubTitle.style.visibility = "visible";
});

// defining functionality for edit button within the subfolder
