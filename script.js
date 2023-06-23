// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const photo = document.querySelector(".photo");
const about = document.querySelector(".about");
const home = document.querySelector(".home");
const nav = document.querySelector(".navigation");
const ivan = document.createElement("p");

// Mobile navigation
// ////////////////////////////////
btnNavEl.addEventListener("click", function () {
  ivan.innerText = "Ivan Mušković";
  ivan.classList.add("name-nav");
  nav.insertAdjacentElement("afterbegin", ivan);
  headerEl.classList.toggle("nav-open");
  if (!headerEl.classList.contains("nav-open")) {
    ivan.remove();
  }
});

// Close mobile navigation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    headerEl.classList.toggle("nav-open");
  });
});

// / MENU FADE

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav-item")) {
    const link = e.target;
    const siblings = link.closest(".navigation").querySelectorAll(".nav-item");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  headerEl.classList.add("background");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

console.log(sectionObserver);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Text Reveal

// Reveal Text
const allText = document.querySelectorAll(".text");

console.log(allText);

const revealText = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("text--hidden");
  entry.target.classList.add("roll");
  observer.unobserve(entry.target);
};

const textObserver = new IntersectionObserver(revealText, {
  root: null,
  threshold: 1,
});

console.log(textObserver);

allText.forEach(function (text) {
  textObserver.observe(text);
  text.classList.add("text--hidden");
});

console.log(window.innerWidth);
