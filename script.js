// RGB Colors

// Variables to store HTML Elements
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStrOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");

// Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

// Event Function
function rgbPreview() {
  // Input: get rgb values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  // Validate Colors (Constrain colors between 0 -255)
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  if (bValue < 0) {
    bValue = 0;
    blueInElInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  // Process: buld rgb string rgb(__, __, __)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update the color preview
  rgbStrOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}
