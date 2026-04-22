import * as pdfjsLib from 'pdfjs-dist';

// Use the local worker from node_modules so it works 100% offline
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).toString();

export async function extractTextFromPDF(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  
  let fullText = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(' ');
    fullText += pageText + '\n\n';
  }
  return fullText;
}

export function chunkText(text: string, maxChars = 500): string[] {
  // Simple paragraph-based or char-based chunking
  const rawChunks = text.split(/\n\s*\n/).map(c => c.trim()).filter(c => c.length > 50);
  
  const finalChunks: string[] = [];
  
  for (const chunk of rawChunks) {
    if (chunk.length <= maxChars) {
      finalChunks.push(chunk);
    } else {
      // Split into sentences roughly
      const sentences = chunk.match(/[^.!?]+[.!?]+/g) || [chunk];
      let current = '';
      for (const sentence of sentences) {
        if (current.length + sentence.length > maxChars) {
          if (current) finalChunks.push(current.trim());
          current = sentence.trim();
        } else {
          current += ' ' + sentence.trim();
        }
      }
      if (current) finalChunks.push(current.trim());
    }
  }
  return finalChunks;
}
