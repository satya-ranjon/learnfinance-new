// Slider debugging script
// This is a fixed version that prevents multiple active dots

// Global variable to track if we've already initialized this script
window.sliderDebugInitialized = window.sliderDebugInitialized || false;

document.addEventListener("DOMContentLoaded", function () {
  // Only run once to prevent duplicate event handlers
  if (window.sliderDebugInitialized) return;
  window.sliderDebugInitialized = true;

  // Remove any existing automatic slide timers
  if (window.sliderInterval) {
    clearInterval(window.sliderInterval);
  }

  // Wait a bit to make sure everything is loaded
  setTimeout(function () {
    console.log("Initializing slider with debug mode...");

    // Get slider elements
    const sliderItems = document.querySelectorAll(".slider-box .slider_item");
    const sliderDots = document.querySelectorAll(".slider-box .dot");

    if (sliderItems.length === 0 || sliderDots.length === 0) {
      console.error("Slider elements not found!");
      return;
    } // Clean up - remove all existing event listeners on dots
    sliderDots.forEach((dot) => {
      const newDot = dot.cloneNode(true);
      dot.parentNode.replaceChild(newDot, dot);
    });

    // Get fresh references after DOM changes
    const freshDots = document.querySelectorAll(".slider-box .dot");

    // Manual slide change function with strict single-active control
    function changeSlide(index) {
      console.log(`Changing to slide ${index}`);

      // 1. First remove ALL active classes and styles from elements
      sliderItems.forEach((slide) => {
        slide.classList.remove("active");
      });

      document.querySelectorAll(".slider-box .dot").forEach((d) => {
        d.classList.remove("active");
        d.style.backgroundColor = "";
        d.style.boxShadow = "";
      });

      // 2. Only then add active class to the current elements
      if (sliderItems[index]) {
        sliderItems[index].classList.add("active");
      }

      if (freshDots[index]) {
        freshDots[index].classList.add("active");
        freshDots[index].style.backgroundColor = "#58eb89";
        freshDots[index].style.boxShadow = "0 0 5px #58eb89";
      }
    }

    // Add click event listeners to dots
    freshDots.forEach((dot, index) => {
      dot.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Stop any automatic sliding when user interacts
        if (window.sliderInterval) {
          clearInterval(window.sliderInterval);
        } // Execute the change
        changeSlide(index);
        console.log(`Dot ${index} clicked`);
      });
    });

    // Initial setup - ensure only one active slide/dot
    function initializeSlider() {
      // Find which slide is currently active
      let activeIndex = 0;
      sliderItems.forEach((slide, idx) => {
        if (slide.classList.contains("active")) {
          activeIndex = idx;
        }
      });

      // Apply the change to ensure only one is active
      changeSlide(activeIndex);
      console.log(`Initialized slider with active slide: ${activeIndex}`);

      // Start automatic sliding
      window.sliderInterval = setInterval(() => {
        let nextSlide = (activeIndex + 1) % sliderItems.length;
        changeSlide(nextSlide);
        activeIndex = nextSlide;
      }, 5000);
    }

    // Start the slider
    initializeSlider();
  }, 1000); // Increased delay to ensure everything else is loaded
});
