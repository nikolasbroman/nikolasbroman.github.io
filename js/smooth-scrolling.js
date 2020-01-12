function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  // var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
  // if header is fixed, then subtract headerHeight from targetPosition
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
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

  requestAnimationFrame(animation);
}

var scrollTime = 700;

var hello = document.querySelector(".scroll-to-hello");
hello.addEventListener("click", function() {
  smoothScroll("#hello", scrollTime);
});

var github = document.querySelector(".scroll-to-github");
github.addEventListener("click", function() {
  smoothScroll("#github", scrollTime);
});

var myStoryList = document.querySelectorAll(".scroll-to-my-story");
for (const myStory of myStoryList) {
  myStory.addEventListener("click", function() {
    smoothScroll("#my-story", scrollTime);
  });
}

var contactMeList = document.querySelectorAll(".scroll-to-contact-me");
for (const contactMe of contactMeList) {
  contactMe.addEventListener("click", function() {
    smoothScroll("#contact-me", scrollTime);
  });
}


