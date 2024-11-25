document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Navbar background change on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#003049"; //"rgba(26, 35, 126, 1)";
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  });

  // Scroll to Top functionality
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Get target ID (removing the '#')
      const target = document.getElementById(targetId);

      if (target) {
        // Get the height of the navbar (adjust if needed)
        const navbarHeight = document.querySelector(".navbar").offsetHeight;

        // Scroll to the target element, adjusting for the navbar height
        window.scrollTo({
          top: target.offsetTop - navbarHeight, // Adjust scroll position to show below navbar
          behavior: "smooth", // Smooth scroll behavior
        });
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add your form submission logic here
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }
});
