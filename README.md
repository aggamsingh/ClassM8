# ClassM8 — Offline CBSE Science Tutor

**ClassM8** is a high-performance, fully offline Retrieval-Augmented Generation (RAG) system. It allows Class 10 students to resolve academic doubts using official NCERT content without an internet connection.

---

## 🛠️ Tech Stack (24-Hour Sprint)

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **LLM Engine** | **WebLLM (Llama-3.2-1B)** | Local GPU inference in-browser. |
| **Vector DB** | **LanceDB (WASM)** | Single-file local storage for textbook data. |
| **Embeddings** | **Transformers.js (BGE)** | Turning questions into vectors on-device. |
| **Frontend** | **React + Vite** | High-speed UI development. |
| **Styling** | **Tailwind CSS** | Clean, accessible student interface. |

---

## 🏗️ How It Works (Offline RAG)

1. **Query:** Student asks: *"What is a redox reaction?"*
2. **Embed:** The question is converted to a vector locally via `Transformers.js`.
3. **Retrieve:** `LanceDB` finds the relevant section in *Chapter 1: Chemical Reactions*.
4. **Augment:** System prompt: *"Using ONLY the following textbook context, explain: [User Question]"*.
5. **Generate:** `Llama-3.2-1B` streams the answer via the device's GPU.

---

---

## ⚠️ Requirements
- **Hardware:** Device with a GPU (Integrated or Dedicated).
- **Browser:** Chrome, Edge, or Arc (Must support **WebGPU**).
- **Storage:** ~1.5GB local storage for model and index caching.

---

> **Design Principle:** Reliability over Intelligence. Syllabus over General Knowledge.
