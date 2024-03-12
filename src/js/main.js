let leftBtn = document.querySelector(".controllers button#left");
let rightBtn = document.querySelector(".controllers button#right");
let slidesContainer = document.querySelector(".slides-container");
let navbarCollapseBtn = document.getElementById("navbar-collapse-btn");
let list = document.querySelector(".links");
let newsLetterForm = document.forms[0];
let availableForClick = true;
let amountOfScroll = 350;

leftBtn.addEventListener("click", handleGoToLeft);
rightBtn.addEventListener("click", handleGoToRight);
navbarCollapseBtn.addEventListener("click", handleOpenMenu);
document.body.addEventListener("click", handleCloseMenu);
window.addEventListener("resize", handleResizeButtons);
window.addEventListener("load", handleResizeButtons);
newsLetterForm.addEventListener("submit", preventFormSubmit);

function handleGoToLeft() {
  if (!availableForClick) return;
  availableForClick = false;

  if (slidesContainer.scrollLeft === 0) {
    const maxScrollLeft =
      slidesContainer.scrollWidth - slidesContainer.clientWidth;
    slidesContainer.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
  } else {
    slidesContainer.scrollBy({ left: -amountOfScroll, behavior: "smooth" });
  }

  setTimeout(() => {
    availableForClick = true;
  }, 500);
}

function handleGoToRight() {
  if (!availableForClick) return;
  availableForClick = false;

  const maxScrollLeft =
    slidesContainer.scrollWidth - slidesContainer.clientWidth;

  if (slidesContainer.scrollLeft < maxScrollLeft) {
    slidesContainer.scrollBy({ left: amountOfScroll, behavior: "smooth" });
  } else {
    slidesContainer.scrollTo({ left: 0, behavior: "smooth" });
  }

  setTimeout(() => {
    availableForClick = true;
  }, 500);
}

function preventFormSubmit(e) {
  e.preventDefault();
}

function handleOpenMenu() {
  list.classList.add("show");
  setTimeout(() => {
    document.body.classList.add("li-av");
  }, 500);
}

function handleCloseMenu(e) {
  if (!document.body.classList.contains("li-av")) return;
  let target = e.target;
  let elName = target.nodeName.toLowerCase();
  if (!target.classList.contains("links")) {
    if (list.querySelector(elName)) return;
    list.classList.remove("show");
    document.body.classList.remove("li-av");
  }
}

function handleResizeButtons(e) {
  let windowWidth = e.currentTarget.innerWidth;
  let buttons = Array.from(
    document.querySelectorAll(".hero .button-container button")
  );
  if (windowWidth <= 575) {
    buttons.push(document.querySelector(".blog button.btn--large"));
    buttons.forEach(function (btn) {
      if (btn.classList.contains("btn--large")) {
        btn.classList.replace("btn--large", "btn");
      }
    });
  } else {
    buttons.push(document.querySelector(".blog button.btn"));
    buttons.forEach(function (button) {
      button?.classList?.replace("btn", "btn--large");
    });
  }
}
