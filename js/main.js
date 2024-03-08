let leftBtn = document.querySelector(".controllers button#left");
let rightBtn = document.querySelector(".controllers button#right");
let slidesContainer = document.querySelector(".slides-container");
let newsLetterForm = document.forms[0];
let availableForClick = true;

leftBtn.addEventListener("click", handleGoToLeft);
rightBtn.addEventListener("click", handleGoToRight);

function handleGoToLeft() {
  if (!availableForClick) return;
  availableForClick = false;

  if (slidesContainer.scrollLeft === 0) {
    const maxScrollLeft =
      slidesContainer.scrollWidth - slidesContainer.clientWidth;
    slidesContainer.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
  } else {
    slidesContainer.scrollBy({ left: -341, behavior: "smooth" });
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
    slidesContainer.scrollBy({ left: 341, behavior: "smooth" });
  } else {
    slidesContainer.scrollTo({ left: 0, behavior: "smooth" });
  }

  setTimeout(() => {
    availableForClick = true;
  }, 500);
}

newsLetterForm.addEventListener("submit", preventFormSubmit);

function preventFormSubmit(e) {
  e.preventDefault();
}
