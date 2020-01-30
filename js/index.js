var openNav = document.querySelector(".open-nav");
var nav = document.querySelector(".header__nav--content");
var open = false;

openNav.addEventListener("click", () => {
  if (open === false) {
    open = true;
    nav.style.left = "0";
    openNav.textContent = "close";
  } else if (open === true) {
    open = false;
    nav.style.left = "-70%";
    openNav.textContent = "open";
  }
});
