/* ==========================================================================
   Layout tools (loaded after app.js)
   1. Clicking / focusing a question block jumps the preview to its page
   2. Draggable splitter between the question blocks and the PDF preview
   3. More zoom steps + "Fit" button (iPad friendly)
   ========================================================================== */
(function () {
  "use strict";

  var LS_KEY = "mcqLayoutV1";
  var $ = function (id) { return document.getElementById(id); };

  function loadPrefs() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
  }
  function savePrefs(patch) {
    try {
      var p = loadPrefs();
      Object.keys(patch).forEach(function (k) {
        if (patch[k] === null) delete p[k]; else p[k] = patch[k];
      });
      localStorage.setItem(LS_KEY, JSON.stringify(p));
    } catch (e) { /* storage unavailable */ }
  }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  /* ------------------------------------------------------------------
     1. Block click -> preview jumps to the page holding that question
     ------------------------------------------------------------------ */
  var suppressEditorSync = false;
  var lastBlockId = null;

  // In Flip View the app scrolls the editor to the page's block; while we are
  // the ones who triggered the jump, skip that so the editor does not move.
  if (typeof window.jumpEditorToPage === "function") {
    var origJump = window.jumpEditorToPage;
    window.jumpEditorToPage = function () {
      if (suppressEditorSync) return undefined;
      return origJump.apply(this, arguments);
    };
  }

  function pageOfBlock(block) {
    var badge = block.querySelector(".btn-jump-page");
    var m = badge && /Page\s+(\d+)/.exec(badge.textContent || "");
    return m ? parseInt(m[1], 10) : null;
  }

  function markSelected() {
    document.querySelectorAll("#questionBlocksContainer .question-block.selected-block")
      .forEach(function (el) { el.classList.remove("selected-block"); });
    if (lastBlockId) {
      var el = document.getElementById(lastBlockId);
      if (el) el.classList.add("selected-block");
    }
  }

  function goToBlockPage(block, onlyIfChanged) {
    if (!block) return;
    if (onlyIfChanged && block.id === lastBlockId) return;
    lastBlockId = block.id;
    markSelected();
    var page = pageOfBlock(block);
    if (!page || typeof scrollToPage !== "function") return;
    suppressEditorSync = true;
    try { scrollToPage(page); } finally { suppressEditorSync = false; }
  }

  var blocksBox = $("questionBlocksContainer");
  if (blocksBox) {
    blocksBox.addEventListener("click", function (e) {
      goToBlockPage(e.target.closest(".question-block"), false);
    });
    blocksBox.addEventListener("focusin", function (e) {
      goToBlockPage(e.target.closest(".question-block"), true);
    });
    // The editor is rebuilt on many edits; keep the highlight on the chosen block.
    new MutationObserver(markSelected).observe(blocksBox, { childList: true });
  }

  /* ------------------------------------------------------------------
     2. Draggable splitter (mouse, pen and touch)
     ------------------------------------------------------------------ */
  var container = document.querySelector(".app-container");
  var editor = document.querySelector(".editor-pane");
  var preview = document.querySelector(".preview-pane");
  var fitMode = !!loadPrefs().fit;

  function isStacked() { return window.matchMedia("(max-width: 900px)").matches; }

  if (container && editor && preview) {
    var bar = document.createElement("div");
    bar.className = "pane-resizer";
    bar.setAttribute("role", "separator");
    bar.setAttribute("aria-label", "Drag to resize the question blocks and the PDF window");
    bar.title = "Drag to resize \u2022 double-click to reset";
    bar.innerHTML = '<span class="pane-resizer-grip"></span>';
    container.insertBefore(bar, preview);

    var applySizes = function () {
      var p = loadPrefs();
      var rect = container.getBoundingClientRect();
      var thick = isStacked() ? bar.offsetHeight : bar.offsetWidth;
      editor.style.width = editor.style.height = "";
      editor.style.minWidth = editor.style.maxWidth = editor.style.flex = "";
      if (isStacked()) {
        if (p.h != null) {
          editor.style.height = clamp(p.h, 120, Math.max(160, rect.height - 120 - thick)) + "px";
          editor.style.flex = "0 0 auto";
        }
      } else if (p.w != null) {
        editor.style.width = clamp(p.w, 220, Math.max(260, rect.width - 260 - thick)) + "px";
        editor.style.minWidth = "220px";
        editor.style.maxWidth = "none";
        editor.style.flex = "0 0 auto";
      }
    };

    var dragging = false;

    bar.addEventListener("pointerdown", function (e) {
      dragging = true;
      try { bar.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      document.body.classList.add("is-resizing");
      e.preventDefault();
    });

    bar.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var rect = container.getBoundingClientRect();
      if (isStacked()) {
        var h = clamp(e.clientY - rect.top - bar.offsetHeight / 2, 120, rect.height - 120 - bar.offsetHeight);
        savePrefs({ h: Math.round(h) });
      } else {
        var w = clamp(e.clientX - rect.left - bar.offsetWidth / 2, 220, rect.width - 260 - bar.offsetWidth);
        savePrefs({ w: Math.round(w) });
      }
      applySizes();
    });

    var endDrag = function () {
      if (!dragging) return;
      dragging = false;
      document.body.classList.remove("is-resizing");
      if (fitMode) fitToWidth();
    };
    bar.addEventListener("pointerup", endDrag);
    bar.addEventListener("pointercancel", endDrag);

    bar.addEventListener("dblclick", function () {
      savePrefs({ w: null, h: null });
      applySizes();
      if (fitMode) fitToWidth();
    });

    window.addEventListener("resize", function () {
      applySizes();
      if (fitMode) fitToWidth();
    });
    window.addEventListener("orientationchange", function () {
      setTimeout(function () {
        applySizes();
        if (fitMode) fitToWidth();
      }, 250);
    });

    applySizes();
  }

  /* ------------------------------------------------------------------
     3. Zoom: more steps + Fit width
     ------------------------------------------------------------------ */
  var zoomSelect = $("zoomSelect");

  function setZoomValue(value, label) {
    if (!zoomSelect) return;
    var opt = Array.prototype.find.call(zoomSelect.options, function (o) { return o.value === value; });
    if (!opt) {
      opt = document.createElement("option");
      opt.value = value;
      opt.dataset.custom = "1";
      zoomSelect.appendChild(opt);
    }
    if (label) opt.textContent = label;
    zoomSelect.value = value;
    zoomSelect.dispatchEvent(new Event("change")); // app.js applies the zoom
  }

  function fitToWidth() {
    var vp = $("previewViewport");
    if (!vp || !zoomSelect) return;
    var z = clamp((vp.clientWidth - 40) / 816, 0.3, 1.5);
    z = Math.floor(z * 100) / 100;
    Array.prototype.slice.call(zoomSelect.options).forEach(function (o) {
      if (o.dataset.custom) o.remove();
    });
    setZoomValue(String(z), "Fit " + Math.round(z * 100) + "%");
  }

  if (zoomSelect) {
    var steps = [["0.5", "50%"], ["0.65", "65%"], ["0.75", "75%"], ["0.85", "85%"],
                 ["1.0", "100%"], ["1.15", "115%"], ["1.25", "125%"], ["1.5", "150%"]];
    zoomSelect.innerHTML = "";
    steps.forEach(function (s) {
      var o = document.createElement("option");
      o.value = s[0];
      o.textContent = s[1];
      zoomSelect.appendChild(o);
    });
    zoomSelect.value = "1.0";

    // A manual choice from the list switches Fit mode off.
    zoomSelect.addEventListener("change", function (e) {
      if (e.isTrusted) {
        fitMode = false;
        savePrefs({ fit: null, manualZoom: 1 });
      }
    });

    var fitBtn = document.createElement("button");
    fitBtn.type = "button";
    fitBtn.id = "btnFitWidth";
    fitBtn.className = "btn btn-outline btn-sm";
    fitBtn.title = "Fit the page to the PDF window width";
    fitBtn.textContent = "\u2194 Fit";
    fitBtn.addEventListener("click", function () {
      fitMode = true;
      savePrefs({ fit: 1, manualZoom: null });
      fitToWidth();
    });
    zoomSelect.parentNode.insertBefore(fitBtn, zoomSelect.previousElementSibling || zoomSelect);

    // Narrow screens (iPad portrait / split view): start fitted so the whole page is visible.
    var vp0 = $("previewViewport");
    if (fitMode || (vp0 && vp0.clientWidth > 0 && vp0.clientWidth < 856 && !loadPrefs().manualZoom)) {
      fitMode = true;
      setTimeout(fitToWidth, 0);
    }
  }
})();
