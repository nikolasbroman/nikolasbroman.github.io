let headline = document.getElementById("headline");
let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
headline.style.paddingTop = "calc(4.2rem + " + headerHeight + "px)";