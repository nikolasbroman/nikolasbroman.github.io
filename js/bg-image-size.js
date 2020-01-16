/* Changes background image size
according to browser resolution */

let width = window.innerWidth;
let height = window.innerHeight;
let body = document.body;

if (width <= 640 && height <= 352) {
  body.style.backgroundImage = "url(images/bg-640-352.jpg)";
} else if (width <= 800 && height <= 440) {
  body.style.backgroundImage = "url(images/bg-800-440.jpg)";
} else if (width <= 1280 && height <= 704) {
  body.style.backgroundImage = "url(images/bg-1280-704.jpg)";
} else if (width <= 1440 && height <= 792) {
  body.style.backgroundImage = "url(images/bg-1440-792.jpg)";
} else if (width <= 1600 && height <= 880) {
  body.style.backgroundImage = "url(images/bg-1600-880.jpg)";
}