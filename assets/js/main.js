/* TraceOS — minimal progressive enhancement */
(function () {
  "use strict";

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var header = document.getElementById("siteHeader");
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("siteNav");

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 14);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu navigasi");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  var filters = document.querySelectorAll("[data-filter]");
  var tools = document.querySelectorAll(".tool-card[data-category]");
  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      var selected = button.getAttribute("data-filter");
      filters.forEach(function (other) {
        var active = other === button;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", String(active));
      });
      tools.forEach(function (card) {
        card.hidden = selected !== "all" && card.getAttribute("data-category") !== selected;
      });
    });
  });

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var elements = document.querySelectorAll(".reveal");
    document.documentElement.classList.add("js-motion");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px 60px 0px", threshold: 0.06 });
    elements.forEach(function (element) { observer.observe(element); });
  }
})();