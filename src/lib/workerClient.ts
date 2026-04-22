// src/lib/workerClient.ts

let worker: Worker | null = null;
let messageIdCounter = 0;
const resolvers: Record<number, { resolve: (val: any) => void; reject: (err: any) => void }> = {};

export function initWorker(onProgress?: (progress: any) => void): Promise<void> {
  if (!worker) {
    worker = new Worker(new URL('../workers/embedWorker.ts', import.meta.url), { type: 'module' });
    
    worker.onmessage = (event) => {
      const { id, status, embedding, progress, error } = event.data;
      
      if (status === 'progress' && onProgress) {
        onProgress(progress);
        return;
      }
      
      if (id !== undefined && resolvers[id]) {
        if (status === 'error') {
          resolvers[id].reject(new Error(error));
        } else {
          resolvers[id].resolve(embedding);
        }
        delete resolvers[id];
      } else if (status === 'ready' && resolvers[0]) {
        resolvers[0].resolve(true);
        delete resolvers[0];
      }
    };
  }

  return new Promise((resolve, reject) => {
    resolvers[0] = { resolve, reject };
    worker!.postMessage({ type: 'load' });
  });
}

export function getEmbedding(text: string): Promise<number[]> {
  if (!worker) throw new Error("Worker not initialized");
  
  const id = ++messageIdCounter;
  return new Promise((resolve, reject) => {
    resolvers[id] = { resolve, reject };
    worker!.postMessage({ type: 'embed', id, text });
  });
}
