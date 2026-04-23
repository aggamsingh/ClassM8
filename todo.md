# Offline PDF RAG Feature — To-Do List

- [x] **Dependencies**
  - [x] Install `pdfjs-dist` (for reading PDF text in browser).
  - [x] Install `@xenova/transformers` (for local semantic embeddings).

- [x] **UI Updates (Upload & Progress)**
  - [x] Add a "Upload PDF" button in `Sidebar.tsx`.
  - [x] Add a visual overlay/progress bar in `App.tsx` indicating:
    - PDF parsing state
    - Embedding generation state (with a percentage)

- [x] **PDF Processing & Chunking**
  - [x] Create `src/lib/pdfParser.ts`.
  - [x] Write logic to extract raw text from the uploaded PDF.
  - [x] Write logic to chunk text into paragraphs (~300-500 chars).

- [x] **Web Worker for AI Embeddings**
  - [x] Create `src/workers/embedWorker.ts`.
  - [x] Initialize `Xenova/all-MiniLM-L6-v2` via `transformers.js`.
  - [x] Set up messaging bridge to pass chunks to the worker and receive vectors.

- [x] **Retrieval Engine Upgrade**
  - [x] Update `src/lib/retrieval.ts` to compute Cosine Similarity between the query embedding and chunk embeddings.
  - [x] Refactor `retrieve()` to use the new uploaded chunks instead of the hardcoded `NCERT_CHUNKS` when a document is uploaded.

- [x] **Conversational LLM Generation**
  - [x] Integrate `Xenova/Qwen1.5-0.5B-Chat` in the Web Worker.
  - [x] Intercept retrieved chunk context and prompt the LLM to generate conversational answers.
  - [x] Implement UI streaming animation that dynamically renders LLM tokens.
  - [x] Configure fallback keyword retrieval thresholds to handle unrelated queries safely.

- [x] **Testing & Polish**
  - [x] Test with a sample PDF.
  - [x] Ensure the browser UI does not freeze during the embedding process.
  - [x] Verify semantic search correctly returns the most relevant paragraph.
  - [x] Confirm dynamic UI text correctly reflects the uploaded document.
