console.log("Hello");
let images = [
  {
    src: "./Media/JellyFish1.jpg",
    alt: "a bright purple jellyfish",
  },
  {
    src: "./Media/Dolphin.jpg",
    alt: "a dolphin smiling",
  },
  {
    src: "./Media/Pufferfish.jpg",
    alt: "an unpuffed pufferfish",
  },
  {
    src: "./Media/Jellyfish2.jpg",
    alt: "A flock of bright blue jellyfish",
  },
  {
    src: "./Media/SeaLion.jpg",
    alt: "A sea lion swimming underwater",
  },
  {
    src: "./Media/Starfish.jpg",
    alt: "A starfish grazing on the beach",
  },
  {
    src: "./Media/Turtle.jpg",
    alt: "A birdseye view of a turtle",
  },
];
//Selecting html elements by id
let thumbnailContainer = document.getElementById("thumbnail-container");
let displayImage = document.getElementById("main-image-container");
let currentIndex = 0; //The images will start at the first one in the array at index 0

//Function to assign the properties of each image
function setProperties(newImg, src, alt) {
  newImg.src = src;
  newImg.alt = alt;
  newImg.className = "thumbnail-image";
}

//function to create thumbnail images and add them to the image container
function createThumbnail(thumbnailContainer) {
  for (let i = 0; i < images.length; i++) {
    let newThumbnail = document.createElement("img");
    setProperties(newThumbnail, images[i].src, images[i].alt);
    thumbnailContainer.appendChild(newThumbnail);
    //Adding the event listner so that when a thumbnail image is clicked it becomes
    newThumbnail.addEventListener("click", function () {
      updateDisplayImage(i);
    });
  }
}

//Updating the display Image
function updateDisplayImage(index) {
  let currentDisplayImage = displayImage.firstChild;
  //Current image is the first element in the 'main-image-container' div

  //If there is no current image set...
  if (currentDisplayImage == undefined) {
    currentDisplayImage = document.createElement("img");
    displayImage.appendChild(currentDisplayImage);
  }

  setProperties(currentDisplayImage, images[index].src, images[index].alt);
}

//If the index is more than or equal to the maximum index, it will be set to 0 otherwise 1 will be added to the current index
function nextImage(index) {
  if (currentIndex >= images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += index;
  }
  console.log(currentIndex);
  updateDisplayImage(currentIndex);
}

//If the index is less than or equal to the minimum index, it will be set to the array length -1 (the last image in the array) otherwise 1 will be subtracted from the current index
function prevImage(index) {
  if (currentIndex <= 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex -= index;
  }
  console.log(currentIndex);
  updateDisplayImage(currentIndex);
}
let next = document.getElementById("next");
let prev = document.getElementById("prev");
next.addEventListener("click", function () {
  nextImage(1);
});
prev.addEventListener("click", function () {
  prevImage(1);
});

//When the page starts up these are tht things that i want to happen
function startUp() {
  createThumbnail(thumbnailContainer);
  updateDisplayImage(currentIndex); //The display image should be set to the first image in the array i.e 0
}

let toggleThumbnail = document.getElementById("hideShow");

//Allows user to show or hide thumbnail in mobile view
toggleThumbnail.addEventListener("click", function () {
  if (thumbnailContainer.style.display == "block") {
    thumbnailContainer.style.display = "none";
    console.log(thumbnailContainer.style.display);
  } else {
    thumbnailContainer.style.display = "block";
    console.log(thumbnailContainer.style.display);
  }
});

//!Working on this last bit

// if (toggleThumbnail.style.display == "none") {
//   thumbnailContainer.style.display = "block";
// }

startUp();
