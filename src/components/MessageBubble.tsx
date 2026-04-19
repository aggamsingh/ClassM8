import type { Message } from '../lib/types';
import { SourceCards } from './SourceCards';

interface MessageBubbleProps {
  message: Message;
}

function formatContent(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part.split('\n\n').map((para, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <span className="block h-4" />}
        {para}
      </span>
    ));
  });
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="py-6 border-b border-slate-100 animate-fade-in-up">
        <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
          {message.content}
        </h2>
      </div>
    );
  }

  return (
    <div className="py-6 animate-fade-in-up">
      <div className="text-base md:text-lg text-graphite leading-relaxed font-sans max-w-3xl">
        {formatContent(message.content)}
        {message.streaming && (
          <span 
            className="inline-block w-2 h-4 bg-ink ml-1 align-middle" 
            style={{ animation: 'blink 1s step-end infinite' }}
          />
        )}
      </div>

      {!message.streaming && message.sources && message.sources.length > 0 && (
        <SourceCards sources={message.sources} />
      )}
    </div>
  );
}
