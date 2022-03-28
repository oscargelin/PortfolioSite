// Index page

console.log(document.location.pathname);
const indexPage = "/~osge0002/Portfolio%202.0/index.html";
const altIndexPage = "/~osge0002/Portfolio%202.0/";
const contactPage = "/~osge0002/Portfolio%202.0/contact.html";

// Fetching gradient colors for bg and btns
let gradientGreen = getComputedStyle(document.documentElement).getPropertyValue(
  "--gradient-green-color"
);

let gradientBlue = getComputedStyle(document.documentElement).getPropertyValue(
  "--gradient-blue-color"
);

let gradientOrange = getComputedStyle(
  document.documentElement
).getPropertyValue("--gradient-orange-color");

let gradientGrey = getComputedStyle(document.documentElement).getPropertyValue(
  "--gradient-grey-color"
);

// fetching btns
const cvBtn = document.querySelector(".cv-btn");
const portfolioBtn = document.querySelector(".portfolio-btn");

//fetching containers
const contentContainer = document.querySelector(".content-container");
const leftGridContent = document.querySelector(".left-grid-content");
const rightGridContent = document.querySelector(".right-grid-content");

//fetching logo
const siteLogo = document.querySelector(".site-logo");

//Fetchin localStorage data
let theme = getTheme();
switch (theme) {
  case gradientGreen:
    defaultTheme();
    break;
  case gradientBlue:
    secondaryTheme();
    break;
  case gradientOrange:
    thirdTheme();
    break;
  case gradientGrey:
    fourthTheme();
    break;
}
function removeAllBorders() {
  document.getElementById("default-theme").style.border = "none";
  document.getElementById("secondary-theme").style.border = "none";
  document.getElementById("third-theme").style.border = "none";
  document.getElementById("fourth-theme").style.border = "none";
}
function defaultTheme() {
  document.body.style.backgroundImage = gradientGreen;
  if (checkPathName()) {
    portfolioBtn.style.backgroundImage = gradientGreen;
    cvBtn.style.backgroundImage = gradientGreen;
  }
  leftGridContent.style.backgroundColor = "#2f4f4f";
  siteLogo.style.backgroundImage = gradientGreen;
  localStorage.setItem("theme", gradientGreen);
  removeAllBorders();
  document.getElementById("default-theme").style.border = "1px solid white";
}
function checkPathName() {
  if (
    document.location.pathname == indexPage ||
    document.location.pathname == altIndexPage
  ) {
    return true;
  }
}
function secondaryTheme() {
  document.body.style.backgroundImage = gradientBlue;
  if (checkPathName()) {
    portfolioBtn.style.backgroundImage = gradientBlue;
    cvBtn.style.backgroundImage = gradientBlue;
  }
  leftGridContent.style.backgroundColor = "#1e0f4c";
  siteLogo.style.backgroundImage = gradientBlue;
  localStorage.setItem("theme", gradientBlue);
  removeAllBorders();
  document.getElementById("secondary-theme").style.border = "1px solid white";
}
function thirdTheme() {
  document.body.style.backgroundImage = gradientOrange;
  if (checkPathName()) {
    portfolioBtn.style.backgroundImage = gradientOrange;
    cvBtn.style.backgroundImage = gradientOrange;
  }
  leftGridContent.style.backgroundColor = "#cc0037";
  siteLogo.style.backgroundImage = gradientOrange;
  localStorage.setItem("theme", gradientOrange);
  removeAllBorders();
  document.getElementById("third-theme").style.border = "1px solid white";
}
function fourthTheme() {
  document.body.style.backgroundImage = gradientGrey;
  if (checkPathName()) {
    portfolioBtn.style.backgroundImage = gradientGrey;
    cvBtn.style.backgroundImage = gradientGrey;
  }
  leftGridContent.style.backgroundColor = "#323330";
  siteLogo.style.backgroundImage = gradientGrey;
  localStorage.setItem("theme", gradientGrey);
  removeAllBorders();
  document.getElementById("fourth-theme").style.border = "1px solid white";
}
function getTheme() {
  return localStorage.getItem("theme");
}

function getWindowSetting() {
  return localStorage.getItem("windowSetting");
}
if (getWindowSetting() == "full") {
  contentContainer.classList.add("green-clicked");
}
function yellowClicked() {
  contentContainer.classList.toggle("yellow-clicked");
  if (getWindowSetting() == "full") {
    document.querySelector(".hidden-btns").classList.toggle("hidden");
    document.querySelector(".hidden-btns").classList.toggle("full-window");
    document.querySelector(".red-window").classList.toggle("hidden");
  } else {
    document.querySelector(".hidden-btns").classList.toggle("hidden");
    document.querySelector(".red-window").classList.toggle("hidden");
  }
}
function redClicked() {
  contentContainer.classList.toggle("red-clicked");
  if (getWindowSetting() == "full") {
    document.querySelector(".hidden-btns").classList.toggle("hidden");
    document.querySelector(".hidden-btns").classList.toggle("full-window");
    document.querySelector(".yellow-window").classList.toggle("hidden");
  } else {
    document.querySelector(".hidden-btns").classList.toggle("hidden");
    document.querySelector(".yellow-window").classList.toggle("hidden");
  }
}
function greenClicked() {
  document
    .querySelector(".content-container")
    .classList.toggle("green-clicked");
  if (getWindowSetting() == "full") {
    localStorage.setItem("windowSetting", "half");
  } else {
    localStorage.setItem("windowSetting", "full");
  }
}

function hamburgerClicked() {
  document.querySelector(".main-navbar").classList.toggle("show-menu");
}
