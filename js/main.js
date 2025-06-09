const mobileMenu = document.querySelector(".mobile-menu");
const openMobileMenu = document.querySelector("#mobile-menu-open");
const closeMobileMenu = document.querySelector("#mobile-menu-close");

openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});
closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

// Checklist functionality
document.addEventListener("DOMContentLoaded", function () {
  const checklistItems = document.querySelectorAll(".checklist-item");

  checklistItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("checked");
    });
  });
});
