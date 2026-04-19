interface TypingIndicatorProps {
  visible: boolean;
}

export function TypingIndicator({ visible }: TypingIndicatorProps) {
  if (!visible) return null;
  return (
    <div className="py-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <span 
          className="w-2 h-4 bg-graphite"
          style={{ animation: 'blink 1s step-end infinite' }}
        />
        <span className="text-sm font-sans text-ash italic">
          Retrieving context...
        </span>
      </div>
    </div>
  );
}
