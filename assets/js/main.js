(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- menu seluler ---------- */
  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("navigation");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- tahun berjalan ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- reveal saat di-scroll ---------- */
  var revealTargets = document.querySelectorAll(
    "#traceos-highlights li, #carousel a, .team-card, .download-card, #spec-wrap > *, #traceos-everywhere > div > div, #desktops-preview > div"
  );
  revealTargets.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.transitionDelay = Math.min(i % 8, 5) * 60 + "ms";
  });

  if ("IntersectionObserver" in window && !prefersReduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- video: putar otomatis saat masuk viewport ---------- */
  var video = document.getElementById("demo-video");
  var frame = document.getElementById("video-frame");
  var vbutton = document.getElementById("video-toggle");

  if (video && frame) {
    var play = function () {
      var p = video.play();
      if (p && typeof p.then === "function") {
        p.then(function () { frame.classList.add("playing"); }).catch(function () {});
      } else {
        frame.classList.add("playing");
      }
    };
    var pause = function () {
      video.pause();
      frame.classList.remove("playing");
    };

    video.addEventListener("play", function () { frame.classList.add("playing"); });
    video.addEventListener("pause", function () { frame.classList.remove("playing"); });

    if (vbutton) {
      vbutton.addEventListener("click", function () {
        if (video.paused) { video.controls = true; play(); } else { pause(); }
      });
    }
    frame.addEventListener("click", function (e) {
      if (e.target === video) {
        if (video.paused) { video.controls = true; play(); } else { pause(); }
      }
    });

    if ("IntersectionObserver" in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (!prefersReduced) play();
          } else {
            pause();
          }
        });
      }, { threshold: 0.55 });
      vio.observe(frame);
    }
  }

  /* ---------- carousel tools: geser otomatis saat banyak ---------- */
  var carousel = document.getElementById("carousel");
  if (carousel && !prefersReduced) {
    var inner = carousel.firstElementChild;
    var shift = 0;
    setInterval(function () {
      if (inner.scrollWidth <= carousel.clientWidth) return;
      shift = (shift + 1) % 2;
      carousel.scrollTo({ left: shift * (inner.scrollWidth - carousel.clientWidth), behavior: "smooth" });
    }, 4200);
  }
})();
