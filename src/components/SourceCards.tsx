import type { Source } from '../lib/types';

const CHAPTER_COLORS: Record<number, { bg: string; text: string; border: string }> = {
  1:  { bg: 'rgba(99,102,241,0.12)',  text: '#a78bfa', border: 'rgba(139,92,246,0.3)' },
  2:  { bg: 'rgba(20,184,166,0.12)',  text: '#5eead4', border: 'rgba(20,184,166,0.3)' },
  3:  { bg: 'rgba(245,158,11,0.12)',  text: '#fbbf24', border: 'rgba(245,158,11,0.3)' },
  10: { bg: 'rgba(59,130,246,0.12)',  text: '#93c5fd', border: 'rgba(59,130,246,0.3)'  },
};

interface SourceCardsProps {
  sources: Source[];
}

export function SourceCards({ sources }: SourceCardsProps) {
  if (sources.length === 0) return null;
  return (
    <div className="mt-3 space-y-1.5">
      <p className="text-xs text-slate-600 font-medium mb-2">📚 Sources from NCERT</p>
      {sources.map((src, i) => {
        const color = CHAPTER_COLORS[src.chapterNum] ?? CHAPTER_COLORS[1];
        return (
          <div
            key={i}
            className="flex items-start gap-2 rounded-lg px-3 py-2 text-xs"
            style={{
              background: color.bg,
              border: `1px solid ${color.border}`,
            }}
          >
            <span className="mt-0.5 shrink-0 text-slate-500">#{i + 1}</span>
            <div>
              <span style={{ color: color.text }} className="font-semibold">
                Ch. {src.chapterNum}: {src.chapter}
              </span>
              <span className="text-slate-500 mx-1.5">·</span>
              <span className="text-slate-400">{src.section}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
