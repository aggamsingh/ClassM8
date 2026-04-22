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

class TextGenerationSingleton {
  static task: any = 'text-generation';
  static model = 'Xenova/SmolLM-135M-Instruct'; // Lighter, faster model
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

  if (type === 'generate') {
    try {
      // First load the model if not already loaded, reporting progress
      const generator = await TextGenerationSingleton.getInstance((x: any) => {
        if (x.status !== 'done' && x.status !== 'ready') {
          self.postMessage({ id, status: 'model_progress', progress: x });
        }
      });

      const messages = [
        { role: "system", content: "You are an AI tutor. Answer the user's question conversationally using ONLY the provided context." },
        { role: "user", content: `Context: ${event.data.context}\n\nQuestion: ${text}` }
      ];

      // Format with chat template
      const prompt = generator.tokenizer.apply_chat_template(messages, { tokenize: false, add_generation_prompt: true });
      const promptTokenIds = generator.tokenizer(prompt).input_ids;
      const promptLength = promptTokenIds.data.length;

      let lastText = "";
      const output = await generator(prompt, {
        max_new_tokens: 256,
        temperature: 0.7,
        return_full_text: false,
        callback_function: (beams: any[]) => {
          // Extract only the newly generated tokens
          const newTokens = beams[0].output_token_ids.slice(promptLength);
          const generatedText = generator.tokenizer.decode(newTokens, { skip_special_tokens: true });
          
          const newText = generatedText.slice(lastText.length);
          lastText = generatedText;
          self.postMessage({ id, status: 'streaming', chunk: newText, fullText: generatedText });
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
