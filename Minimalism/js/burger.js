const burgerBtn = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__btn");
const burgerLinks = document.querySelectorAll(".burger__link");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});
burgerClose.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

burgerLinks.forEach((element) => {
  element.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
  });
});
