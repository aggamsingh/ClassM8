import { pipeline, env } from '@huggingface/transformers';

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

class TextGenerationSingleton {
  static task: any = 'text-generation';
  static model = 'onnx-community/SmolLM2-360M-Instruct';
  static instance: any = null;

  static async getInstance(progress_callback?: any) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, {
        progress_callback,
        dtype: 'q4f16',
      });
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

  if (type === 'generate') {
    try {
      // First load the model if not already loaded, reporting progress
      const generator = await TextGenerationSingleton.getInstance((x: any) => {
        if (x.status !== 'done' && x.status !== 'ready') {
          self.postMessage({ id, status: 'model_progress', progress: x });
        }
      });

      const systemPrompt = `You are an accurate academic tutor. Your ONLY job is to answer the student's question using ONLY the provided context paragraphs below. Rules:
1. Use ONLY information from the context. Do NOT add outside knowledge.
2. Be concise and clear — 2-4 sentences max.
3. If the context does not contain the answer, say "I don't have enough information in the provided document to answer this."
4. Respond ONLY in English.`;

      const messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Context:\n${event.data.context}\n\nQuestion: ${text}\n\nAnswer using ONLY the context above:` }
      ];

      let lastText = "";
      const output = await generator(messages, {
        max_new_tokens: 200,
        temperature: 0.2,
        top_k: 50,
        top_p: 0.9,
        repetition_penalty: 1.15,
        return_full_text: false,
        callback_function: (output: any) => {
          // Extract generated text so far for streaming
          try {
            const currentOutput = generator.tokenizer.decode(
              output[0].output_token_ids,
              { skip_special_tokens: true }
            );
            // Only send the newly generated portion
            if (currentOutput.length > lastText.length) {
              const newText = currentOutput.slice(lastText.length);
              lastText = currentOutput;
              self.postMessage({ id, status: 'streaming', chunk: newText, fullText: currentOutput });
            }
          } catch {
            // Streaming callback may fail on some token boundaries; ignore
          }
        }
      });

      const finalText = output[0].generated_text.trim();
      self.postMessage({
        id,
        status: 'complete',
        text: finalText
      });
    } catch (e: any) {
      self.postMessage({ id, status: 'error', error: e.message });
    }
  }
});
