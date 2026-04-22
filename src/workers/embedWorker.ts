import { pipeline, env } from '@xenova/transformers';

// Skip local model check since we are running in the browser
env.allowLocalModels = false;

class PipelineSingleton {
  static task: any = 'feature-extraction';
  static model = 'Xenova/all-MiniLM-L6-v2';
  static instance: any = null;

  static async getInstance(progress_callback?: any) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, { progress_callback });
    }
    return this.instance;
  }
}

self.addEventListener('message', async (event) => {
  const { id, text, type } = event.data;

  if (type === 'load') {
    try {
      await PipelineSingleton.getInstance((x: any) => {
        self.postMessage({ status: 'progress', progress: x });
      });
      self.postMessage({ status: 'ready' });
    } catch (e: any) {
      self.postMessage({ status: 'error', error: e.message });
    }
    return;
  }

  if (type === 'embed') {
    try {
      const embedder = await PipelineSingleton.getInstance();
      const output = await embedder(text, { pooling: 'mean', normalize: true });
      self.postMessage({
        id,
        status: 'complete',
        embedding: Array.from(output.data),
      });
    } catch (e: any) {
      self.postMessage({ status: 'error', error: e.message });
    }
  }
});
