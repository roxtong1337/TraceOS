(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- menu seluler (kali: nav.show-menu) ---------- */
  var nav = document.querySelector("header nav");
  var menuButton = nav && nav.querySelector("button");
  if (nav && menuButton) {
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("show-menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("#navigation a")) nav.classList.remove("show-menu");
    });
  }

  /* ---------- tahun berjalan ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- animasi reveal saat di-scroll ---------- */
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

  /* ---------- video: berputar saat masuk viewport ---------- */
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

    var togglePlay = function () {
      if (video.paused) { video.controls = true; play(); } else { pause(); }
    };
    if (vbutton) vbutton.addEventListener("click", togglePlay);
    frame.addEventListener("click", function (e) { if (e.target === video) togglePlay(); });

    if ("IntersectionObserver" in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { if (!prefersReduced) play(); }
          else { pause(); }
        });
      }, { threshold: 0.55 });
      vio.observe(frame);
    }
  }

  /* ---------- carousel tools: geser otomatis bila meluber ---------- */
  var carousel = document.getElementById("carousel");
  if (carousel && !prefersReduced) {
    var inner = carousel.firstElementChild;
    var pos = 0;
    setInterval(function () {
      if (inner.scrollWidth <= carousel.clientWidth) return;
      pos = pos ? 0 : inner.scrollWidth - carousel.clientWidth;
      carousel.scrollTo({ left: pos, behavior: "smooth" });
    }, 4200);
  }
})();
