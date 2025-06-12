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

// Login Slider functionality - Base implementation
// Note: This is overridden by slider-debug.js when that script is included
document.addEventListener("DOMContentLoaded", function () {
  // Check if debug script is loaded - if so, don't initialize this one
  if (window.sliderDebugInitialized) {
    console.log("Debug slider active, skipping main slider initialization");
    return;
  }

  // Make sure we only run this on pages with the slider
  if (document.querySelector(".slider-box")) {
    const sliderDots = document.querySelectorAll(".slider-box .dot");
    const sliderItems = document.querySelectorAll(".slider-box .slider_item");
    let currentSlide = 0;
    let slideInterval;

    // Function to change slide
    function changeSlide(index) {
      // First, remove all active classes and styles
      document.querySelectorAll(".slider-box .slider_item").forEach((slide) => {
        slide.classList.remove("active");
      });

      document.querySelectorAll(".slider-box .dot").forEach((dot) => {
        dot.classList.remove("active");
        dot.style.backgroundColor = "";
        dot.style.boxShadow = "";
      });

      // Then add active class to current slide and dot
      if (sliderItems[index]) {
        sliderItems[index].classList.add("active");
      }

      if (sliderDots[index]) {
        sliderDots[index].classList.add("active");
        sliderDots[index].style.backgroundColor = "#58eb89";
        sliderDots[index].style.boxShadow = "0 0 5px #58eb89";
      }

      currentSlide = index;
      console.log("Slide changed to:", index); // Debug
    }

    // Initialize automatic slide change
    function startSlideTimer() {
      // Clear any existing interval first
      if (slideInterval) {
        clearInterval(slideInterval);
      }

      slideInterval = setInterval(() => {
        let nextSlide = (currentSlide + 1) % sliderItems.length;
        changeSlide(nextSlide);
      }, 5000); // Change slide every 5 seconds
    } // Clean up existing listeners by cloning and replacing dots
    sliderDots.forEach((dot, index) => {
      const newDot = dot.cloneNode(true);
      dot.parentNode.replaceChild(newDot, dot);
    });

    // Get fresh references after DOM changes
    const freshDots = document.querySelectorAll(".slider-box .dot");

    // Add click event listeners to dots
    freshDots.forEach((dot, index) => {
      dot.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        clearInterval(slideInterval); // Reset timer when manually changing slide
        changeSlide(index);
        startSlideTimer(); // Restart timer after manual change
      });
    });

    // Start automatic slide change
    if (sliderItems.length > 0) {
      // Force only one active slide at start
      document
        .querySelectorAll(".slider-box .slider_item.active")
        .forEach((slide, idx) => {
          if (idx > 0) slide.classList.remove("active");
        });

      // Force only one active dot at start
      document
        .querySelectorAll(".slider-box .dot.active")
        .forEach((dot, idx) => {
          if (idx > 0) {
            dot.classList.remove("active");
            dot.style.backgroundColor = "";
            dot.style.boxShadow = "";
          }
        });

      // Set initial slide and start timer
      changeSlide(0);
      startSlideTimer();
    }

    console.log("Main slider initialized with", sliderItems.length, "slides");
  }
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
