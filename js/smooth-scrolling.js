/* Scrolls smoothly to a page section
when a navigation link is clicked.

Heavily borrows from this tutorial:
https://www.youtube.com/watch?v=oUSvlrDTLi4

Except for the following functions, which I made 100% from scratch:

- countToScrollTime(), which makes sure that
the fixed header doesn't hide on sroll down, like it normally would
(see the script hide-show-header-on-scroll.js).
It disables hiding the header until the smoothScroll() finishes.

- checkForExtraHeightAboveElement(), which makes sure that 
scrolling is smooth, even if the target element's top position is lower than
the viewport's top position. Otherwise this whole script would try to
scroll lower than actually possible and would abruptly stop at the bottom.
Try clicking on "Contact Me" to notice the non-abrupt smoothness.

*/

let currentlySmoothScrolling = false;
let scrollTimeCounter = 0;
let alreadyCounting = false;

function smoothScroll(target, duration) {
  currentlySmoothScrolling = true;
  scrollTimeCounter = 0;

  let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
  let targetPosition = document.querySelector(target)
                               .getBoundingClientRect()
                               .top
                               - headerHeight
                               + 1;

  if (target === "#headline") {
    targetPosition += headerHeight;
  }

  function checkForExtraHeightAboveElement() {
    let bodyRect = document.body.getBoundingClientRect();
    let bodyAbsoluteBottom = bodyRect.bottom - bodyRect.top;
    let targetRect = document.querySelector(target).getBoundingClientRect();
    let targetAbsoluteTop = targetRect.top - bodyRect.top;
    let windowHeight = window.innerHeight;
    let distanceFromBodyBottomToTargetTop = bodyAbsoluteBottom - targetAbsoluteTop; 
    let extraHeight = windowHeight - distanceFromBodyBottomToTargetTop - headerHeight;

    if (extraHeight > 0) {
      targetPosition -= extraHeight;
    }
  }

  checkForExtraHeightAboveElement();

  let startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d;
	  t--;
    return c*(t*t*t + 1) + b;
    // from gizma.com/easing
  };

  if (!alreadyCounting) {
    alreadyCounting = true;
    countToScrollTime();
  }

  requestAnimationFrame(animation);
}

function countToScrollTime() {
    setTimeout( () => {
      scrollTimeCounter += 100;
      if (scrollTimeCounter > scrollTime) {
        currentlySmoothScrolling = false;
        alreadyCounting = false;
      } else {
        countToScrollTime();
      }
    }, 100);
}

let scrollTime = 500;

let headline = document.querySelector(".scroll-to-headline");
headline.addEventListener("click", () => {
  smoothScroll("#headline", scrollTime);
});

let hello = document.querySelector(".scroll-to-hello");
hello.addEventListener("click", () => {
  smoothScroll("#hello", scrollTime);
});

let github = document.querySelector(".scroll-to-github");
github.addEventListener("click", () => {
  smoothScroll("#github", scrollTime);
});

let myStoryList = document.querySelectorAll(".scroll-to-my-story");
for (const myStory of myStoryList) {
  myStory.addEventListener("click", () => {
    smoothScroll("#my-story", scrollTime);
  });
}

let contactMeList = document.querySelectorAll(".scroll-to-contact-me");
for (const contactMe of contactMeList) {
  contactMe.addEventListener("click", () => {
    smoothScroll("#contact-me", scrollTime);
  });
}