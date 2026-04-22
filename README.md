# ClassM8 — Offline CBSE Science Tutor

> **Design Principle:** Reliability over Intelligence. Syllabus over General Knowledge.

**ClassM8** is a fully offline, browser-based RAG (Retrieval-Augmented Generation) tutor for CBSE Class 10 students. It answers academic doubts using official NCERT content — no internet connection required.

---

## 🚀 Prototype Status

**Current phase:** Working local web app demo (v0.1 — 1-day sprint)

The prototype demonstrates the full RAG pipeline running entirely in the browser:
**Question → Keyword Retrieval → Grounded Answer + Source Citations**

### Run it locally

```bash
# From the ClassM8/ directory
npm install
npm run dev
# Opens at http://localhost:5173
```

**Requirements:** Node.js 18+, any modern browser (Chrome / Edge / Firefox)

---

## 🛠️ Prototype Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | React 18 + Vite + TypeScript | Component-based UI, hot reload |
| **Styling** | Tailwind CSS v3 | Dark glassmorphism design system |
| **Retrieval Engine** | Custom BM25-style (pure TS) | Term-frequency keyword scoring |
| **Knowledge Base** | Pre-written NCERT chunks (JSON) | 28 chunks across 4 chapters |
| **State / Streaming** | React hooks + simulated streaming | Character-by-character answer output |
| **Hosting** | Vite dev server (`npm run dev`) | Local only, zero external deps |

---

## 🏗️ How the Prototype RAG Pipeline Works

```
Student asks: "What is a redox reaction?"
        ↓
[1] TOKENISE — query split into meaningful terms, stopwords removed
        ↓
[2] SCORE — each of 28 NCERT chunks gets a BM25-style relevance score
        ↓
[3] RETRIEVE — top 3 chunks selected by score
        ↓
[4] AUGMENT — answer built from best chunk + context-aware intro
        ↓
[5] STREAM — answer renders character-by-character (simulated streaming UX)
        ↓
Student sees: grounded answer + 3 NCERT source citations with chapter & section
```

---

## 📁 Project Structure

```
ClassM8/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── src/
    ├── App.tsx                     ← Root layout, welcome screen, suggestion grid
    ├── main.tsx                    ← React entry point
    ├── index.css                   ← Global styles + Tailwind directives
    ├── components/
    │   ├── Sidebar.tsx             ← Logo, offline badge, chapter filter
    │   ├── MessageBubble.tsx       ← User & AI message bubbles
    │   ├── SourceCards.tsx         ← NCERT citation cards under AI replies
    │   ├── InputBar.tsx            ← Auto-resizing textarea + send button
    │   └── TypingIndicator.tsx     ← Animated "Searching NCERT…" indicator
    ├── hooks/
    │   └── useChat.ts              ← Chat state, streaming logic, RAG orchestration
    └── lib/
        ├── ncertData.ts            ← 28 NCERT chunks (Ch 1, 2, 3, 10) + chapter metadata
        ├── retrieval.ts            ← BM25 tokeniser, scorer, retriever, answer builder
        └── types.ts                ← Shared TypeScript interfaces (Message, Source)
```

---

## 📚 NCERT Content Coverage (Prototype)

| Chapter | Topic | Chunks |
| :--- | :--- | :---: |
| **Ch. 1** | Chemical Reactions and Equations | 9 |
| **Ch. 2** | Acids, Bases and Salts | 6 |
| **Ch. 3** | Metals and Non-metals | 6 |
| **Ch. 10** | Light: Reflection and Refraction | 7 |

---

## 💡 Key Design Decisions (Prototype)

| Decision | Choice | Why |
| :--- | :--- | :--- |
| LLM engine | **None (retrieval-only)** | Zero downloads, instant demo, 100% reliable |
| Vector store | **In-memory BM25 (pure TS)** | No WASM, no setup, works in any browser |
| Embeddings | **None (keyword scoring)** | Eliminates all model download risk |
| Content source | **Pre-written NCERT excerpts** | Accurate, instantly available, no parsing step |
| Streaming | **Simulated (character delay)** | Demonstrates UX without LLM complexity |

### Risk Mitigations vs Original Plan

| Original Risk | Solution Applied |
| :--- | :--- |
| WebLLM 1GB+ model download | Removed from prototype — retrieval-only |
| LanceDB WASM instability | Replaced with pure-TS BM25 scorer |
| Transformers.js BGE download | Removed — no embeddings needed |
| WebGPU hard requirement | Eliminated — runs in all browsers |
| No NCERT content | 28 hand-authored chunks, bundled in code |

---

## 🗺️ Roadmap (Post-Prototype)

### v0.2 — Real LLM Integration
- Integrate **Chrome Built-in AI (Gemini Nano)** via `window.LanguageModel` API
- Zero-download LLM for machines running Chrome 127+
- Upgrade retrieval to **Transformers.js embeddings** (all-MiniLM, ~25 MB)

### v0.3 — Full Content Coverage
- All 16 NCERT Science chapters (Class 10)
- Pre-computed embeddings bundled as `public/data/embeddings.json`
- **LanceDB WASM** for persistent vector index once API stabilises

### v1.0 — Production Offline App
- Electron or PWA wrapper for true offline desktop use
- WebLLM (Llama-3.2-1B or Phi-3-mini) for fully local generation
- Student session history (IndexedDB)
- Multi-subject: Maths, Social Science

---

## ⚠️ Requirements (Prototype)

- **Node.js** 18 or higher
- **Browser:** Any modern browser (no WebGPU needed for prototype)
- **Storage:** ~200 MB for `node_modules`, ~0 MB runtime overhead

---

## 🌟 New in `feature/pdf-semantic-rag` Branch

We've extended the prototype with **Local PDF RAG** capabilities! If you're on the `feature/pdf-semantic-rag` branch, you can test these dynamic features:

- **PDF Upload & Parsing:** Upload your own NCERT chapters (or any PDF). The app uses `pdfjs-dist` to parse and chunk the text entirely in your browser.
- **Local Semantic Search:** Powered by `Transformers.js` and the `all-MiniLM-L6-v2` model running in a background Web Worker. It generates embeddings locally and uses Cosine Similarity to find conceptually relevant paragraphs, moving beyond exact keyword matches.
- **Real-time Processing UI:** A beautiful overlay provides live feedback during text extraction and AI model execution.

**To try it out:**
1. Switch to the branch: `git checkout feature/pdf-semantic-rag`
2. Install new dependencies: `npm install`
3. Run the dev server: `npm run dev`
4. Click **Upload PDF** in the sidebar. 
*(Note: An active internet connection is required on the very first run to download the ~22MB AI model. Afterwards, it is 100% offline).*
