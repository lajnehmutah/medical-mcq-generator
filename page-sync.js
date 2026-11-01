/* ==========================================================================
   Page <-> question sync (loaded after layout-tools.js)
   Whatever page the PDF window shows, the question window scrolls to the
   questions of that page and marks them. Choosing a block does the reverse.
   ========================================================================== */
(function () {
  "use strict";

  var box = document.getElementById("questionBlocksContainer");
  if (!box) return;

  var lastSyncedPage = null;
  var lockUntil = 0;
  var timer = null;

  function pageOfBlock(block) {
    var badge = block.querySelector(".btn-jump-page");
    var m = badge && /Page\s+(\d+)/.exec(badge.textContent || "");
    return m ? parseInt(m[1], 10) : null;
  }

  function blocksOfPage(page) {
    return Array.prototype.filter.call(box.querySelectorAll(".question-block"), function (b) {
      return pageOfBlock(b) === page;
    });
  }

  function highlight(page) {
    Array.prototype.forEach.call(box.querySelectorAll(".question-block.on-page"), function (b) {
      b.classList.remove("on-page");
    });
    if (page == null) return;
    blocksOfPage(page).forEach(function (b) { b.classList.add("on-page"); });
  }

  function syncEditor(page) {
    highlight(page);
    var blocks = blocksOfPage(page);
    if (blocks.length) {
      blocks[0].scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (page === 1) {
      var area = document.querySelector(".editor-scroll-area");
      if (area) area.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function schedule() {
    if (typeof activePageIndex === "undefined") return;
    var page = activePageIndex;
    if (page === lastSyncedPage) return;
    if (Date.now() < lockUntil) return; // the user just picked a block; do not move it away
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (activePageIndex !== page || Date.now() < lockUntil) return;
      lastSyncedPage = page;
      syncEditor(page);
    }, 120);
  }

  // Every page change (scrolling, Prev/Next, dropdown, chips, Flip View) ends up here.
  if (typeof window.updateNavigationControls === "function") {
    var origNav = window.updateNavigationControls;
    window.updateNavigationControls = function () {
      var r = origNav.apply(this, arguments);
      schedule();
      return r;
    };
  }

  // This script now does the editor scrolling for every mode.
  window.jumpEditorToPage = function () {};

  // Choosing a block: the preview goes to its page, the editor stays where it is.
  function onBlockChosen(e) {
    var block = e.target.closest && e.target.closest(".question-block");
    if (!block) return;
    var page = pageOfBlock(block);
    if (!page) return;
    lastSyncedPage = page;
    lockUntil = Date.now() + 1500;
    clearTimeout(timer);
    highlight(page);
  }
  box.addEventListener("click", onBlockChosen, true);
  box.addEventListener("focusin", onBlockChosen, true);

  // The editor is rebuilt on many edits; keep the page's questions marked.
  new MutationObserver(function () { highlight(lastSyncedPage); }).observe(box, { childList: true });

  setTimeout(schedule, 300);
})();
