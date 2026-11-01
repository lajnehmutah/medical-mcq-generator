/* ==========================================================================
   Block sync + unified question editor (loaded after app.js / layout-tools.js)
   1. PDF page <-> question blocks stay in sync in both directions
   2. Multiple-choice blocks use ONE free text box (question + choices)
      and an answer row A-F
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var blocksBox = $("questionBlocksContainer");
  var editorArea = $("questionsTabContent");
  if (!blocksBox) return;

  var previewLockUntil = 0; // while locked, the PDF window does not move the question list
  var editorLockUntil = 0;  // while locked, the question list does not move the PDF window
  function now() { return Date.now(); }
  function lock(which, ms) {
    var t = now() + ms;
    if (which === "preview") previewLockUntil = Math.max(previewLockUntil, t);
    else editorLockUntil = Math.max(editorLockUntil, t);
  }

  function pageOfBlock(block) {
    var badge = block.querySelector(".btn-jump-page");
    var m = badge && /Page\s+(\d+)/.exec(badge.textContent || "");
    return m ? parseInt(m[1], 10) : null;
  }
  function currentPage() {
    return (typeof activePageIndex === "number") ? activePageIndex : 1;
  }

  /* ------------------------------------------------------------------
     1. Two-way sync
     ------------------------------------------------------------------ */
  function markPageBlocks() {
    var p = currentPage();
    blocksBox.querySelectorAll(".question-block").forEach(function (b) {
      b.classList.toggle("on-page", pageOfBlock(b) === p);
    });
  }

  // PDF window -> question list: show the questions that sit on the visible page
  function syncEditorToPage(p) {
    markPageBlocks();
    if (!editorArea || editorArea.offsetParent === null) return; // tab hidden
    var first = null;
    blocksBox.querySelectorAll(".question-block").forEach(function (b) {
      if (!first && pageOfBlock(b) === p) first = b;
    });
    if (!first) return;
    var top = first.getBoundingClientRect().top - editorArea.getBoundingClientRect().top;
    if (top >= -8 && top <= 120) return; // already at the top of the list
    lock("editor", 1200);
    editorArea.scrollTo({ top: Math.max(0, editorArea.scrollTop + top - 12), behavior: "smooth" });
  }

  if (typeof window.updateNavigationControls === "function") {
    var origNav = window.updateNavigationControls;
    window.updateNavigationControls = function () {
      var r = origNav.apply(this, arguments);
      markPageBlocks();
      if (now() >= previewLockUntil) syncEditorToPage(currentPage());
      return r;
    };
  }

  // The old Flip-View-only jump is replaced by the sync above (works in every mode)
  window.jumpEditorToPage = function () {};

  // Re-drawing the preview / editor must not be mistaken for the user moving
  if (typeof window.renderPreview === "function") {
    var origRP = window.renderPreview;
    window.renderPreview = function () {
      lock("preview", 700);
      try { return origRP.apply(this, arguments); }
      finally { lock("preview", 700); markPageBlocks(); }
    };
  }
  if (typeof window.renderEditor === "function") {
    var origRE = window.renderEditor;
    window.renderEditor = function () {
      lock("editor", 800);
      try { return origRE.apply(this, arguments); }
      finally { lock("editor", 800); markPageBlocks(); }
    };
  }

  // Clicking / focusing a block: the preview follows it, the list must not fight back
  ["click", "focusin"].forEach(function (ev) {
    blocksBox.addEventListener(ev, function () {
      lock("preview", 1400);
      lock("editor", 1400);
    }, true);
  });

  // Question list -> PDF window: scrolling the list moves the PDF to that page
  if (editorArea) {
    var timer;
    editorArea.addEventListener("scroll", function () {
      if (now() < editorLockUntil) return;
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (now() < editorLockUntil) return;
        var areaTop = editorArea.getBoundingClientRect().top;
        var target = null;
        var list = blocksBox.querySelectorAll(".question-block");
        for (var i = 0; i < list.length; i++) {
          if (list[i].getBoundingClientRect().bottom > areaTop + 60) { target = list[i]; break; }
        }
        if (!target) return;
        var page = pageOfBlock(target);
        if (page && page !== currentPage() && typeof scrollToPage === "function") {
          lock("preview", 1500);
          scrollToPage(page);
        }
      }, 120);
    }, { passive: true });
  }

  new MutationObserver(markPageBlocks).observe(blocksBox, { childList: true });

  /* ------------------------------------------------------------------
     2. Unified text box for multiple-choice blocks
     ------------------------------------------------------------------ */
  var CHOICE_RE = /^\s*\(?([a-fA-F])(?:\)\s*(.*)|\.(?:\s+(.*))?)\s*$/;

  function composeText(q) {
    var lines = [];
    if (q.question) lines.push(q.question);
    (q.choices || []).forEach(function (c) { lines.push(c.label + ") " + (c.text || "")); });
    return lines.join("\n");
  }

  function parseUnified(text) {
    var lines = String(text).replace(/\r\n?/g, "\n").split("\n");
    var qLines = [];
    var choices = [];
    lines.forEach(function (line) {
      var m = CHOICE_RE.exec(line);
      if (m) {
        var t = (m[2] !== undefined ? m[2] : (m[3] || ""));
        choices.push({ label: m[1].toLowerCase(), text: t.trim() });
      } else if (choices.length) {
        if (line.trim()) {
          var last = choices[choices.length - 1];
          last.text = (last.text + " " + line.trim()).trim();
        }
      } else {
        qLines.push(line);
      }
    });
    return { question: qLines.join("\n").replace(/\s+$/, ""), choices: choices };
  }

  function transformMcqBlock(card, q) {
    card.classList.add("mcq-unified");

    var oldTa = card.querySelector(".textarea-q");
    if (oldTa) {
      var ta = document.createElement("textarea");
      ta.className = "textarea-q textarea-full";
      ta.rows = 9;
      ta.dir = "auto";
      ta.placeholder = "Type the question and its choices here \u2013 any text.\nPut each choice on its own line: a) ...  b) ...  c) ...";
      ta.value = composeText(q);
      ta.addEventListener("input", function () {
        var r = parseUnified(ta.value);
        q.question = r.question;
        q.choices = r.choices;
        saveData();
        renderPreview();
      });
      oldTa.parentNode.replaceChild(ta, oldTa);
    }

    var label = card.querySelector(".field-label span");
    if (label && /Part 1/.test(label.textContent)) label.textContent = "Question & choices";

    var choicesCol = card.querySelector(".choices-section");
    if (choicesCol) choicesCol.parentNode.removeChild(choicesCol);

    var box = card.querySelector(".answer-side-box");
    if (box) {
      box.innerHTML =
        '<div class="answer-side-box-title"><span>Answer Box</span></div>' +
        '<div class="answer-choices-picker answer-letters"></div>';
      var picker = box.querySelector(".answer-letters");
      "abcdef".split("").forEach(function (L) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "ans-choice-chip" + (String(q.answer || "").toLowerCase() === L ? " active" : "");
        chip.textContent = L.toUpperCase();
        chip.addEventListener("click", function () {
          q.answer = L;
          q.answerPrefix = "Ans: ";
          picker.querySelectorAll(".ans-choice-chip").forEach(function (c) {
            c.classList.toggle("active", c === chip);
          });
          saveData();
          renderPreview();
        });
        picker.appendChild(chip);
      });
    }
  }

  if (typeof window.createQuestionBlockElement === "function") {
    var origCreate = window.createQuestionBlockElement;
    window.createQuestionBlockElement = function (q) {
      var card = origCreate.apply(this, arguments);
      if (q && q.type === "mcq") {
        try { transformMcqBlock(card, q); } catch (e) { console.error("block editor:", e); }
      }
      return card;
    };
  }
})();
