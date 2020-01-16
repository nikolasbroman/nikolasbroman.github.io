/* Hides header on scroll down,
shows header on scroll up. */

const header = document.getElementsByTagName("header")[0];
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
    if (!currentlySmoothScrolling) {
      if (currentScroll == 0) {
        header.classList.remove("hide");
      } else if (currentScroll > lastScroll) {
        header.classList.add("hide");
      } else if (currentScroll < lastScroll) {
        header.classList.remove("hide");
      }
    }
  lastScroll = currentScroll;
});