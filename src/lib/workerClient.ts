// src/lib/workerClient.ts

let worker: Worker | null = null;
let messageIdCounter = 0;
const resolvers: Record<number, { resolve: (val: any) => void; reject: (err: any) => void }> = {};
const generateCallbacks: Record<number, (event: any) => void> = {};

export function initWorker(onProgress?: (progress: any) => void): Promise<void> {
  if (!worker) {
    worker = new Worker(new URL('../workers/embedWorker.ts', import.meta.url), { type: 'module' });
    
    worker.onmessage = (event) => {
      const { id, status, embedding, progress, error, text, chunk, fullText } = event.data;
      
      if ((status === 'progress' || status === 'model_progress') && onProgress) {
        onProgress(progress);
        return;
      }

      if (id !== undefined && generateCallbacks[id]) {
        if (status === 'streaming' || status === 'complete' || status === 'error') {
           generateCallbacks[id](event.data);
           if (status === 'complete' || status === 'error') {
             // Let the callback clean up or we can clean up
           }
        }
      }
      
      if (id !== undefined && resolvers[id]) {
        if (status === 'error') {
          resolvers[id].reject(new Error(error));
          delete resolvers[id];
        } else if (status === 'complete' && embedding) {
          resolvers[id].resolve(embedding);
          delete resolvers[id];
        }
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

export function generateAnswer(
  query: string,
  context: string,
  onStream: (chunk: string, fullText: string) => void
): Promise<string> {
  if (!worker) throw new Error("Worker not initialized");
  
  const id = ++messageIdCounter;
  return new Promise((resolve, reject) => {
    generateCallbacks[id] = (event) => {
      if (event.status === 'streaming') {
        onStream(event.chunk, event.fullText);
      } else if (event.status === 'complete') {
        delete generateCallbacks[id];
        resolve(event.text);
      } else if (event.status === 'error') {
        delete generateCallbacks[id];
        reject(new Error(event.error));
      }
    };
    worker!.postMessage({ type: 'generate', id, text: query, context });
  });
}
