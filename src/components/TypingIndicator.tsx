interface TypingIndicatorProps {
  visible: boolean;
}

export function TypingIndicator({ visible }: TypingIndicatorProps) {
  if (!visible) return null;
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      {/* Avatar */}
      <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/20">
        C
      </div>
      {/* Bubble */}
      <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-2 h-2 rounded-full bg-indigo-400"
            style={{
              animation: 'bounceDot 1.2s infinite',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
        <span className="ml-2 text-xs text-slate-500">Searching NCERT…</span>
      </div>
    </div>
  );
}
