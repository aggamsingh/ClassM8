# ClassM8 - Agent Handoff & Architecture Context

Hello, future agent! This document contains everything you need to know to get up to speed on the **ClassM8** project. Please read this before making architectural changes.

## 📌 Project Overview
**ClassM8** is an offline-first, browser-based Conversational RAG (Retrieval-Augmented Generation) AI Tutor. It allows users to upload PDF documents and ask questions about them. 
Crucially, **all processing happens locally in the browser**—PDF parsing, embedding generation, semantic retrieval, and LLM text generation. No data is sent to external servers.

## 🛠️ Tech Stack
- **Framework**: React 18 with Vite + TypeScript
- **Styling**: Tailwind CSS
- **AI/ML Engine**: `@xenova/transformers` (Transformers.js running in Web Workers)
- **PDF Parsing**: `pdfjs-dist`

## 🧠 AI Models Used
- **Embeddings**: `Xenova/all-MiniLM-L6-v2`
- **Text Generation**: `Xenova/TinyLlama-1.1B-Chat-v1.0`
  *Note: We previously used Qwen1.5-0.5B-Chat, but it suffered from severe hallucination issues where it would output Chinese characters. TinyLlama was selected to guarantee English-only output.*

## 🏗️ Architecture & Core Files

### 1. UI Components (`src/components/`)
- `App.tsx`: The main controller. It manages the state for all uploaded documents (`DocumentData[]`), handles active document switching, and orchestrates the chat UI.
- `Sidebar.tsx`: Renders the list of dynamically uploaded PDFs. Users can click on a document to switch the AI's active context.
- `InputBar.tsx`: The chat input box. It displays the name of the active document being queried.
- `MessageBubble.tsx` & `SourceCards.tsx`: Renders the chat messages and the specific document citations/sections retrieved for the answer.

### 2. PDF Processing (`src/lib/pdfParser.ts`)
- Uses `pdfjs-dist` to extract raw text from uploaded PDFs.
- Chunks the text into manageable semantic blocks before passing them to the embedding model.

### 3. Retrieval Engine (`src/lib/retrieval.ts`)
- Maintains an in-memory array called `CUSTOM_CHUNKS` which represents the currently active document's embeddings.
- Implements a hybrid approach: **Cosine Similarity** (using embeddings) mixed with basic **TF-IDF** token scoring to retrieve the top 3 most relevant chunks for a user's query.

### 4. Web Worker Integration (`src/lib/workerClient.ts` & `src/workers/embedWorker.ts`)
- `workerClient.ts` is the main thread's interface to communicate with the Web Worker.
- `embedWorker.ts` is where Transformers.js actually lives. It loads the models asynchronously to avoid freezing the UI.
- **Generation Parameters**: We use strict parameters (`temperature: 0.3`, `top_k: 50`) and a heavily constrained system prompt to ensure the model acts strictly as a tutor and answers concisely based *only* on the retrieved chunks.

## 🔄 Recent Major Changes (v1 Production Demo)
1. **Dynamic Multi-Document UI**: Removed all hardcoded static data (previously bound to NCERT textbooks). The app now boots completely empty ("Upload a Document to Begin").
2. **In-Memory Storage**: Documents are intentionally kept in React state rather than IndexedDB to maximize speed and keep the workspace lightweight for doubt-solving sessions.
3. **Citation Fixes**: Citations dynamically reflect the uploaded PDF's filename and chunk section, completely decoupled from the old hardcoded textbook chapters.

## 🚀 How to Run
```bash
npm install
npm run dev
```

## ⚠️ Important Rules for Agents
1. **Maintain Browser Execution**: Do NOT add server-side dependencies (like Node.js native fs modules or external paid API calls like OpenAI). The core value proposition is 100% local, offline browser execution.
2. **Transformers.js Constraints**: Be aware of WebGL/WASM memory limits in the browser. Do not swap to massive 7B parameter models; stick to 1B or smaller unless using specialized quantization.
3. **No Chinese Hallucinations**: If modifying generation parameters in `embedWorker.ts`, be careful not to introduce extreme `repetition_penalty` or too low temperatures that might break the tokenizer or force foreign languages.
