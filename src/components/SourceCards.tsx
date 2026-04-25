import type { Source } from '../lib/types';

interface SourceCardsProps {
  sources: Source[];
}

export function SourceCards({ sources }: SourceCardsProps) {
  if (sources.length === 0) return null;
  
  return (
    <div className="mt-6 pt-4 border-t border-slate-200">
      <p className="text-[10px] uppercase tracking-widest text-ash font-bold mb-3">Citations</p>
      <div className="space-y-2">
        {sources.map((src, i) => (
          <div key={i} className="flex items-baseline gap-2 text-xs">
            <span className="text-ash font-mono">[{i + 1}]</span>
            <span className="text-ink">
              Document: <span className="italic">{src.chapter}</span>. 
              Section: <span className="font-medium bg-highlighter px-1">{src.section}</span>.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
