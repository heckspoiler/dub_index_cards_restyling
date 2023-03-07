class Folder {
  constructor(folderName, created, tags) {
    this.folderName = folderName;
    this.created = created;
    this.tags = tags;
  }
}

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  let colorArray = [
    "rgba(255, 221, 214, 0.4)",
    "rgba(255, 254, 214, 0.4)",
    "rgba(214, 255, 253, 0.4)",
    "rgba(247, 217, 254, 0.4)",
    "rgba(217, 219, 254, 0.4)",
    "rgba(220, 254, 217 , 0.4)",
    "rgba( 254, 221, 217 , 0.4)",
  ];

  const randomIndex = Math.floor(Math.random() * colorArray.length);
  const randomColor = colorArray[randomIndex];

  console.log(randomColor);

  const folderSection = document.querySelector(
    ".folder_section--added-folders"
  );
  const folderNameInput = document.querySelector("#folder-name");
  const addingOverlay = document.querySelector(".screen-overlay");
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
  folderDiv.style.backgroundColor = `${randomColor}`;
  folderDiv.innerHTML = `
    <img src="../icons_and_images/folderPix.png" class="added_folder--img"/>
    <div class="added_folder--paragraph-container">
      <p class="added_folder--folder-name"> ${newFolder.folderName}</p>
      <p class="added_folder--created">created: ${newFolder.created}</p>
      <p class="added_folder--tags"> ${newFolder.tags}</p>
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
  addingOverlay.style.visibility = "hidden";
});

// retrieve the name from localStorage
const name = localStorage.getItem("name");

// set the title
document.querySelector(".card_editor--main-title").innerHTML = `Hello, ${name}`;
