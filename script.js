const sectionHeroEl = document.querySelector("#section-hero");
const sections = document.querySelectorAll("section, footer");
const header = document.querySelector("#header");
const navLinks = document.querySelector(".nav-links");

// Sticky navigation
const sticky = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
      header.classList.remove("nav-open");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    threshold: 0,
    root: null,
    rootMargin: "-105px",
  }
);
sticky.observe(sectionHeroEl);

// Scrolling

const options = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  for (let entry of entries) {
    entry.target.classList.toggle("show", entry.isIntersecting);
  }
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

const navBtn = document.querySelector(".btn-mobile-nav");

navBtn.addEventListener("click", (e) => {
  if (!navBtn) return;
  header.classList.toggle("nav-open");
  navLinks.addEventListener("click", (e) => {
    header.classList.remove("nav-open");
  });
});
