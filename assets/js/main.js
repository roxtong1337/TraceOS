/* TraceOS — minimal progressive enhancement */
(function () {
  "use strict";

  // Clean the optional ChatGPT referral marker from the URL shown in the browser.
  // GitHub Pages itself does not add this parameter. Keep path, other query data
  // and section hashes unchanged, without triggering a reload.
  try {
    var currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get("utm_source") === "chatgpt.com") {
      currentUrl.searchParams.delete("utm_source");
      window.history.replaceState(window.history.state, "", currentUrl.pathname + currentUrl.search + currentUrl.hash);
    }
  } catch (error) {
    // URL cleanup is non-essential; never interrupt navigation.
  }

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

  // Keep content visible by default: no scroll-triggered opacity hiding.
  // This avoids empty-looking sections near the bottom of the viewport.


  // Copy the published checksum without requiring a checksum file download.
  var copyHashButton = document.getElementById("copySha256");
  var shaText = document.getElementById("isoSha256");
  if (copyHashButton && shaText) {
    copyHashButton.addEventListener("click", function () {
      var value = shaText.textContent.trim();
      function feedback(success) {
        copyHashButton.textContent = success ? "Tersalin ✓" : "Pilih hash";
        if (!success) {
          var selection = window.getSelection();
          var range = document.createRange();
          range.selectNodeContents(shaText);
          selection.removeAllRanges();
          selection.addRange(range);
        }
        window.setTimeout(function () { copyHashButton.textContent = "Salin"; }, 2400);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () { feedback(true); })
          .catch(function () { feedback(false); });
      } else {
        feedback(false);
      }
    });
  }

})();