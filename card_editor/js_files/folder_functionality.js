class Folder {
  constructor(folderName, created, tags) {
    this.folderName = folderName;
    this.created = created;
    this.tags = tags;
  }
}

addButton.addEventListener("mouseup", (event) => {
  event.preventDefault();

  let colorArray = [
    "rgba(255, 221, 214, 1)",
    "rgba(255, 254, 214, 1)",
    "rgba(214, 255, 253, 1)",
    "rgba(247, 217, 254, 1)",
    "rgba(217, 219, 254, 1)",
    "rgba(220, 254, 217 ,1)",
    "rgba( 254, 221, 217 , 1)",
  ];

  const randomIndex = Math.floor(Math.random() * colorArray.length);
  const randomColor = colorArray[randomIndex];

  console.log(randomColor);

  const folderSection = document.querySelector(
    ".folder_section--added-folders"
  );
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
    <button id="access-button">Access</button
    ><button id="delete-button">Delete</button>
  </div>
</div>
  `;
  folderSection.insertBefore(folderDiv, folderSection.firstElementChild);

  // clear the input fields
  folderNameInput.value = "";
  createdInput.value = "";
  tagsInput.value = "";

  formSection.style.visibility = "hidden";
  plusSign.style.visibility = "visible";
  mainSection.style.opacity = 1;
  mainWordingSection.style.visibility = "hidden";
});

// retrieve the name from localStorage
const name = localStorage.getItem("name");

// set the title
document.querySelector(".card_editor--main-title").innerHTML = `Hello, ${name}`;

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
