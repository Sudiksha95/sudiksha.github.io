// updating year on the page automatically in footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// navigation
const btnNav = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling and close navigation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      headerEl.classList.toggle("nav-open");
    }

    // if (link.classList.containes("main-nav-link"))
    // headerEl.classList.toggle("nav-open");
  });
});

//sticky navigation for resume page
const sectionResumeEl = document.querySelector(".section-resume");
const obsr = new IntersectionObserver(
  function (enteries) {
    const ents = enteries[0];
    if (!ents.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ents.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-60px",
  }
);
obsr.observe(sectionResumeEl);
