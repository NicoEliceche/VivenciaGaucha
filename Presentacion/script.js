const slides = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".chapter-nav a")];
const topbar = document.querySelector(".topbar");
const progress = document.querySelector(".mobile-progress span");
const darkSlides = new Set(["portada", "experiencia", "contenido", "comercial", "cierre"]);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const chapterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });

      topbar.classList.toggle("is-over-dark", darkSlides.has(entry.target.id));
    });
  },
  { threshold: 0.55 }
);

slides.forEach((slide) => chapterObserver.observe(slide));

const updateProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

document.querySelector("[data-print]").addEventListener("click", () => window.print());

document.addEventListener("keydown", (event) => {
  if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(event.key)) return;

  event.preventDefault();
  const currentIndex = slides.reduce((closest, slide, index) => {
    const distance = Math.abs(slide.getBoundingClientRect().top);
    return distance < closest.distance ? { index, distance } : closest;
  }, { index: 0, distance: Infinity }).index;

  const direction = ["ArrowDown", "PageDown"].includes(event.key) ? 1 : -1;
  const nextIndex = Math.min(slides.length - 1, Math.max(0, currentIndex + direction));
  slides[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
});
