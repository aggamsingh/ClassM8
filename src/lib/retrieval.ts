import { NCERT_CHUNKS, type NcertChunk } from './ncertData';

const STOPWORDS = new Set([
  'a','an','the','is','it','in','of','to','and','or','for','on','with',
  'that','this','are','was','were','be','been','being','have','has','had',
  'do','does','did','will','would','could','should','may','might','shall',
  'at','by','from','as','if','its','not','but','so','yet','nor',
  'what','which','who','how','when','where','why','all','any','each',
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

function scoreChunk(queryTokens: string[], chunk: NcertChunk): number {
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
): RetrievalResult[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  const pool = chapterFilter
    ? NCERT_CHUNKS.filter((c) => c.chapterNum === chapterFilter)
    : NCERT_CHUNKS;

  let results = pool
    .map((chunk) => ({ chunk, score: scoreChunk(queryTokens, chunk) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
    
  if (results.length === 0 && chapterFilter !== null) {
    results = NCERT_CHUNKS
      .map((chunk) => ({ chunk, score: scoreChunk(queryTokens, chunk) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }

  return results;
}

/** Compose a readable answer from the top retrieved chunk */
export function buildAnswer(query: string, results: RetrievalResult[]): string {
  if (results.length === 0) {
    return "I couldn't find information about that in your NCERT Science textbook. Try rephrasing, or ask about Chemical Reactions, Acids & Bases, Metals, or Light.";
  }
  const top = results[0].chunk;

  const intro = buildIntro(query, top);
  return `${intro}\n\n${top.text}`;
}

function buildIntro(query: string, chunk: NcertChunk): string {
  const q = query.trim().toLowerCase();

  if (q.startsWith('what is') || q.startsWith('define') || q.startsWith('what are')) {
    const term = q.replace(/^(what is|what are|define)\s+/i, '').replace(/\?$/, '');
    return `Great question! Here's what your NCERT textbook says about **${term}**:`;
  }
  if (q.startsWith('how')) {
    return `Here's how your NCERT textbook explains this:`;
  }
  if (q.startsWith('why')) {
    return `Your NCERT textbook explains the reason as follows:`;
  }
  if (q.includes('example') || q.includes('examples')) {
    return `Here are the examples from your NCERT textbook:`;
  }
  return `Based on your NCERT textbook (${chunk.chapter}):`;
}
