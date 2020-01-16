/* Scrolls smoothly to a page section
when a navigation link is clicked.

Heavily borrows from this tutorial:
https://www.youtube.com/watch?v=oUSvlrDTLi4

Except for countToScrollTime(), which I made
to make sure that the fixed header doesn't hide on sroll down,
like it normally would (see the last script).*/

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