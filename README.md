# Medical Lecture & MCQ PDF Automation System
### Exact Canva Theme Replica ("HLS-Pharmacology" Design System)

An automated web application designed to produce medical lecture question booklets and past papers with the exact same visual identity, typography, background graphics, color palette, and cover page design.

---

## 🌟 Key Features

1. **Exact 1:1 Canva Theme Matching**:
   - **Cover Page**: Medical clipboard & glasses artwork on the left, subject title with black underline, cyan `#0badef` badges (`Archive`, `Lecture 7`, `Topic`, `Corrected by:`), elegant cursive signature font for author (`Rahaf Alshatarat`), and the official Medical & Surgical Committee logo (`لجنة الطب والجراحة`).
   - **Content Pages**: Precision grey border frame, top header with subject title and cyan lecture badge, faded stethoscope/pen watermark, center faded committee watermark, bold black question titles, bold cyan `#0badef` multiple choice options, and bold red `#d60000` right-aligned answer badges (`Ans: a`, `Answer: B`).
   - **Typography**: Google Fonts loaded matching the original Canva types (`DM Serif Display`, `Playfair Display`, `Dancing Script`, `Noto Sans Arabic`).

2. **Dedicated Question Blocks (Side-by-Side Editor)**:
   - **Dual Pane Layout**: Write questions on the left pane and see the live Canva-styled PDF render instantly on the right.
   - **Two-Part Structure per Box**:
     - **Part 1**: Main Question input + Arabic badge/tag field (e.g. `مهم`).
     - **Part 2**: Multiple Choices section (dynamic choices a, b, c, d, e with add/delete options).
     - **Small Side Box for Answers**: Dedicated answer selector/input with visual red badge preview and optional side notes/explanations.
   - **Question Types**: Toggle between **Multiple Choice (MCQ)** and **Short Answer / Direct Q&A** with a single click.
   - **Reorder & Management**: Move questions up/down, duplicate cards, delete, or insert manual page breaks.

3. **⚡ Smart Bulk Import (Automation Engine)**:
   - Paste raw question text from Telegram, WhatsApp, Word documents, or past papers.
   - The built-in smart parser automatically extracts question numbers, question bodies, options (`a.`, `b.`, `c.`), answers (`Ans: X`), and Arabic priority tags (`مهم`), generating all blocks instantly!

4. **Export Options**:
   - **Print / Save to PDF**: Uses vector `@media print` rules for 100% crisp, high-resolution selectable text in standard Letter / A4 size with zero printer margins.
   - **Instant Download PDF**: Direct one-click `.pdf` download powered by `html2pdf.js`.
   - **Project JSON Save & Load**: Save your lecture files and reload them anytime.

---

## 🚀 How to Launch the App

### Option 1: Instant Launch (No Server Needed)
Simply double-click `index.html` or open it in your browser (Google Chrome, Microsoft Edge, Firefox, Brave, etc.). All assets and graphics are self-contained.

### Option 2: Run via Node.js Server
1. Double-click **`Start_App.cmd`** in this folder.
2. Or open PowerShell / Terminal and run:
   ```powershell
   cd "C:\Users\famil\.gemini\antigravity\scratch\medical-mcq-generator"
   node server.js
   ```
3. Your browser will automatically open `http://localhost:3000`.

---

## 📁 Project Structure

```text
medical-mcq-generator/
│
├── index.html           # Main dual-pane application interface
├── styles.css           # Styling for editor, responsive layout, and @media print
├── app.js               # Reactive engine, block manager, live renderer, bulk parser
├── assets.js            # Extracted original Canva graphics bundled as base64
├── server.js            # Lightweight Node.js local server
├── Start_App.cmd        # 1-click Windows desktop launcher
├── README.md            # Documentation
└── assets/              # Extracted high-resolution image files
    ├── cover_bg_left.jpg
    ├── page_header_bg.jpg
    ├── committee_logo.png
    ├── committee_watermark.png
    └── page_watermark_bg.png
```
