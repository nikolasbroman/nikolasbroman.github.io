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
                               - headerHeight;
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
      console.log("scrollTimeCounter = " + scrollTimeCounter);
      if (scrollTimeCounter > scrollTime) {
        currentlySmoothScrolling = false;
        alreadyCounting = false;
      } else {
        countToScrollTime();
      }
    }, 100);
}

let scrollTime = 500;

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