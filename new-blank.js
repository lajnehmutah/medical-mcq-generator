/* ==========================================================================
   New Blank: in-page dialog instead of the browser's confirm() pop-ups
   (those are blocked or hidden in many tablet / phone browsers)
   ========================================================================== */
(function () {
  "use strict";

  var btn = document.getElementById("btnNewBlank");
  if (!btn) return;

  function setup() {
  btn = document.getElementById("btnNewBlank");
  if (!btn) return;

  // Drop the old click handler (it relies on window.confirm) by replacing the button.
  // This runs after app.js has attached its handlers, so they are all removed.
  var fresh = btn.cloneNode(true);
  btn.parentNode.replaceChild(fresh, btn);
  fresh.addEventListener("click", openDialog);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }

  function openDialog() {
    if (document.getElementById("newBlankModal")) return;

    var overlay = document.createElement("div");
    overlay.className = "modal-overlay open";
    overlay.id = "newBlankModal";
    overlay.innerHTML =
      '<div class="modal-card" style="max-width:460px;">' +
        '<div class="modal-header">' +
          '<div class="modal-title">\uD83D\uDCC4 Start a new blank document?</div>' +
          '<button class="icon-btn" type="button" data-nb="cancel" aria-label="Close">\u2715</button>' +
        '</div>' +
        '<div class="modal-body">' +
          '<p style="font-size:14px; color:#475569; line-height:1.5;">' +
            'This deletes <b>all questions</b> and leaves only the cover page and one blank page. ' +
            'Use <b>Export JSON</b> first if you want to keep your work.' +
          '</p>' +
          '<label style="display:flex; align-items:center; gap:10px; margin-top:14px; font-size:14px; color:#334155; cursor:pointer;">' +
            '<input type="checkbox" id="newBlankResetCover" style="width:20px; height:20px;">' +
            '<span>Also reset the cover page text (subject, lecture, topic, corrected by)</span>' +
          '</label>' +
        '</div>' +
        '<div class="modal-footer">' +
          '<button class="btn btn-outline" type="button" data-nb="cancel">Cancel</button>' +
          '<button class="btn btn-primary" type="button" data-nb="ok">Start blank</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    function close() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) { close(); return; }
      var action = e.target.closest && e.target.closest("[data-nb]");
      if (!action) return;
      if (action.getAttribute("data-nb") === "cancel") { close(); return; }

      var resetCover = !!document.getElementById("newBlankResetCover").checked;
      close();
      startBlank(resetCover);
    });
  }

  function startBlank(resetCover) {
    examData.questions = [];

    if (resetCover) {
      Object.assign(examData.settings, {
        subject: "HLS-Pharmacology",
        archiveBadge: "Archive",
        lectureNum: "Lecture 1",
        topic: "Topic title",
        correctedBy: "Your Name",
        collectedBy: "",
        editedBy: "",
        customFooterText: "",
        questionsPerPage: 5
      });
    }

    activePageIndex = 1;
    saveData();
    renderEditor();
    renderPreview();
    scrollToPage(1, false);
  }
})();
