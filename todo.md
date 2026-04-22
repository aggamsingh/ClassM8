# Offline PDF RAG Feature — To-Do List

- [ ] **Dependencies**
  - [ ] Install `pdfjs-dist` (for reading PDF text in browser).
  - [ ] Install `@xenova/transformers` (for local semantic embeddings).

- [ ] **UI Updates (Upload & Progress)**
  - [ ] Add a "Upload PDF" button in `Sidebar.tsx`.
  - [ ] Add a visual overlay/progress bar in `App.tsx` indicating:
    - PDF parsing state
    - Embedding generation state (with a percentage)

- [ ] **PDF Processing & Chunking**
  - [ ] Create `src/lib/pdfParser.ts`.
  - [ ] Write logic to extract raw text from the uploaded PDF.
  - [ ] Write logic to chunk text into paragraphs (~300-500 chars).

- [ ] **Web Worker for AI Embeddings**
  - [ ] Create `src/workers/embedWorker.ts`.
  - [ ] Initialize `Xenova/all-MiniLM-L6-v2` via `transformers.js`.
  - [ ] Set up messaging bridge to pass chunks to the worker and receive vectors.

- [ ] **Retrieval Engine Upgrade**
  - [ ] Update `src/lib/retrieval.ts` to compute Cosine Similarity between the query embedding and chunk embeddings.
  - [ ] Refactor `retrieve()` to use the new uploaded chunks instead of the hardcoded `NCERT_CHUNKS` when a document is uploaded.

- [ ] **Testing & Polish**
  - [ ] Test with a sample PDF.
  - [ ] Ensure the browser UI does not freeze during the embedding process.
  - [ ] Verify semantic search correctly returns the most relevant paragraph.
