const buttonShowNav = document.querySelector("#button-show-nav");

const headerNav = document.querySelector("#header-nav");
const wrapNav = document.querySelector(".wrap-navbar");
let pointCheck = false;

buttonShowNav.addEventListener("click", () => {
  if (pointCheck) {
    headerNav.classList.remove("show");
    wrapNav.classList.remove("show");
    pointCheck = false;
  } else {
    wrapNav.classList.add("show");
    headerNav.classList.add("show");
    pointCheck = true;
  }
});
