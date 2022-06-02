// photography.js
// by Preston Hager

/* This script loads the images onto the page
 * dynamically to reduce network load.
 * It also loads at reduced quality for
 * slower networks.
 */

// ===== List of Photos ===== //
let PHOTOS = [
  "IMG_2956",
  "IMG_3014",
  "IMG_2663"
];
// === End of Definitions === //

// Execute when the document is loaded
$(document).ready((e) => {
  let photoGrid = $("#photo-grid");
  let networkSpeed = navigator.connection.downlink | 0;
  let imageSize;
  switch (true) {
    case (networkSpeed < 1):
      imageSize = "small";
      break;
    case (networkSpeed < 3):
      imageSize = "medium";
      break;
    case (networkSpeed < 5):
      imageSize = "large";
      break;
    default:
      imageSize = "default";
      break;
  }
  console.log("Network Speed: " + networkSpeed + " Mbs.\nImage size: " + imageSize);
  for (let image in PHOTOS) {
    let imageElement = $(`<div class="media-photo" />`).append(
      $(`<img src="/assets/photos/${PHOTOS[image]}-${imageSize}.jpg" />`)
    );
    photoGrid.append(imageElement);
  }
})
