// Marks that JS is running, so the fade-in animation only applies when it can finish.
document.documentElement.classList.add("js");

// Typing effect in the hero. Edit these phrases to describe yourself.
// Each one completes the sentence "I ..."
const phrases = [
  "study engineering at Imperial.",
  "run my own tutoring business.",
  "am joining J.P. Morgan in 2027.",
  "study probability on the side.",
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const typedEl = document.getElementById("typed");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = phrases[phraseIndex];
  typedEl.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 70);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1800);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(type, 35);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  }
}
// With reduced motion on, the first phrase just stays put.
if (!reduceMotion) type();

// Fade sections in as they scroll into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Nav border once you scroll
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();
