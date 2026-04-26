# V1 Production Web App Demo — Revised To-Do List

- [x] **1. Enforce English-Only Output**
  - [x] Update `embedWorker.ts` system prompt to strictly enforce "English ONLY".
  - [x] Add `repetition_penalty: 1.15` to the generation configuration to prevent token looping.

- [x] **2. Speed & Reliability Optimization**
  - [x] Lower `temperature` to `0.2` for more deterministic, faster answers.
  - [x] Set `top_k: 50` and `top_p: 0.9` to optimize token sampling.
  - [x] Reduce `max_new_tokens` to `200` to encourage concise, direct doubt-solving.
  - [x] **Replaced TinyLlama-1.1B with SmolLM2-360M-Instruct for 3x faster generation.**
  - [x] **Migrated to `@huggingface/transformers` v3.**
  - [x] **Increased retrieval from top-3 to top-5 chunks for better context grounding.**

- [x] **3. UI & Multi-Document Support**
  - [x] Remove hardcoded NCERT chapters and pre-defined queries from `App.tsx` and `Sidebar.tsx`.
  - [x] Make the app start with an empty "Upload a Document to Begin" state.
  - [x] Update `App.tsx` state to store an array of multiple uploaded documents.
  - [x] Update `Sidebar.tsx` to list all uploaded documents and allow switching between them.

- [ ] **4. Testing & Verification**
  - [ ] Test with a query that previously triggered Chinese output.
  - [ ] Ensure generation speed is visibly faster and strictly grounded in the retrieved chunk.
  - [ ] Upload multiple documents and test switching active contexts.
