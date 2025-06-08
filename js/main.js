const mobileMenu = document.querySelector(".mobile-menu");
const openMobileMenu = document.querySelector("#mobile-menu-open");
const closeMobileMenu = document.querySelector("#mobile-menu-close");

openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});
closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});
