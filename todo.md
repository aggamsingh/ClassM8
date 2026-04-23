# V1 Production Web App Demo — To-Do List

- [ ] **1. Persistent Storage Setup (IndexedDB)**
  - [ ] Install `localforage` or use raw IndexedDB wrapper.
  - [ ] Create database logic to save/load User Sessions (chat histories).
  - [ ] Create database logic to save/load Document Data (name, raw text chunks, and their vector embeddings).

- [ ] **2. Multi-Document Management**
  - [ ] Update `Sidebar.tsx` to display a list of all saved documents.
  - [ ] Add ability to switch the "Active Document" for querying.
  - [ ] Add ability to delete a document from storage.

- [ ] **3. Chat Session Management**
  - [ ] Update `Sidebar.tsx` to list past chat sessions.
  - [ ] Add a "New Chat" button to clear the active view but keep history.
  - [ ] Load past messages into `App.tsx` when selecting an older chat.

- [ ] **4. Progressive Web App (PWA) Integration**
  - [ ] Install `vite-plugin-pwa`.
  - [ ] Configure `vite.config.ts` to generate manifest and service worker.
  - [ ] Provide offline caching for HTML, CSS, JS, and UI assets.

- [ ] **5. UI & Polish**
  - [ ] Show a proper "Model downloading..." state vs "Processing PDF..." state to clarify wait times.
  - [ ] Update the welcome screen (`App.tsx`) to clearly reflect the user's document library.
  - [ ] Test completely offline (turn off Wi-Fi and refresh).
