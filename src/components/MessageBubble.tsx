import type { Message } from '../lib/types';
import { SourceCards } from './SourceCards';

interface MessageBubbleProps {
  message: Message;
}

function formatContent(text: string): React.ReactNode {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-violet-300 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Split newlines into paragraphs
    return part.split('\n\n').map((para, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {para}
        {j < part.split('\n\n').length - 1 && <br />}
      </span>
    ));
  });
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex justify-end animate-slide-up">
        <div
          className="max-w-[75%] rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white leading-relaxed"
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
        >
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 animate-slide-up">
      {/* Avatar */}
      <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/20">
        C
      </div>

      {/* Bubble */}
      <div className="flex-1 max-w-[85%]">
        <div className="glass rounded-2xl rounded-tl-sm px-4 py-3">
          <p className="text-sm text-slate-200 leading-relaxed">
            {formatContent(message.content)}
            {message.streaming && (
              <span
                className="inline-block w-0.5 h-4 bg-indigo-400 ml-0.5 align-text-bottom"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            )}
          </p>
        </div>

        {/* Sources — shown only when streaming is done */}
        {!message.streaming && message.sources && message.sources.length > 0 && (
          <SourceCards sources={message.sources} />
        )}

        {/* Timestamp */}
        {!message.streaming && (
          <p className="text-xs text-slate-600 mt-1.5 ml-1">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </div>
  );
}
