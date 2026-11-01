/**
 * Medical MCQ & Lecture PDF Generator
 * Core Application Engine
 */

// Global State
let examData = {
  settings: {
    subject: "HLS-Pharmacology",
    archiveBadge: "Archive",
    lectureNum: "Lecture 7",
    topic: "anti-neoplastic drugs\n(part 1)",
    correctedBy: "Rahaf Alshatarat",
    fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, serif",
    primaryColor: "#0badef",
    answerColor: "#d60000",
    questionsPerPage: 5,
    autoPagination: true,
    showCommitteeLogo: true,
    showWatermark: true,
    customFooterText: "Next page are more questions",
    showCustomFooterOnPage: 3
  },
  questions: []
};

// Initial Sample Reference Data (100% faithful to the provided PDF)
const referenceLecture7 = {
  settings: {
    subject: "HLS-Pharmacology",
    archiveBadge: "Archive",
    lectureNum: "Lecture 7",
    topic: "anti-neoplastic drugs\n(part 1)",
    correctedBy: "Rahaf Alshatarat",
    fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, serif",
    primaryColor: "#0badef",
    answerColor: "#d60000",
    questionsPerPage: 5,
    autoPagination: true,
    showCommitteeLogo: true,
    showWatermark: true,
    customFooterText: "Next page are more questions",
    showCustomFooterOnPage: 3
  },
  questions: [
    {
      id: "q1",
      number: "1",
      type: "mcq",
      question: "Which of the following antineoplastic drugs has a cardiotoxic effects which limits its use?",
      tag: "",
      pageBreakAfter: false,
      choices: [
        { label: "a", text: "Doxorubicin" },
        { label: "b", text: "Methotrexate" },
        { label: "c", text: "Mitomycin C" }
      ],
      answer: "a",
      answerPrefix: "Ans: ",
      sideNote: ""
    },
    {
      id: "q2",
      number: "2",
      type: "mcq",
      question: "True statements regarding alkylating agents include all the following EXCEPT? Select one:",
      tag: "",
      pageBreakAfter: false,
      choices: [
        { label: "a", text: "They are cell cycle nonspecific agents." },
        { label: "b", text: "Acquired resistance can occur." },
        { label: "c", text: "They add alkyl groups to DNA." },
        { label: "d", text: "They are structurally similar to naturally occurring substances." },
        { label: "e", text: "Nitrogen mustards are examples of this class of drugs." }
      ],
      answer: "d",
      answerPrefix: "Ans: ",
      sideNote: ""
    },
    {
      id: "q3",
      number: "3",
      type: "direct",
      question: "False about methotrexate?",
      tag: "",
      pageBreakAfter: false,
      choices: [],
      answer: "inhibit tetrahydrofolate reductase enzyme",
      answerPrefix: "",
      sideNote: "it inhibits dihydrofolate reductase"
    },
    {
      id: "q4",
      number: "4",
      type: "direct",
      question: "Drug for ovarian cancer that causes hearing loss?",
      tag: "مهم",
      pageBreakAfter: false,
      choices: [],
      answer: "cisplatin",
      answerPrefix: "",
      sideNote: ""
    },
    {
      id: "q5",
      number: "5",
      type: "direct",
      question: "Drug with pulmonary disease/toxicity as adverse effect?",
      tag: "مهم",
      pageBreakAfter: false,
      choices: [],
      answer: "Bleomycin",
      answerPrefix: "",
      sideNote: ""
    },
    {
      id: "q6",
      number: "6",
      type: "direct",
      question: "Alkylating agent?",
      tag: "",
      pageBreakAfter: true, // End of Page 2
      choices: [],
      answer: "Cisplatin",
      answerPrefix: "",
      sideNote: ""
    },
    {
      id: "q7",
      number: "7",
      type: "mcq",
      question: "How do antimetabolites exert their cytotoxic effect?",
      tag: "",
      pageBreakAfter: false,
      choices: [
        { label: "a", text: "Inhibiting DNA synthesis by sliding between DNA base pairs." },
        { label: "b", text: "Inhibiting RNA synthesis by sliding between RNA base pairs." },
        { label: "c", text: "Acting as false metabolites in the microtubules." },
        { label: "d", text: "Acting as false substitutions in the production of nucleic acids." },
        { label: "e", text: "Promoting microtubule assembly and Stabilization." }
      ],
      answer: "d",
      answerPrefix: "Ans: ",
      sideNote: ""
    },
    {
      id: "q8",
      number: "8",
      type: "mcq",
      question: "Which of the following chemotherapy agents acts by intercalation?",
      tag: "",
      pageBreakAfter: false,
      choices: [
        { label: "a", text: "Vincristine." },
        { label: "b", text: "Paclitaxel." },
        { label: "c", text: "Doxorubicin." },
        { label: "d", text: "Vincristine and paclitaxel." },
        { label: "e", text: "Topotecan." }
      ],
      answer: "c",
      answerPrefix: "Ans: ",
      sideNote: ""
    },
    {
      id: "q9",
      number: "9",
      type: "mcq",
      question: "characteristics of imantinib include all of the following except?",
      tag: "",
      pageBreakAfter: true, // End of Page 3
      choices: [
        { label: "A", text: "It prevents the phosphorylation of tyrosine on the substrate molecule" },
        { label: "B", text: "It's administered orally and intravenously" },
        { label: "C", text: "It's used for chronic myelogenous leukemia" },
        { label: "D", text: "It belongs to class of tyrosine kinase inhibitors" },
        { label: "E", text: "its a signal transduction inhibitor" }
      ],
      answer: "B",
      answerPrefix: "Answer: ",
      sideNote: ""
    },
    {
      id: "q10",
      number: "10",
      type: "direct",
      question: "methotrexate is used for?",
      tag: "",
      pageBreakAfter: false,
      choices: [],
      answer: "Rheumatoid arthritis and psoriasis",
      answerPrefix: "",
      sideNote: ""
    },
    {
      id: "q11",
      number: "11",
      type: "direct",
      question: "Which of the following anticancer drugs enhances polymerization of tubulin?",
      tag: "",
      pageBreakAfter: false,
      choices: [],
      answer: "Answer: Paclitaxel",
      answerPrefix: "",
      sideNote: ""
    },
    {
      id: "q12",
      number: "12",
      type: "direct",
      question: "Regarding the treatment of megaloblastic anemia, which of the followings is incorrect?",
      tag: "",
      pageBreakAfter: false,
      choices: [],
      answer: "Answer: Folinic acid (Leucovorin) is available as a spray and gel for intranasal use",
      answerPrefix: "",
      sideNote: ""
    },
    {
      id: "q13",
      number: "13",
      type: "direct",
      question: "Vascular endothelial growth factor:",
      tag: "",
      pageBreakAfter: false,
      choices: [],
      answer: "Answer: Bevacizumab",
      answerPrefix: "",
      sideNote: ""
    },
    {
      id: "q14",
      number: "14",
      type: "direct",
      question: "Bind to tubular protein (meaning microtubules):",
      tag: "",
      pageBreakAfter: false,
      choices: [],
      answer: "Answer: Vinblastin",
      answerPrefix: "",
      sideNote: ""
    }
  ]
};

// UI Elements
let currentTab = "questions"; // 'questions' or 'cover'
let currentZoom = 1.0;
let currentViewMode = "scroll"; // 'scroll' or 'single'
let activePageIndex = 1;
let totalPagesCount = 1;
let isProgrammaticScrolling = false;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadSavedData();
  bindEvents();
  renderEditor();
  renderPreview();
});

// Load from LocalStorage or Reference Default
function loadSavedData() {
  const saved = localStorage.getItem("medical_mcq_data");
  if (saved) {
    try {
      examData = JSON.parse(saved);
      return;
    } catch (e) {
      console.warn("Failed to parse saved data, falling back to default", e);
    }
  }
  // Load default
  examData = JSON.parse(JSON.stringify(referenceLecture7));
}

function saveData() {
  try {
    localStorage.setItem("medical_mcq_data", JSON.stringify(examData));
  } catch (e) {
    // Page images (inserted cover pages) can exceed the browser storage quota.
    // The document keeps working in memory; use "Export JSON" to keep a copy.
    console.warn("Could not auto-save (storage full?). Use Export JSON to keep your work.", e);
  }
}

// Bind Global UI Events
function bindEvents() {
  // Tabs
  document.getElementById("tabQuestions").addEventListener("click", () => switchTab("questions"));
  document.getElementById("tabCover").addEventListener("click", () => switchTab("cover"));

  // Header Actions
  document.getElementById("btnNewQuestion").addEventListener("click", () => addQuestion());
  document.getElementById("btnNewCover")?.addEventListener("click", () => addCoverPage());
  document.getElementById("btnBulkImport").addEventListener("click", openBulkModal);
  document.getElementById("btnResetDefault").addEventListener("click", resetToDefault);
  document.getElementById("btnNewBlank")?.addEventListener("click", startBlankDocument);
  document.getElementById("btnPrintPdf").addEventListener("click", printToPdf);
  document.getElementById("btnDownloadPdf").addEventListener("click", downloadAsPdf);
  document.getElementById("btnExportJson").addEventListener("click", exportProjectJson);
  document.getElementById("btnImportJson").addEventListener("click", () => document.getElementById("jsonFileInput").click());
  document.getElementById("jsonFileInput").addEventListener("change", importProjectJson);

  // Three-dots dropdown menu for Load Lecture 7, Export, Open JSON
  const projectMenuBtn = document.getElementById("btnProjectMenu");
  const projectDropdown = document.getElementById("projectDropdownList");
  if (projectMenuBtn && projectDropdown) {
    projectMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      projectDropdown.classList.toggle("open");
    });
    projectDropdown.querySelectorAll(".menu-list-item").forEach(item => {
      item.addEventListener("click", () => {
        projectDropdown.classList.remove("open");
      });
    });
    document.addEventListener("click", (e) => {
      if (!projectMenuBtn.contains(e.target) && !projectDropdown.contains(e.target)) {
        projectDropdown.classList.remove("open");
      }
    });
  }

  // Zoom Selector
  const zoomSelect = document.getElementById("zoomSelect");
  if (zoomSelect) {
    zoomSelect.addEventListener("change", (e) => {
      currentZoom = parseFloat(e.target.value);
      applyZoom();
    });
  }

  // Page View Modes (Scroll vs Single Page Flip)
  document.getElementById("btnModeScroll")?.addEventListener("click", () => setViewMode("scroll"));
  document.getElementById("btnModeSingle")?.addEventListener("click", () => setViewMode("single"));

  // Page Navigation Buttons
  document.getElementById("btnPrevPage")?.addEventListener("click", prevPage);
  document.getElementById("btnNextPage")?.addEventListener("click", nextPage);
  document.getElementById("floatingPrevBtn")?.addEventListener("click", prevPage);
  document.getElementById("floatingNextBtn")?.addEventListener("click", nextPage);

  // Page Dropdown Selector
  document.getElementById("pageSelectDropdown")?.addEventListener("change", (e) => {
    const pageNum = parseInt(e.target.value, 10);
    if (!isNaN(pageNum)) scrollToPage(pageNum);
  });

  // Scroll listener for Viewport to detect which page is currently in view
  const viewport = document.getElementById("previewViewport");
  if (viewport) {
    let scrollTimeout;
    viewport.addEventListener("scroll", () => {
      if (isProgrammaticScrolling || currentViewMode === "single") return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        detectCurrentVisiblePage();
      }, 60);
    });
  }

  // Keyboard Shortcuts (PageUp, PageDown, Alt+Left, Alt+Right)
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "PageDown" || (e.altKey && e.key === "ArrowRight")) {
      e.preventDefault();
      nextPage();
    } else if (e.key === "PageUp" || (e.altKey && e.key === "ArrowLeft")) {
      e.preventDefault();
      prevPage();
    }
  });

  // Bulk Modal Events
  document.getElementById("modalCloseBtn").addEventListener("click", closeBulkModal);
  document.getElementById("modalCancelBtn").addEventListener("click", closeBulkModal);
  document.getElementById("modalApplyBulkBtn").addEventListener("click", processBulkImport);

  // Cover settings input change bindings
  const coverInputs = [
    "settingSubject", "settingArchive", "settingLecture", 
    "settingTopic", "settingCorrectedBy", "settingFooterText", "settingQuestionsPerPage",
    "settingCollectedBy", "settingEditedBy", "settingPrimaryColor", "settingChoiceColor"
  ];
  coverInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", handleCoverSettingChange);
    }
  });
}

// ==========================================================================
// Page Navigation & View Mode Engine
// ==========================================================================
function setViewMode(mode) {
  currentViewMode = mode;
  const container = document.getElementById("pdfPreviewContainer");
  document.getElementById("btnModeScroll")?.classList.toggle("active", mode === "scroll");
  document.getElementById("btnModeSingle")?.classList.toggle("active", mode === "single");
  
  if (mode === "single") {
    container.classList.add("single-page-mode");
  } else {
    container.classList.remove("single-page-mode");
  }
  updateNavigationControls();
  scrollToPage(activePageIndex, false);
}

function scrollToPage(pageNum, smooth = true) {
  if (pageNum < 1) pageNum = 1;
  if (pageNum > totalPagesCount) pageNum = totalPagesCount;
  activePageIndex = pageNum;

  const targetEl = document.getElementById(`pdf-page-${pageNum}`);
  const viewport = document.getElementById("previewViewport");

  if (currentViewMode === "single") {
    document.querySelectorAll(".pdf-page-container").forEach(p => p.classList.remove("active-page"));
    if (targetEl) targetEl.classList.add("active-page");
    if (viewport) viewport.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  } else {
    if (targetEl && viewport) {
      isProgrammaticScrolling = true;
      const targetTop = targetEl.offsetTop - 30;
      viewport.scrollTo({ top: targetTop, behavior: smooth ? "smooth" : "auto" });
      setTimeout(() => { isProgrammaticScrolling = false; }, 400);
    }
  }
  updateNavigationControls();
  if (currentViewMode === "single") jumpEditorToPage(activePageIndex);
}

function jumpEditorToPage(pageNum) {
  // Keep the question editor in sync with the page selected in Flip View.
  // Each question block already carries its rendered page badge.
  const blocks = Array.from(document.querySelectorAll("#questionBlocksContainer .question-block"));
  const target = blocks.find((block) => {
    const badge = block.querySelector(".btn-jump-page");
    return badge && new RegExp("\\bPage\\s+" + pageNum + "\\b").test(badge.textContent || "");
  });
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.add("active-focus");
    setTimeout(() => target.classList.remove("active-focus"), 900);
  }
}

function prevPage() {
  if (activePageIndex > 1) {
    scrollToPage(activePageIndex - 1);
  }
}

function nextPage() {
  if (activePageIndex < totalPagesCount) {
    scrollToPage(activePageIndex + 1);
  }
}

function detectCurrentVisiblePage() {
  const viewport = document.getElementById("previewViewport");
  if (!viewport) return;
  const viewportScrollMiddle = viewport.scrollTop + viewport.clientHeight / 2;

  const pages = document.querySelectorAll(".pdf-page-container");
  let closestPageNum = 1;
  let minDiff = Infinity;

  pages.forEach((p, idx) => {
    const pageNum = idx + 1;
    const pageMiddle = p.offsetTop + p.offsetHeight / 2;
    const diff = Math.abs(pageMiddle - viewportScrollMiddle);
    if (diff < minDiff) {
      minDiff = diff;
      closestPageNum = pageNum;
    }
  });

  if (activePageIndex !== closestPageNum) {
    activePageIndex = closestPageNum;
    updateNavigationControls();
  }
}

function updateNavigationControls() {
  const badge = document.getElementById("floatingPageBadge");
  if (badge) badge.textContent = `Page ${activePageIndex} / ${totalPagesCount}`;

  const dropdown = document.getElementById("pageSelectDropdown");
  if (dropdown && dropdown.value != activePageIndex) {
    dropdown.value = activePageIndex;
  }

  // Update floating chips
  document.querySelectorAll(".nav-chip").forEach(chip => {
    const p = parseInt(chip.getAttribute("data-page"), 10);
    chip.classList.toggle("active", p === activePageIndex);
  });

  // Enable/disable prev/next buttons
  const isFirst = activePageIndex <= 1;
  const isLast = activePageIndex >= totalPagesCount;

  ["btnPrevPage", "floatingPrevBtn"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = isFirst;
  });
  ["btnNextPage", "floatingNextBtn"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = isLast;
  });
}

function switchTab(tab) {
  currentTab = tab;
  document.getElementById("tabQuestions").classList.toggle("active", tab === "questions");
  document.getElementById("tabCover").classList.toggle("active", tab === "cover");
  document.getElementById("questionsTabContent").style.display = tab === "questions" ? "flex" : "none";
  document.getElementById("coverTabContent").style.display = tab === "cover" ? "flex" : "none";
}

function handleCoverSettingChange() {
  examData.settings.subject = document.getElementById("settingSubject").value || "HLS-Pharmacology";
  examData.settings.archiveBadge = document.getElementById("settingArchive").value || "Archive";
  examData.settings.lectureNum = document.getElementById("settingLecture").value || "Lecture 7";
  examData.settings.topic = document.getElementById("settingTopic").value || "";
  examData.settings.correctedBy = document.getElementById("settingCorrectedBy").value || "";
  examData.settings.customFooterText = document.getElementById("settingFooterText").value || "";
  examData.settings.collectedBy = document.getElementById("settingCollectedBy")?.value || "";
  examData.settings.editedBy = document.getElementById("settingEditedBy")?.value || "";
  examData.settings.primaryColor = document.getElementById("settingPrimaryColor")?.value || "#0badef";
  examData.settings.choiceColor = document.getElementById("settingChoiceColor")?.value || examData.settings.primaryColor;
  
  const qpp = parseInt(document.getElementById("settingQuestionsPerPage").value, 10);
  if (!isNaN(qpp) && qpp > 0) {
    examData.settings.questionsPerPage = qpp;
  }
  
  saveData();
  renderPreview();
}

// Applies the chosen primary / choices colors to the whole document design
function applyThemeColor() {
  const s = examData.settings;
  const primary = s.primaryColor || "#0badef";
  const root = document.documentElement.style;
  root.setProperty("--primary-cyan", primary);
  root.setProperty("--primary-cyan-hover", primary);
  root.setProperty("--choice-color", s.choiceColor || primary);
}

function applyZoom() {
  const pages = document.querySelectorAll(".pdf-page-container");
  pages.forEach(p => {
    p.style.transform = `scale(${currentZoom})`;
    p.style.transformOrigin = "top center";
    if (currentZoom < 1.0) {
      // Eliminate dead vertical space when zoomed out
      const scaledHeightDiff = 1056 * (1 - currentZoom);
      p.style.marginBottom = `-${scaledHeightDiff - 24}px`;
    } else if (currentZoom > 1.0) {
      const extraHeight = 1056 * (currentZoom - 1);
      p.style.marginBottom = `${extraHeight + 24}px`;
    } else {
      p.style.marginBottom = "";
    }
  });
}

// ==========================================================================
// Question Block Editor Rendering
// ==========================================================================
function renderEditor() {
  // Sync cover form values
  document.getElementById("settingSubject").value = examData.settings.subject || "";
  document.getElementById("settingArchive").value = examData.settings.archiveBadge || "";
  document.getElementById("settingLecture").value = examData.settings.lectureNum || "";
  document.getElementById("settingTopic").value = examData.settings.topic || "";
  document.getElementById("settingCorrectedBy").value = examData.settings.correctedBy || "";
  document.getElementById("settingFooterText").value = examData.settings.customFooterText || "";
  document.getElementById("settingQuestionsPerPage").value = examData.settings.questionsPerPage || 5;
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
  setVal("settingCollectedBy", examData.settings.collectedBy || "");
  setVal("settingEditedBy", examData.settings.editedBy || "");
  setVal("settingPrimaryColor", examData.settings.primaryColor || "#0badef");
  setVal("settingChoiceColor", examData.settings.choiceColor || examData.settings.primaryColor || "#0badef");

  const container = document.getElementById("questionBlocksContainer");
  container.innerHTML = "";

  // Pre-calculate page numbers for questions
  const pageMap = {};
  const maxPerPage = examData.settings.questionsPerPage || 5;
  partitionQuestionsIntoPages(examData.questions, maxPerPage).forEach((pg, i) => {
    pg.forEach((q) => { pageMap[q.id] = i + 2; });
  });

  examData.questions.forEach((q, index) => {
    const block = q.type === "cover"
      ? createCoverBlockElement(q, index, pageMap[q.id] || 2)
      : createQuestionBlockElement(q, index, pageMap[q.id] || 2);
    container.appendChild(block);
  });
}

// Editor card for an inserted cover page. Fully editable, like the first cover page.
function createCoverBlockElement(q, index, assignedPage = 2) {
  const card = document.createElement("div");
  card.className = "question-block";
  card.id = `block-${q.id}`;

  const header = document.createElement("div");
  header.className = "block-header";
  header.innerHTML = `
    <div class="block-title-group">
      <span class="q-badge" style="background:#fef3c7; color:#92400e;">COVER</span>
      <button class="btn-jump-page" title="View this cover page in the preview" style="font-size:11px; background:#e0f2fe; color:#0369a1; border:1px solid #bae6fd; border-radius:4px; padding:2px 7px; cursor:pointer; font-weight:600;">
        📄 Page ${assignedPage}
      </button>
    </div>
    <div class="block-actions">
      <button class="icon-btn" title="Move Up" ${index === 0 ? 'disabled style="opacity:0.3;"' : ''} data-action="up">↑</button>
      <button class="icon-btn" title="Move Down" ${index === examData.questions.length - 1 ? 'disabled style="opacity:0.3;"' : ''} data-action="down">↓</button>
      <button class="icon-btn" title="Duplicate" data-action="duplicate">📋</button>
      <button class="icon-btn danger" title="Delete cover page" data-action="delete">🗑️</button>
    </div>
  `;
  header.querySelector(".btn-jump-page")?.addEventListener("click", () => scrollToPage(assignedPage));
  header.querySelector('[data-action="up"]')?.addEventListener("click", () => moveQuestion(index, -1));
  header.querySelector('[data-action="down"]')?.addEventListener("click", () => moveQuestion(index, 1));
  header.querySelector('[data-action="duplicate"]')?.addEventListener("click", () => duplicateQuestion(index));
  header.querySelector('[data-action="delete"]')?.addEventListener("click", () => deleteQuestion(index));

  const body = document.createElement("div");
  body.className = "block-body";

  const addField = (parent, labelText, key, multiline) => {
    const g = document.createElement("div");
    g.className = "field-group";
    const lab = document.createElement("label");
    lab.className = "field-label";
    lab.textContent = labelText;
    const input = document.createElement(multiline ? "textarea" : "input");
    if (!multiline) input.type = "text";
    input.className = "input-text";
    if (multiline) input.style.height = "60px";
    input.value = q[key] || "";
    input.addEventListener("input", (e) => {
      q[key] = e.target.value;
      saveData();
      renderPreview();
    });
    g.appendChild(lab);
    g.appendChild(input);
    parent.appendChild(g);
  };
  const addRow = () => {
    const r = document.createElement("div");
    r.className = "form-grid-2";
    body.appendChild(r);
    return r;
  };

  addField(body, "Subject / Header Title", "subject");
  const r1 = addRow();
  addField(r1, "Archive Badge", "archive");
  addField(r1, "Lecture Number", "lecture");
  addField(body, "Topic / Subtitle (multi-line supported)", "topic", true);
  const r2 = addRow();
  addField(r2, "Collected By (optional)", "collectedBy");
  addField(r2, "Edited By (optional)", "editedBy");
  addField(body, "Corrected By (handwritten script, optional)", "correctedBy");

  const colorGroup = document.createElement("div");
  colorGroup.className = "field-group";
  const colorLab = document.createElement("label");
  colorLab.className = "field-label";
  colorLab.textContent = "Cover color (blocks)";
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value = /^#[0-9a-f]{6}$/i.test(q.primaryColor || "") ? q.primaryColor : (examData.settings.primaryColor || "#0badef");
  colorInput.style.cssText = "height:36px; padding:2px; border:1px solid #cbd5e1; border-radius:4px; width:100%; cursor:pointer;";
  colorInput.addEventListener("input", (e) => {
    q.primaryColor = e.target.value;
    saveData();
    renderPreview();
  });
  colorGroup.appendChild(colorLab);
  colorGroup.appendChild(colorInput);
  body.appendChild(colorGroup);

  // Original page image from the source PDF (only when the cover came from a PDF)
  if (q.image) {
    const wrap = document.createElement("div");
    wrap.style.cssText = "display:flex; gap:10px; align-items:center; margin-top:4px;";
    const thumb = document.createElement("img");
    thumb.src = q.image;
    thumb.alt = "Original cover";
    thumb.style.cssText = "width:70px; border:1px solid #cbd5e1; border-radius:4px; display:block;";
    const lab = document.createElement("label");
    lab.style.cssText = "display:flex; align-items:center; gap:8px; font-size:12px; color:#334155; cursor:pointer;";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!q.useImage;
    cb.addEventListener("change", (e) => {
      q.useImage = e.target.checked;
      saveData();
      renderPreview();
    });
    lab.appendChild(cb);
    lab.appendChild(document.createTextNode("Show the original PDF image instead (not editable)"));
    wrap.appendChild(thumb);
    wrap.appendChild(lab);
    body.appendChild(wrap);
  }

  card.appendChild(header);
  card.appendChild(body);
  return card;
}

function createQuestionBlockElement(q, index, assignedPage = 2) {
  const card = document.createElement("div");
  card.className = "question-block";
  card.id = `block-${q.id}`;

  const isMcq = q.type === "mcq";
  const displayNum = q.number || (index + 1);

  // Header of Block
  const header = document.createElement("div");
  header.className = "block-header";
  header.innerHTML = `
    <div class="block-title-group">
      <span class="q-badge">Q#${displayNum}</span>
      <button class="btn-jump-page" title="Click to view this question on Page ${assignedPage} in preview" style="font-size:11px; background:#e0f2fe; color:#0369a1; border:1px solid #bae6fd; border-radius:4px; padding:2px 7px; cursor:pointer; font-weight:600;">
        📄 Page ${assignedPage}
      </button>
      <button class="type-toggle ${isMcq ? 'mcq' : ''}" title="Toggle MCQ / Short Answer">
        ${isMcq ? 'Multiple Choice' : 'Short Answer'}
      </button>
    </div>
    <div class="block-actions">
      <button class="icon-btn" title="Move Up" ${index === 0 ? 'disabled style="opacity:0.3;"' : ''} data-action="up">↑</button>
      <button class="icon-btn" title="Move Down" ${index === examData.questions.length - 1 ? 'disabled style="opacity:0.3;"' : ''} data-action="down">↓</button>
      <button class="icon-btn" title="Duplicate" data-action="duplicate">📋</button>
      <button class="icon-btn danger" title="Delete Question" data-action="delete">🗑️</button>
    </div>
  `;

  // Jump to page when clicking page badge
  header.querySelector(".btn-jump-page")?.addEventListener("click", () => {
    scrollToPage(assignedPage);
  });

  // Toggle MCQ/Direct
  header.querySelector(".type-toggle").addEventListener("click", () => {
    q.type = q.type === "mcq" ? "direct" : "mcq";
    if (q.type === "mcq" && (!q.choices || q.choices.length === 0)) {
      q.choices = [
        { label: "a", text: "" },
        { label: "b", text: "" },
        { label: "c", text: "" }
      ];
    }
    saveData();
    renderEditor();
    renderPreview();
  });

  // Action Buttons
  header.querySelector('[data-action="up"]')?.addEventListener("click", () => moveQuestion(index, -1));
  header.querySelector('[data-action="down"]')?.addEventListener("click", () => moveQuestion(index, 1));
  header.querySelector('[data-action="duplicate"]')?.addEventListener("click", () => duplicateQuestion(index));
  header.querySelector('[data-action="delete"]')?.addEventListener("click", () => deleteQuestion(index));

  // Body of Block
  const body = document.createElement("div");
  body.className = "block-body";

  // Part 1: Main Question Prompt + Tag (e.g. مهم)
  const part1 = document.createElement("div");
  part1.className = "field-group";
  part1.innerHTML = `
    <div class="field-label">
      <span>Part 1: Main Question</span>
      <span style="font-weight:normal; text-transform:none; font-size:11px; color:#64748b;">
        Arabic Tag: <input type="text" class="input-tag" placeholder="e.g. مهم" value="${escapeHtml(q.tag || '')}" style="width: 70px; padding: 2px 4px; font-size: 11px; border:1px solid #cbd5e1; border-radius:3px;">
      </span>
    </div>
    <textarea class="textarea-q" placeholder="Type question text here...">${escapeHtml(q.question)}</textarea>
  `;

  const tagInput = part1.querySelector(".input-tag");
  tagInput.addEventListener("input", (e) => {
    q.tag = e.target.value;
    saveData();
    renderPreview();
  });

  const textareaQ = part1.querySelector(".textarea-q");
  textareaQ.addEventListener("input", (e) => {
    q.question = e.target.value;
    saveData();
    renderPreview();
  });

  // Part 2 & Side Answer Box Grid
  const part2Grid = document.createElement("div");
  part2Grid.className = "choices-and-answer-grid";

  // Column 1: Choices (MCQ) or Direct Answer text
  const choicesCol = document.createElement("div");
  choicesCol.className = "choices-section";

  if (isMcq) {
    choicesCol.innerHTML = `
      <div class="field-label">Part 2: Multiple Choices</div>
      <div class="choices-list" id="choicesList-${q.id}"></div>
      <button class="add-choice-btn">+ Add Choice</button>
    `;

    const listEl = choicesCol.querySelector(`#choicesList-${q.id}`);
    (q.choices || []).forEach((c, cIdx) => {
      const row = document.createElement("div");
      row.className = "choice-row";
      row.innerHTML = `
        <span class="choice-label-badge">${c.label}.</span>
        <input type="text" class="choice-input" value="${escapeHtml(c.text)}" placeholder="Choice ${c.label} text...">
        <button class="choice-del-btn" title="Delete choice">×</button>
      `;

      const input = row.querySelector(".choice-input");
      input.addEventListener("input", (e) => {
        c.text = e.target.value;
        saveData();
        renderPreview();
      });

      const delBtn = row.querySelector(".choice-del-btn");
      delBtn.addEventListener("click", () => {
        q.choices.splice(cIdx, 1);
        saveData();
        renderEditor();
        renderPreview();
      });

      listEl.appendChild(row);
    });

    // Add Choice Button
    const addBtn = choicesCol.querySelector(".add-choice-btn");
    addBtn.addEventListener("click", () => {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const nextLabel = alphabet[q.choices.length % alphabet.length];
      q.choices.push({ label: nextLabel, text: "" });
      saveData();
      renderEditor();
      renderPreview();
    });

  } else {
    // Direct Answer Mode
    choicesCol.innerHTML = `
      <div class="field-label">Part 2: Direct Answer</div>
      <input type="text" class="input-text input-direct-ans" placeholder="Direct answer text (in red)..." value="${escapeHtml(q.answer || '')}">
      <div style="margin-top:6px;">
        <label style="font-size:11px; color:#64748b; font-weight:600;">Optional Side Note / Clarification:</label>
        <input type="text" class="input-text input-side-note" placeholder="e.g. it inhibits dihydrofolate reductase" value="${escapeHtml(q.sideNote || '')}">
      </div>
    `;

    const ansInput = choicesCol.querySelector(".input-direct-ans");
    ansInput.addEventListener("input", (e) => {
      q.answer = e.target.value;
      saveData();
      renderPreview();
    });

    const noteInput = choicesCol.querySelector(".input-side-note");
    noteInput.addEventListener("input", (e) => {
      q.sideNote = e.target.value;
      saveData();
      renderPreview();
    });
  }

  // Column 2: Small Side Box for Answers
  const answerSideBox = document.createElement("div");
  answerSideBox.className = "answer-side-box";
  
  if (isMcq) {
    answerSideBox.innerHTML = `
      <div class="answer-side-box-title">
        <span>Answer Box</span>
      </div>
      <div class="answer-choices-picker" id="ansChips-${q.id}"></div>
      <div style="margin-top:4px;">
        <input type="text" class="answer-input-custom" placeholder="Ans text..." value="${escapeHtml(q.answerPrefix || 'Ans: ')}${escapeHtml(q.answer || '')}">
      </div>
    `;

    // Quick choice chips (a, b, c, d, e...)
    const chipsContainer = answerSideBox.querySelector(`#ansChips-${q.id}`);
    (q.choices || []).forEach(c => {
      const chip = document.createElement("button");
      chip.className = `ans-choice-chip ${q.answer?.toLowerCase() === c.label?.toLowerCase() ? 'active' : ''}`;
      chip.textContent = c.label.toUpperCase();
      chip.addEventListener("click", () => {
        q.answer = c.label;
        q.answerPrefix = "Ans: ";
        saveData();
        renderEditor();
        renderPreview();
      });
      chipsContainer.appendChild(chip);
    });

    const customAnsInput = answerSideBox.querySelector(".answer-input-custom");
    customAnsInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (val.toLowerCase().startsWith("ans:")) {
        q.answerPrefix = "Ans: ";
        q.answer = val.substring(4).trim();
      } else if (val.toLowerCase().startsWith("answer:")) {
        q.answerPrefix = "Answer: ";
        q.answer = val.substring(7).trim();
      } else {
        q.answerPrefix = "";
        q.answer = val.trim();
      }
      saveData();
      renderPreview();
    });

  } else {
    // Short Answer side box display
    answerSideBox.innerHTML = `
      <div class="answer-side-box-title">
        <span>Answer Box</span>
      </div>
      <div class="answer-preview-badge">Direct Ans</div>
      <div style="font-size:10px; color:#991b1b; line-height:1.3; margin-top:2px;">
        Renders in bold red beside the question.
      </div>
    `;
  }

  part2Grid.appendChild(choicesCol);
  part2Grid.appendChild(answerSideBox);

  // Page Break Toggle row
  const pageBreakRow = document.createElement("div");
  pageBreakRow.className = "page-break-toggle-row";
  pageBreakRow.innerHTML = `
    <label class="toggle-switch">
      <input type="checkbox" ${q.pageBreakAfter ? 'checked' : ''} class="page-break-cb">
      <span>Start new PDF page after this question</span>
    </label>
    <span>${q.pageBreakAfter ? '📄 Page Break Set' : 'Auto Flow'}</span>
  `;

  pageBreakRow.querySelector(".page-break-cb").addEventListener("change", (e) => {
    q.pageBreakAfter = e.target.checked;
    saveData();
    renderPreview();
  });

  body.appendChild(part1);
  body.appendChild(part2Grid);
  body.appendChild(pageBreakRow);

  card.appendChild(header);
  card.appendChild(body);
  return card;
}

// ==========================================================================
// Question Operations (Add, Move, Duplicate, Delete)
// ==========================================================================
function addQuestion(defaultProps = {}) {
  const newId = "q" + Date.now();
  const nextNum = examData.questions.length + 1;
  const newQ = {
    id: newId,
    number: String(nextNum),
    type: "mcq",
    question: "",
    tag: "",
    pageBreakAfter: false,
    choices: [
      { label: "a", text: "" },
      { label: "b", text: "" },
      { label: "c", text: "" },
      { label: "d", text: "" }
    ],
    answer: "a",
    answerPrefix: "Ans: ",
    sideNote: "",
    ...defaultProps
  };

  examData.questions.push(newQ);
  saveData();
  renderEditor();
  renderPreview();

  // Scroll to new block
  setTimeout(() => {
    const el = document.getElementById(`block-${newId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("active-focus");
      setTimeout(() => el.classList.remove("active-focus"), 1200);
    }
  }, 50);
}

// Adds an empty cover page after the last question (it can be moved with the arrows)
function addCoverPage() {
  const s = examData.settings;
  const newId = "cv" + Date.now();
  examData.questions.push({
    id: newId,
    type: "cover",
    image: "",
    label: "New cover page",
    subject: s.subject || "",
    archive: s.archiveBadge || "Archive",
    lecture: "Lecture",
    topic: "",
    collectedBy: "",
    editedBy: "",
    correctedBy: "",
    primaryColor: s.primaryColor || "",
    useImage: false,
    number: "",
    question: "",
    tag: "",
    pageBreakAfter: false,
    choices: [],
    answer: "",
    answerPrefix: "",
    sideNote: ""
  });
  resequenceQuestionNumbers();
  saveData();
  renderEditor();
  renderPreview();

  setTimeout(() => {
    const el = document.getElementById(`block-${newId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("active-focus");
      setTimeout(() => el.classList.remove("active-focus"), 1200);
    }
  }, 50);
}

function moveQuestion(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= examData.questions.length) return;
  const temp = examData.questions[index];
  examData.questions[index] = examData.questions[targetIndex];
  examData.questions[targetIndex] = temp;
  
  // Update numbers
  resequenceQuestionNumbers();
  saveData();
  renderEditor();
  renderPreview();
}

function duplicateQuestion(index) {
  const source = examData.questions[index];
  const clone = JSON.parse(JSON.stringify(source));
  clone.id = "q" + Date.now();
  clone.number = String(index + 2);
  examData.questions.splice(index + 1, 0, clone);
  resequenceQuestionNumbers();
  saveData();
  renderEditor();
  renderPreview();
}

function deleteQuestion(index) {
  const item = examData.questions[index];
  const msg = item && item.type === "cover" ? "Delete this cover page?" : `Delete Question #${index + 1}?`;
  if (confirm(msg)) {
    examData.questions.splice(index, 1);
    resequenceQuestionNumbers();
    saveData();
    renderEditor();
    renderPreview();
  }
}

// Numbers questions 1..N. An inserted cover page starts a new lecture, so
// numbering restarts at 1 after every cover.
function resequenceQuestionNumbers() {
  let n = 0;
  examData.questions.forEach((q) => {
    if (q.type === "cover") {
      n = 0;
      q.number = "";
      return;
    }
    n++;
    q.number = String(n);
  });
}

// ==========================================================================
// Live PDF Preview Rendering (Exact Canva Replica)
// ==========================================================================
function renderPreview() {
  const container = document.getElementById("pdfPreviewContainer");
  container.innerHTML = "";

  const s = examData.settings;

  applyThemeColor();

  // 1. Render Page 1 (The Cover Page)
  container.appendChild(buildCoverPage(s, "pdf-page-1", "Page 1"));

  // 2. Partition Questions into Pages
  const pagesList = partitionQuestionsIntoPages(examData.questions, s.questionsPerPage || 5);
  // Always keep at least one (blank) content page after the cover
  if (pagesList.length === 0) pagesList.push([]);
  totalPagesCount = pagesList.length + 1;

  pagesList.forEach((pageQuestions, pIdx) => {
    const pageNum = pIdx + 2; // Pages 2, 3, 4...
    const contentPage = createContentPageElement(pageQuestions, pageNum, totalPagesCount);
    container.appendChild(contentPage);
  });

  // Re-apply zoom
  applyZoom();

  // Populate Dropdown
  const dropdown = document.getElementById("pageSelectDropdown");
  if (dropdown) {
    dropdown.innerHTML = `<option value="1">Page 1: Cover Page</option>`;
    pagesList.forEach((pQs, idx) => {
      const pNum = idx + 2;
      const isCoverPg = pQs.length === 1 && pQs[0].type === "cover";
      const firstQ = isCoverPg ? "" : (pQs[0]?.number || "");
      const lastQ = isCoverPg ? "" : (pQs[pQs.length - 1]?.number || "");
      const label = isCoverPg
        ? `Page ${pNum}: ${escapeHtml(pQs[0].label || "Cover page")}`
        : firstQ ? `Page ${pNum}: Q#${firstQ} - Q#${lastQ}` : `Page ${pNum}`;
      dropdown.innerHTML += `<option value="${pNum}">${label}</option>`;
    });
    if (activePageIndex > totalPagesCount) activePageIndex = totalPagesCount;
    dropdown.value = activePageIndex;
  }

  // Populate Floating Chips
  const chipsContainer = document.getElementById("floatingPageChips");
  if (chipsContainer) {
    chipsContainer.innerHTML = "";
    for (let i = 1; i <= totalPagesCount; i++) {
      const chip = document.createElement("button");
      chip.className = `nav-chip ${i === activePageIndex ? 'active' : ''}`;
      chip.setAttribute("data-page", i);
      chip.textContent = i === 1 ? "Cover" : `P${i}`;
      chip.title = `Jump to Page ${i}`;
      chip.addEventListener("click", () => scrollToPage(i));
      chipsContainer.appendChild(chip);
    }
  }

  // Set active-page classes
  document.querySelectorAll(".pdf-page-container").forEach((p, idx) => {
    p.classList.toggle("active-page", (idx + 1) === activePageIndex);
  });

  updateNavigationControls();
}

/**
 * Builds a cover page (design of page 1) from a settings-like object:
 * { subject, archiveBadge, lectureNum, topic, collectedBy, editedBy, correctedBy }
 */
function buildCoverPage(s, pageId, indicatorText) {
  const coverPage = document.createElement("div");
  coverPage.className = "pdf-page-container cover-page";
  coverPage.id = pageId;

  // Cover Left Background Image
  const leftBg = document.createElement("div");
  leftBg.className = "cover-left-bg";
  if (typeof ASSETS !== "undefined" && ASSETS.coverBgLeft) {
    leftBg.style.backgroundImage = `url('${ASSETS.coverBgLeft}')`;
  } else {
    leftBg.style.backgroundImage = "url('assets/cover_bg_left.jpg')";
  }
  coverPage.appendChild(leftBg);

  // Top Header: Subject Title + Line
  const coverHeader = document.createElement("div");
  coverHeader.className = "cover-header-wrap";
  coverHeader.innerHTML = `
    <h1 class="cover-subject-title">${escapeHtml(s.subject || 'HLS-Pharmacology')}</h1>
    <div class="cover-header-line"></div>
  `;
  coverPage.appendChild(coverHeader);

  // Center Content: Archive, Lecture, Topic, Corrected by
  const centerContent = document.createElement("div");
  centerContent.className = "cover-center-content";
  centerContent.innerHTML = `
    <div class="cyan-block archive">${escapeHtml(s.archiveBadge || 'Archive')}</div>
    <div class="cyan-block lecture">${escapeHtml(s.lectureNum || 'Lecture 7')}</div>
    ${s.topic ? `<div class="cyan-block topic">${escapeHtml(s.topic)}</div>` : ''}
    ${s.collectedBy ? `<div class="cover-credit"><div class="credit-label">Collected By :</div><div class="credit-name">${escapeHtml(s.collectedBy)}</div></div>` : ''}
    ${s.editedBy ? `<div class="cover-credit"><div class="credit-label">Edited By :</div><div class="credit-name">${escapeHtml(s.editedBy)}</div></div>` : ''}
    ${s.correctedBy ? `<div class="cyan-block corrected-label">Corrected by:</div><div class="cover-name-script">${escapeHtml(s.correctedBy)}</div>` : ''}
  `;
  coverPage.appendChild(centerContent);

  // Bottom Right Committee Logo
  const committeeLogo = document.createElement("img");
  committeeLogo.className = "cover-committee-logo";
  if (typeof ASSETS !== "undefined" && ASSETS.committeeLogo) {
    committeeLogo.src = ASSETS.committeeLogo;
  } else {
    committeeLogo.src = "assets/committee_logo.png";
  }
  committeeLogo.alt = "Medical Committee Logo";
  coverPage.appendChild(committeeLogo);

  // Add Page Indicator
  if (indicatorText) {
    const page1Indicator = document.createElement("div");
    page1Indicator.className = "page-number-indicator";
    page1Indicator.textContent = indicatorText;
    coverPage.appendChild(page1Indicator);
  }
  return coverPage;
}

/**
 * Partitions questions into pages taking into account:
 * 1. Manual `pageBreakAfter: true`
 * 2. Questions per page threshold
 */
function partitionQuestionsIntoPages(questions, maxPerPage = 5) {
  const pages = [];
  let currentPage = [];
  let header = null; // { subject, lecture } of the latest inserted cover page

  const pushPage = (arr) => {
    arr.header = header; // read by createContentPageElement for the page header
    pages.push(arr);
  };

  questions.forEach((q) => {
    // An inserted cover page always sits on its own page, in its original position
    if (q.type === "cover") {
      if (currentPage.length > 0) {
        pushPage(currentPage);
        currentPage = [];
      }
      if (q.lecture || q.subject) header = { subject: q.subject, lecture: q.lecture };
      pushPage([q]);
      return;
    }

    currentPage.push(q);
    if (q.pageBreakAfter || currentPage.length >= maxPerPage) {
      pushPage(currentPage);
      currentPage = [];
    }
  });

  if (currentPage.length > 0) {
    pushPage(currentPage);
  }

  return pages;
}

/**
 * Page that shows an inserted cover exactly as it was in the source PDF (image).
 */
function createImagePageElement(item, pageNum) {
  const page = document.createElement("div");
  page.className = "pdf-page-container image-page";
  page.id = `pdf-page-${pageNum}`;
  page.style.position = "relative";
  page.style.overflow = "hidden";
  page.style.background = "#fff";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.label || "Cover page";
  img.style.cssText = "display:block;width:100%;height:100%;object-fit:fill;";
  page.appendChild(img);
  return page;
}

/**
 * Inserted cover page rebuilt from its editable fields (same design as page 1)
 */
function createInsertedCoverElement(item, pageNum) {
  const s = examData.settings;
  const page = buildCoverPage(
    {
      subject: item.subject || s.subject,
      archiveBadge: item.archive || "Archive",
      lectureNum: item.lecture || "",
      topic: item.topic || "",
      collectedBy: item.collectedBy || "",
      editedBy: item.editedBy || "",
      correctedBy: item.correctedBy || "",
    },
    `pdf-page-${pageNum}`,
    null
  );
  if (/^#[0-9a-f]{6}$/i.test(item.primaryColor || "")) {
    page.style.setProperty("--primary-cyan", item.primaryColor);
    page.style.setProperty("--primary-cyan-hover", item.primaryColor);
  }
  return page;
}

/**
 * Creates an exact replica of the Canva Question Page
 */
function createContentPageElement(questions, pageNum, totalPages) {
  if (questions.length === 1 && questions[0].type === "cover") {
    const item = questions[0];
    return item.useImage && item.image ? createImagePageElement(item, pageNum) : createInsertedCoverElement(item, pageNum);
  }
  const s = examData.settings;
  const hdr = questions.header || {};
  const headerSubject = hdr.subject || s.subject;
  const headerLecture = hdr.lecture || s.lectureNum;
  const page = document.createElement("div");
  page.className = "pdf-page-container content-page" + (window.ARCHIVE_TEMPLATE_BACKGROUND ? " archive-template-enabled" : "");
  page.id = `pdf-page-${pageNum}`;
  // Use the supplied archive template as the full-page background for question pages.
  // Cover pages are built separately above and are intentionally unchanged.
  if (window.ARCHIVE_TEMPLATE_BACKGROUND) {
    page.style.backgroundImage = `url("${window.ARCHIVE_TEMPLATE_BACKGROUND}")`;
    page.style.backgroundSize = "100% 100%";
    page.style.backgroundPosition = "center";
    page.style.backgroundRepeat = "no-repeat";
  }

  // Framed Outer Border Box
  const frame = document.createElement("div");
  frame.className = "content-page-frame";

  // Watermarks
  const headerWatermark = document.createElement("div");
  headerWatermark.className = "page-header-watermark";
  if (typeof ASSETS !== "undefined" && ASSETS.pageHeaderBg) {
    headerWatermark.style.backgroundImage = `url('${ASSETS.pageHeaderBg}')`;
  } else {
    headerWatermark.style.backgroundImage = "url('assets/page_header_bg.jpg')";
  }
  frame.appendChild(headerWatermark);

  const centerWatermark = document.createElement("div");
  centerWatermark.className = "page-center-watermark";
  if (typeof ASSETS !== "undefined" && ASSETS.committeeWatermark) {
    centerWatermark.style.backgroundImage = `url('${ASSETS.committeeWatermark}')`;
  } else {
    centerWatermark.style.backgroundImage = "url('assets/committee_watermark.png')";
  }
  frame.appendChild(centerWatermark);

  // Top Page Header: "HLS- Pharmacology" + "Lecture 7" + Underline
  const topHeader = document.createElement("div");
  topHeader.className = "page-top-header";
  topHeader.innerHTML = `
    <span class="page-header-title">${escapeHtml(headerSubject || 'HLS- Pharmacology')}</span>
    <span class="page-header-badge">${escapeHtml(headerLecture || 'Lecture 7')}</span>
  `;
  frame.appendChild(topHeader);

  // Questions Stack
  const qContainer = document.createElement("div");
  qContainer.className = "questions-container";

  questions.forEach(q => {
    const qEl = document.createElement("div");
    qEl.className = "rendered-question";

    const isMcq = q.type === "mcq";
    const tagHtml = q.tag ? `<span class="rendered-tag-arabic">${escapeHtml(q.tag)}</span>` : "";

    // Question Title
    const titleEl = document.createElement("div");
    titleEl.className = "rendered-q-title";
    titleEl.innerHTML = `
      <span>${escapeHtml(q.number)}) ${escapeHtml(q.question)}</span>
      ${tagHtml}
    `;
    applyBidiTextStyle(titleEl, q.question);
    if (q.tag) applyBidiTextStyle(titleEl.querySelector(".rendered-tag-arabic"), q.tag);
    qEl.appendChild(titleEl);

    if (isMcq) {
      // Multiple Choices Block with Side Answer
      const choicesBlock = document.createElement("div");
      choicesBlock.className = "rendered-choices-block";

      const choicesList = document.createElement("div");
      choicesList.className = "rendered-choices-list";

      (q.choices || []).forEach(c => {
        const item = document.createElement("div");
        item.className = "rendered-choice-item";
        item.textContent = `${c.label}. ${c.text}`;
        applyBidiTextStyle(item, c.text);
        choicesList.appendChild(item);
      });

      choicesBlock.appendChild(choicesList);

      // Red Answer on the right
      if (q.answer) {
        const ansEl = document.createElement("div");
        ansEl.className = "rendered-side-answer";
        ansEl.textContent = `${q.answerPrefix || 'Ans: '}${q.answer}`;
        applyBidiTextStyle(ansEl, q.answer);
        choicesBlock.appendChild(ansEl);
      }

      qEl.appendChild(choicesBlock);

    } else {
      // Direct Answer layout
      const directRow = document.createElement("div");
      directRow.className = "rendered-direct-answer-row";

      const ansText = document.createElement("div");
      ansText.className = "rendered-direct-ans-text";
      ansText.textContent = q.answer || "";
      applyBidiTextStyle(ansText, q.answer);
      directRow.appendChild(ansText);

      if (q.sideNote) {
        const noteText = document.createElement("div");
        noteText.className = "rendered-direct-note-text";
        noteText.textContent = q.sideNote;
        applyBidiTextStyle(noteText, q.sideNote);
        directRow.appendChild(noteText);
      }

      qEl.appendChild(directRow);
    }

    qContainer.appendChild(qEl);
  });

  frame.appendChild(qContainer);

  // Page Custom Footer Text (e.g., "Next page are more questions")
  if (s.customFooterText && pageNum === (s.showCustomFooterOnPage || 3)) {
    const footerText = document.createElement("div");
    footerText.className = "page-custom-footer";
    footerText.textContent = s.customFooterText;
    frame.appendChild(footerText);
  }

  // Page Number Indicator
  const pageIndicator = document.createElement("div");
  pageIndicator.className = "page-number-indicator";
  pageIndicator.textContent = `Page ${pageNum} of ${totalPages}`;
  frame.appendChild(pageIndicator);

  page.appendChild(frame);
  return page;
}

// ==========================================================================
// Smart Bulk Text / Past Paper Importer
// ==========================================================================
function openBulkModal() {
  document.getElementById("bulkModal").classList.add("open");
  document.getElementById("bulkInputText").focus();
}

function closeBulkModal() {
  document.getElementById("bulkModal").classList.remove("open");
}

function processBulkImport() {
  const rawText = document.getElementById("bulkInputText").value;
  if (!rawText.trim()) {
    alert("Please paste text containing questions first.");
    return;
  }

  const parsed = parseRawQuestions(rawText);
  if (parsed.length === 0) {
    alert("Could not detect any questions. Please check the formatting or use question numbers (e.g. 1), 2., 3-).");
    return;
  }

  const replaceMode = document.getElementById("bulkReplaceCb").checked;
  if (replaceMode) {
    examData.questions = parsed;
  } else {
    examData.questions = examData.questions.concat(parsed);
  }

  resequenceQuestionNumbers();
  saveData();
  renderEditor();
  renderPreview();
  closeBulkModal();
  document.getElementById("bulkInputText").value = "";
}

/**
 * Intelligent Text Parser for Past Exams & MCQs
 */
function parseRawQuestionsLegacy(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  const questions = [];
  let currentQ = null;

  // Regex patterns
  const qNumRegex = /^(\d+)[\.\)\-:]\s*(.*)/; // e.g. 1) Question? or 1. Question?
  const choiceRegex = /^([a-eA-E])[\.\)\-:]\s*(.*)/; // e.g. a. Option or A) Option
  const ansRegex = /^(?:Ans|Answer)[\s:]+([a-eA-E]|.*)/i; // e.g. Ans: a or Answer: Paclitaxel

  lines.forEach(line => {
    // Check if new question
    const qMatch = line.match(qNumRegex);
    if (qMatch) {
      if (currentQ) questions.push(finalizeQuestion(currentQ));

      let qText = qMatch[2];
      let tag = "";
      if (qText.includes("مهم")) {
        tag = "مهم";
        qText = qText.replace("مهم", "").trim();
      }

      currentQ = {
        id: "q" + Date.now() + Math.random().toString(36).substr(2, 4),
        number: qMatch[1],
        type: "mcq",
        question: qText,
        tag: tag,
        pageBreakAfter: false,
        choices: [],
        answer: "",
        answerPrefix: "Ans: ",
        sideNote: ""
      };
      return;
    }

    if (!currentQ) return;

    // Check if choice
    const cMatch = line.match(choiceRegex);
    if (cMatch) {
      currentQ.choices.push({
        label: cMatch[1].toLowerCase(),
        text: cMatch[2]
      });
      return;
    }

    // Check if Answer line
    const aMatch = line.match(ansRegex);
    if (aMatch) {
      const val = aMatch[1].trim();
      currentQ.answer = val;
      currentQ.answerPrefix = line.toLowerCase().startsWith("answer") ? "Answer: " : "Ans: ";
      return;
    }

    // Otherwise, could be direct answer, note, or continuation of question
    if (currentQ.choices.length === 0) {
      if (!currentQ.question.endsWith("?") && !currentQ.question.endsWith(":")) {
        currentQ.question += " " + line;
      } else if (!currentQ.answer) {
        currentQ.type = "direct";
        currentQ.answer = line;
      } else {
        currentQ.sideNote = line;
      }
    }
  });

  if (currentQ) {
    questions.push(finalizeQuestion(currentQ));
  }

  return questions;
}

function finalizeQuestion(q) {
  if (q.choices.length === 0 && q.answer) {
    q.type = "direct";
  }
  return q;
}

// ==========================================================================
// Export & Reset Functions
// ==========================================================================
function printToPdf() {
  window.print();
}

function downloadAsPdf() {
  const src = document.getElementById("pdfPreviewContainer");
  if (!src) return;

  const opt = {
    margin: 0,
    filename: `${examData.settings.subject || 'Lecture'}_${examData.settings.lectureNum || 'Exam'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0, windowWidth: 816 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { mode: ['css'] }
  };

  if (typeof html2pdf === "undefined") {
    window.print();
    return;
  }

  // Export from a clean copy: no zoom transforms, no gaps between pages, no screen
  // margins/shadows. Each page is exactly one letter page, so nothing gets cut off
  // and no blank page is added at the end.
  const clone = src.cloneNode(true);
  clone.classList.remove("single-page-mode");
  clone.style.cssText = "display:block;width:816px;min-width:0;margin:0;padding:0;";
  const pages = clone.querySelectorAll(".pdf-page-container");
  pages.forEach((p, i) => {
    p.classList.remove("active-page");
    p.style.cssText =
      "transform:none;margin:0;box-shadow:none;display:flex;width:816px;height:1055px;min-height:1055px;overflow:hidden;" +
      (i < pages.length - 1 ? "page-break-after:always;break-after:page;" : "");
    if (p.classList.contains("archive-template-enabled") && window.ARCHIVE_TEMPLATE_BACKGROUND) {
      p.style.backgroundImage = `url("${window.ARCHIVE_TEMPLATE_BACKGROUND}")`;
      p.style.backgroundSize = "100% 100%";
      p.style.backgroundPosition = "center";
      p.style.backgroundRepeat = "no-repeat";
    }
  });

  html2pdf().set(opt).from(clone).save();
}

function exportProjectJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(examData, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `${examData.settings.subject || 'Exam'}_project.json`);
  dlAnchor.click();
}

function importProjectJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      if (parsed.settings && parsed.questions) {
        examData = parsed;
        saveData();
        renderEditor();
        renderPreview();
        alert("Project loaded successfully!");
      } else {
        alert("Invalid project format.");
      }
    } catch (err) {
      alert("Error reading JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function resetToDefault() {
  if (confirm("Reset everything back to the Lecture 7 default template? Any unsaved edits will be lost.")) {
    examData = JSON.parse(JSON.stringify(referenceLecture7));
    saveData();
    renderEditor();
    renderPreview();
  }
}

/**
 * Start over: removes every question so only the cover page and one blank
 * content page remain. Optionally resets the cover text to neutral placeholders.
 */
function startBlankDocument() {
  if (!confirm("Start a new blank document?\n\nThis deletes ALL questions and leaves only the cover page and one blank page. Use 'Export JSON' first if you want to keep your current work.")) {
    return;
  }

  examData.questions = [];

  if (confirm("Also reset the cover page text (subject, lecture, topic, corrected by) to blank placeholders?\n\nOK = reset cover too\nCancel = keep the current cover text")) {
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

// Helper
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function hasArabicText(str) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(String(str || ""));
}

function applyBidiTextStyle(el, text) {
  if (!el || !hasArabicText(text)) return;
  el.dir = "auto";
  el.style.fontFamily = '"Noto Sans Arabic", "Segoe UI", sans-serif';
  el.style.unicodeBidi = "plaintext";
}
