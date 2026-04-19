import { useState, useRef, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { MessageBubble } from './components/MessageBubble';
import { TypingIndicator } from './components/TypingIndicator';
import { InputBar } from './components/InputBar';
import { useChat } from './hooks/useChat';

const SUGGESTIONS = [
  { text: "What is a redox reaction?", chapter: 1 },
  { text: "What is the pH scale?", chapter: 2 },
  { text: "Explain Snell's Law", chapter: 10 },
  { text: "How are metals extracted?", chapter: 3 },
];

export default function App() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [inputValue, setInputValue]       = useState('');
  const { messages, isStreaming, sendMessage, clearChat } = useChat(activeChapter);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const showWelcome = messages.length === 0;

  const visibleSuggestions = activeChapter
    ? SUGGESTIONS.filter(s => s.chapter === activeChapter)
    : SUGGESTIONS;

  return (
    <div className="flex h-screen overflow-hidden bg-paper bg-grid-pattern">
      <Sidebar
        activeChapter={activeChapter}
        onSelectChapter={setActiveChapter}
        onClearChat={() => {
          clearChat();
          setActiveChapter(null);
        }}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="flex-1 overflow-y-auto px-8 md:px-16 py-12" id="document-area">
          <div className="max-w-3xl mx-auto">
            {showWelcome && (
              <div className="pt-20 pb-12 animate-fade-in-up">
                <h1 className="font-serif text-5xl md:text-6xl text-ink tracking-tight mb-6">
                  ClassM8
                </h1>
                <p className="text-xl text-graphite font-serif italic max-w-2xl leading-relaxed mb-12">
                  An offline retrieval engine for the CBSE Class 10 Science syllabus. Ask a question, and it will cite the exact passage from your NCERT textbook.
                </p>

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest font-bold text-ash">Sample Inquiries</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {visibleSuggestions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(s.text)}
                        className="text-left px-5 py-4 border border-slate-200 bg-white rounded shadow-sm text-ink font-medium hover:border-ink hover:shadow-md transition-all group"
                      >
                        <span className="text-ash group-hover:text-ink mr-2 transition-colors">→</span>
                        {s.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}

            <TypingIndicator visible={isStreaming && (messages.length === 0 || messages[messages.length - 1].role === 'user')} />
            <div ref={bottomRef} className="h-8" />
          </div>
        </div>

        <InputBar
          onSend={sendMessage}
          disabled={isStreaming}
          value={inputValue}
          onChange={setInputValue}
        />
      </main>
    </div>
  );
}
