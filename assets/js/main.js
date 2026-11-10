/* ============================================================
   TraceOS — interaksi halaman
   ============================================================ */
(function () {
  'use strict';

  /* ---------- tahun footer ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- navbar: shadow saat scroll ---------- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- menu mobile ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- reveal on scroll ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll(
    '.section__head, .card, .tool, .member, .dl-card, .about__col, .stat, .notice'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if (reduce || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = Array.prototype.slice.call(el.parentElement.children);
        el.style.transitionDelay = (siblings.indexOf(el) % 4) * 70 + 'ms';
        el.classList.add('is-visible');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- animasi angka statistik ---------- */
  var counters = document.querySelectorAll('.stat__num');
  var runCounter = function (el) {
    var target = parseFloat(el.dataset.count || '0');
    var suffix = el.dataset.suffix || '';
    var dur = 1300, start = null;

    var step = function (ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (reduce || !('IntersectionObserver' in window)) {
    counters.forEach(function (el) {
      el.textContent = (el.dataset.count || '0') + (el.dataset.suffix || '');
    });
  } else {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        co.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---------- efek "mengetik" pada terminal hero ---------- */
  var cmds = document.querySelectorAll('#typeLines .cmd');
  if (cmds.length && !reduce) {
    cmds.forEach(function (el) {
      el.dataset.full = el.dataset.text || el.textContent;
      el.textContent = '';
    });

    var typeOne = function (el, done) {
      var full = el.dataset.full;
      var i = 0;
      (function tick() {
        el.textContent = full.slice(0, ++i);
        if (i < full.length) {
          setTimeout(tick, 42 + Math.random() * 45);
        } else {
          setTimeout(done, 260);
        }
      })();
    };

    var runQueue = function (idx) {
      if (idx >= cmds.length) return;
      typeOne(cmds[idx], function () { runQueue(idx + 1); });
    };

    var started = false;
    var startTyping = function () {
      if (started) return;
      started = true;
      setTimeout(function () { runQueue(0); }, 500);
    };

    if ('IntersectionObserver' in window) {
      var to = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { startTyping(); to.disconnect(); }
      }, { threshold: 0.3 });
      to.observe(document.getElementById('typeLines'));
    } else {
      startTyping();
    }
  }
})();
