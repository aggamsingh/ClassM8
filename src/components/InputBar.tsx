import { useRef, useEffect, KeyboardEvent } from 'react';

interface InputBarProps {
  onSend: (query: string) => void;
  disabled: boolean;
  value: string;
  onChange: (v: string) => void;
  activeDocumentName?: string | null;
}

export function InputBar({ onSend, disabled, value, onChange, activeDocumentName }: InputBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${Math.min(ta.scrollHeight, 140)}px`;
  }, [value]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value);
    onChange('');
  };

  return (
    <div className="shrink-0 p-6 border-t border-slate-200 bg-paper">
      <div className="max-w-3xl mx-auto flex gap-4 items-end">
        <div className="flex-1 bg-white border border-slate-300 rounded shadow-sm focus-within:border-ink focus-within:ring-1 focus-within:ring-ink transition-all">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder="Type your question..."
            rows={1}
            className="w-full bg-transparent text-ink placeholder-ash resize-none outline-none py-3 px-4 text-base font-sans"
            style={{ maxHeight: '140px' }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          className="shrink-0 h-12 px-6 rounded bg-ink text-white font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Ask
        </button>
      </div>
      <p className="text-center text-[10px] uppercase tracking-widest text-ash mt-4 font-bold">
        {activeDocumentName 
          ? `Answers sourced directly from ${activeDocumentName}` 
          : "Upload a document to start asking questions"}
      </p>
    </div>
  );
}
