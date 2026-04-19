import { useRef, useEffect, KeyboardEvent } from 'react';

interface InputBarProps {
  onSend: (query: string) => void;
  disabled: boolean;
  value: string;
  onChange: (v: string) => void;
}

export function InputBar({ onSend, disabled, value, onChange }: InputBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
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
    <div
      className="shrink-0 p-4 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(7,11,20,0.95)' }}
    >
      <div className="flex gap-3 items-end max-w-4xl mx-auto">
        {/* Textarea wrapper */}
        <div
          className="flex-1 rounded-2xl px-4 py-2 flex items-end gap-2 transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
            boxShadow: value ? '0 0 0 2px rgba(99,102,241,0.25)' : 'none',
          }}
        >
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder="Ask anything from your NCERT textbook…"
            rows={1}
            className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-600 resize-none outline-none leading-relaxed py-1"
            style={{ maxHeight: '140px' }}
          />
        </div>

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            boxShadow: disabled || !value.trim() ? 'none' : '0 4px 15px rgba(99,102,241,0.35)',
          }}
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            style={{ transform: 'rotate(0deg)' }}
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>

      <p className="text-center text-xs text-slate-700 mt-2">
        Answers sourced exclusively from NCERT Class 10 Science · Press <kbd className="text-slate-600 font-mono">Enter</kbd> to send
      </p>
    </div>
  );
}
