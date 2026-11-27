/* Copy buttons, and the Cal.com calendar (loaded when it is near the screen). */
(function () {
  "use strict";
  // Folder this script was loaded from, so sibling scripts load wherever the page is served.
  var here = document.currentScript ? document.currentScript.src.replace(/[^\/]*$/, "") : "assets/";
  document.documentElement.classList.add("js");

  var status = document.getElementById("copy-status");
  var timers = new WeakMap();

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.className = "copy-scratch";
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallbackCopy(text); });
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function flash(btn, ok) {
    var ct = btn.querySelector(".ct");
    ct.textContent = ok ? "Copied" : "Copy failed";
    btn.classList.toggle("copied", ok);
    if (status) { status.textContent = ok ? "Prompt copied" : "Copy failed. Select the text and copy it by hand."; }
    clearTimeout(timers.get(btn));
    timers.set(btn, setTimeout(function () {
      ct.textContent = "Copy";
      btn.classList.remove("copied");
      if (status) { status.textContent = ""; }
    }, 2200));
  }

  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest ? ev.target.closest("button.copy") : null;
    if (!btn) { return; }
    var src = document.getElementById(btn.getAttribute("data-target"));
    if (!src) { return; }
    copyText(src.textContent.trim()).then(function (ok) { flash(btn, ok); });
  });

  var calLoaded = false;
  function loadCal() {
    if (calLoaded) { return; }
    calLoaded = true;
    var s = document.createElement("script");
    s.src = here + "cal-embed.js";
    document.head.appendChild(s);
  }
  var holder = document.getElementById("my-cal-inline");
  if (holder) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); loadCal(); }
      }, { rootMargin: "800px 0px" });
      io.observe(holder);
    } else {
      loadCal();
    }
    window.addEventListener("hashchange", function () { if (location.hash === "#book") { loadCal(); } });
  }
})();
