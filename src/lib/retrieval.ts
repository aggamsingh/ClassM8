import { NCERT_CHUNKS, type NcertChunk } from './ncertData';

export let CUSTOM_CHUNKS: NcertChunk[] = [];

export function setCustomChunks(chunks: NcertChunk[]) {
  CUSTOM_CHUNKS = chunks;
}

export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

const STOPWORDS = new Set([
  'a','an','the','is','it','in','of','to','and','or','for','on','with',
  'that','this','are','was','were','be','been','being','have','has','had',
  'do','does','did','will','would','could','should','may','might','shall',
  'at','by','from','as','if','its','not','but','so','yet','nor',
  'what','which','who','how','when','where','why','all','any','each',
  'our','we','you','your','they','their','them','he','his','she','her',
  'my','mine','can','about','out','up','down','over','under','into'
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

function buildTermFreq(tokens: string[]): Map<string, number> {
  const freq = new Map<string, number>();
  tokens.forEach((t) => freq.set(t, (freq.get(t) ?? 0) + 1));
  return freq;
}

function scoreChunk(queryTokens: string[], chunk: NcertChunk, queryEmbedding?: number[] | null): number {
  if (queryEmbedding && chunk.embedding) {
    return cosineSimilarity(queryEmbedding, chunk.embedding);
  }

  const chunkText = `${chunk.text} ${chunk.section} ${chunk.chapter}`;
  const chunkTokens = tokenize(chunkText);
  const tf = buildTermFreq(chunkTokens);
  const totalTerms = chunkTokens.length || 1;

  let score = 0;
  for (const qt of queryTokens) {
    // Exact match (weighted higher)
    score += ((tf.get(qt) ?? 0) / totalTerms) * 3;

    // Partial / stem match
    for (const [ct, count] of tf.entries()) {
      if (ct !== qt && (ct.startsWith(qt) || qt.startsWith(ct))) {
        score += (count / totalTerms) * 1.5;
      }
    }
  }
  return score;
}

export interface RetrievalResult {
  chunk: NcertChunk;
  score: number;
}

export function retrieve(
  query: string,
  chapterFilter: number | null = null,
  topK = 3,
  queryEmbedding: number[] | null = null
): RetrievalResult[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0 && !queryEmbedding) return [];

  const activePool = CUSTOM_CHUNKS.length > 0 ? CUSTOM_CHUNKS : NCERT_CHUNKS;

  const pool = chapterFilter
    ? activePool.filter((c) => c.chapterNum === chapterFilter)
    : activePool;

  const threshold = queryEmbedding ? 0.35 : 0.05;

  let results = pool
    .map((chunk) => ({ chunk, score: scoreChunk(queryTokens, chunk, queryEmbedding) }))
    .filter((r) => r.score > threshold)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
    
  if (results.length === 0 && chapterFilter !== null) {
    results = activePool
      .map((chunk) => ({ chunk, score: scoreChunk(queryTokens, chunk, queryEmbedding) }))
      .filter((r) => r.score > threshold)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }

  return results;
}

/** Build a numbered context string from top-N results for the LLM prompt. */
export function buildContext(results: RetrievalResult[]): string {
  return results
    .map((r, i) => `[Paragraph ${i + 1} — ${r.chunk.section}]\n${r.chunk.text}`)
    .join('\n\n');
}


export function buildAnswer(query: string, results: RetrievalResult[]): string {
  if (results.length === 0) {
    if (CUSTOM_CHUNKS.length > 0) {
      return "I couldn't find information about that in your uploaded document. Try rephrasing, or ask doubts related to the same chapter.";
    }
    return "I couldn't find information about that in your NCERT Science textbook. Try rephrasing, or ask about Chemical Reactions, Acids & Bases, Metals, or Light.";
  }
  const top = results[0].chunk;

  const intro = buildIntro(query, top);
  return `${intro}\n\n${top.text}`;
}

function buildIntro(query: string, chunk: NcertChunk): string {
  const q = query.trim().toLowerCase();
  const sourceName = CUSTOM_CHUNKS.length > 0 ? "uploaded document" : "NCERT textbook";

  if (q.startsWith('what is') || q.startsWith('define') || q.startsWith('what are')) {
    const term = q.replace(/^(what is|what are|define)\s+/i, '').replace(/\?$/, '');
    return `Great question! Here's what your ${sourceName} says about **${term}**:`;
  }
  if (q.startsWith('how')) {
    return `Here's how your ${sourceName} explains this:`;
  }
  if (q.startsWith('why')) {
    return `Your ${sourceName} explains the reason as follows:`;
  }
  if (q.includes('example') || q.includes('examples')) {
    return `Here are the examples from your ${sourceName}:`;
  }
  return `Based on your ${sourceName} (${chunk.chapter}):`;
}
