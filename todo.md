# V1 Production Web App Demo — Revised To-Do List

- [ ] **1. Enforce English-Only Output**
  - [ ] Update `embedWorker.ts` system prompt to strictly enforce "English ONLY".
  - [ ] Add `repetition_penalty: 1.15` to the generation configuration to prevent token looping.

- [ ] **2. Speed & Reliability Optimization**
  - [ ] Lower `temperature` to `0.2` for more deterministic, faster answers.
  - [ ] Set `top_k: 50` and `top_p: 0.9` to optimize token sampling.
  - [ ] Reduce `max_new_tokens` to `150` to encourage concise, direct doubt-solving.

- [ ] **3. Testing & Verification**
  - [ ] Test with a query that previously triggered Chinese output.
  - [ ] Ensure generation speed is visibly faster and strictly grounded in the retrieved chunk.
