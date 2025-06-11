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

// Video list toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const videoListTitles = document.querySelectorAll(".video-list-title");
  const moduleVideos = document.querySelectorAll(".module-videos");

  // Initially hide all module videos except the first one
  moduleVideos.forEach((module, index) => {
    if (index === 0) {
      module.style.display = "block";
    } else {
      module.style.display = "none";
    }
  });

  // Add click event listeners to video list titles
  videoListTitles.forEach((title, index) => {
    title.addEventListener("click", function () {
      const moduleVideo = this.nextElementSibling;

      // Toggle the clicked module
      if (moduleVideo.style.display === "none") {
        moduleVideo.style.display = "block";
      } else {
        moduleVideo.style.display = "none";
      }

      // Rotate the arrow icon
      const arrow = this.querySelector("svg");
      if (moduleVideo.style.display === "block") {
        arrow.style.transform = "rotate(180deg)";
        arrow.style.transition = "transform 0.3s ease";
      } else {
        arrow.style.transform = "rotate(0deg)";
        arrow.style.transition = "transform 0.3s ease";
      }
    });

    // Set initial arrow rotation for the first module
    if (index === 0) {
      const arrow = title.querySelector("svg");
      arrow.style.transform = "rotate(180deg)";
      arrow.style.transition = "transform 0.3s ease";
    }
  });
});
