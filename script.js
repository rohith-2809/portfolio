// Wait for the DOM to fully load
window.addEventListener("DOMContentLoaded", () => {
  // GSAP Timeline for text reveal animation
  const revealTimeline = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out" },
  });

  // Reveal the "Hi, I'm" and "Rohith" titles with a staggered effect
  revealTimeline
    .to(".wrapper.title", { opacity: 1, y: 0, stagger: 0.5 })
    .to(".post", { opacity: 1, y: 0 }, "-=0.5"); // Reveals .post element slightly earlier

  // Parallax effect for the entire hero section
  gsap.to(".hero-section", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

const handburgerMenu = document.querySelector(".hangburger-menu");
const navList = document.querySelector(".nav-list");

handburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// hero animation completed
// Ensure that the DOM is loaded before animations are initialized
window.addEventListener("DOMContentLoaded", () => {
  // Timeline for text reveal
  const revealTimeline = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out" },
  });

  revealTimeline
    .to(".title", { opacity: 1, y: 0, stagger: 0.5 }) // Text reveal with stagger effect
    .to(".post", { opacity: 1, y: 0 }, "-=0.5"); // Post text appears slightly earlier

  // Parallax effect on scroll
  gsap.to(".hero-section", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

// Initialize Lenis with a specific duration // scrolling animation
const lenis = new Lenis({
  duration: 3, // Duration for the scroll animation
});

// Create the animation frame loop
function raf(time) {
  lenis.raf(time); // Call the Lenis raf method
  requestAnimationFrame(raf); // Recursively call the raf function
}

// Start the animation frame loop
requestAnimationFrame(raf);

// gsap for horizontal scrolling
let horizontalSelection = document.querySelector(".horizontal");

gsap.to(horizontalSelection, {
  x: () => horizontalSelection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: horizontalSelection, // Correct reference to the trigger element
    start: "center center",
    end: "+=2000px top",
    scrub: 2,
    pin: "#horizontal-scroll",
    invalidateOnRefresh: true, // Correct spelling
  },
});

// Ensure you have GSAP and ScrollTrigger loaded in your HTML before this script
gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray(".text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%", // Expanding the background size
    ease: "none", // No easing for a smooth transition
    scrollTrigger: {
      trigger: text, // Each text element serves as its own trigger
      start: "center 80%",
      end: "center 30%",
    },
  });
});

const parallax = document.querySelector(".parallax");

gsap.to(parallax, {
  backgroundPosition: "0px 100%",
  ease: "none",
  duration: 4,
  ScrollTrigger: {
    trigger: "parallax",
    start: "-60% top",
    end: "bottom bottom",
    scrub: true,
  },
});

// Wait for the DOM to fully load
window.addEventListener("DOMContentLoaded", () => {
  // GSAP Timeline for text reveal animation
  const revealTimeline = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out" },
  });

  // Reveal the heading and paragraph with a staggered effect
  revealTimeline
    .from(".heading__title text", { opacity: 0, y: -50 }) // Animate the heading
    .from(".about-description", { opacity: 0, y: 20 }, "-=0.5"); // Animate the paragraph, starting slightly earlier
});
