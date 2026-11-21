(() => {
  "use strict";

  // Mobile menu toggle.
  const toggle = document.getElementById("menu-toggle");
  const panel = document.getElementById("mobile-menu");
  if (toggle && panel) {
    const setOpen = (open) => {
      panel.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(panel.classList.contains("hidden")));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  // Home hero: while the hero is pinned, the photo zooms out and the title rises.
  const heroWrap = document.getElementById("hero-wrap");
  const heroImg = document.getElementById("hero-img");
  const heroContent = document.getElementById("hero-content");
  const heroCue = document.getElementById("hero-cue");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (heroWrap && heroImg && heroContent && !reduceMotion) {
    const START_SCALE = 1.35;
    const END_SCALE = 1;
    const RISE = 0.22; // title moves up by 22% of the viewport height

    const updateHero = () => {
      const travel = heroWrap.offsetHeight - window.innerHeight;
      const raw = travel > 0 ? -heroWrap.getBoundingClientRect().top / travel : 0;
      const p = Math.min(Math.max(raw, 0), 1);

      heroImg.style.transform = `scale(${START_SCALE - (START_SCALE - END_SCALE) * p})`;
      heroContent.style.transform = `translateY(${-p * window.innerHeight * RISE}px)`;
      if (heroCue) heroCue.style.opacity = String(Math.max(0, 1 - p * 2));
    };

    let frame = 0;
    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updateHero();
      });
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateHero();
  }

  // Trophy filter: shows rows whose data-category matches the chosen button.
  const buttons = Array.from(document.querySelectorAll("[data-filter]"));
  const rows = Array.from(document.querySelectorAll("[data-category]"));
  if (buttons.length && rows.length) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        buttons.forEach((b) => {
          const on = b === button;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", String(on));
        });

        rows.forEach((row) => {
          const show = filter === "all" || row.dataset.category === filter;
          row.classList.toggle("hidden", !show);
        });
      });
    });
  }
})();
