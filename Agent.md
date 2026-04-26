# ClassM8 - Agent Handoff & Architecture Context

Hello, future agent! This document contains everything you need to know to get up to speed on the **ClassM8** project. Please read this before making architectural changes.

## 📌 Project Overview
**ClassM8** is an offline-first, browser-based Conversational RAG (Retrieval-Augmented Generation) AI Tutor. It allows users to upload PDF documents and ask questions about them. 
Crucially, **all processing happens locally in the browser**—PDF parsing, embedding generation, semantic retrieval, and LLM text generation. No data is sent to external servers.

## 🛠️ Tech Stack
- **Framework**: React 18 with Vite + TypeScript
- **Styling**: Tailwind CSS
- **AI/ML Engine**: `@huggingface/transformers` v3 (Transformers.js running in Web Workers)
- **PDF Parsing**: `pdfjs-dist`

## 🧠 AI Models Used
- **Embeddings**: `Xenova/all-MiniLM-L6-v2` (~25MB)
- **Text Generation**: `onnx-community/SmolLM2-360M-Instruct` (q4f16 quantized, ~350MB)
  *Note: We migrated through three models:*
  1. *Qwen1.5-0.5B-Chat — hallucinated Chinese characters*
  2. *TinyLlama-1.1B-Chat — too slow in the browser (30-60s per answer)*
  3. *SmolLM2-360M-Instruct — fast (<20s), English-only, instruction-tuned for edge devices*

## 📦 Package Migration History
- **v0.1**: `@xenova/transformers` v2 (deprecated)
- **v0.3**: `@huggingface/transformers` v3 (current — successor package, same API)

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
- Implements a hybrid approach: **Cosine Similarity** (using embeddings) mixed with basic **TF-IDF** token scoring to retrieve the top 5 most relevant chunks for a user's query.
- `buildContext()` formats the top-5 chunks into numbered paragraphs for the LLM prompt.
- `buildAnswer()` is the fallback for when no LLM is loaded (retrieval-only mode).

### 4. Web Worker Integration (`src/lib/workerClient.ts` & `src/workers/embedWorker.ts`)
- `workerClient.ts` is the main thread's interface to communicate with the Web Worker.
- `embedWorker.ts` is where Transformers.js actually lives. It loads the models asynchronously to avoid freezing the UI.
- **Generation Parameters**: We use strict parameters (`temperature: 0.2`, `top_k: 50`, `repetition_penalty: 1.15`) and a heavily constrained system prompt to ensure the model acts strictly as a tutor and answers concisely based *only* on the retrieved chunks.

## 🔄 Recent Major Changes (v0.3)
1. **Model Migration**: Replaced TinyLlama-1.1B with SmolLM2-360M-Instruct for 3x faster inference.
2. **Package Migration**: Upgraded from `@xenova/transformers` v2 to `@huggingface/transformers` v3.
3. **Top-5 Retrieval**: Retrieval now returns 5 paragraphs (was 3) and all are passed to the LLM as context.
4. **Better Prompting**: System prompt enforces context-only, English-only, concise answers.

## 🚀 How to Run
```bash
npm install
npm run dev
```

## ⚠️ Important Rules for Agents
1. **Maintain Browser Execution**: Do NOT add server-side dependencies (like Node.js native fs modules or external paid API calls like OpenAI). The core value proposition is 100% local, offline browser execution.
2. **Transformers.js Constraints**: Be aware of WebGL/WASM memory limits in the browser. Do not swap to massive 7B parameter models; stick to 500M or smaller unless using specialized quantization.
3. **No Chinese Hallucinations**: If modifying generation parameters in `embedWorker.ts`, be careful not to introduce extreme `repetition_penalty` or too low temperatures that might break the tokenizer or force foreign languages.
4. **Use @huggingface/transformers v3**: Do NOT revert to @xenova/transformers. The v3 package is the maintained successor.
