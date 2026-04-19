import { useState, useRef, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { MessageBubble } from './components/MessageBubble';
import { TypingIndicator } from './components/TypingIndicator';
import { InputBar } from './components/InputBar';
import { useChat } from './hooks/useChat';
import { CHAPTERS } from './lib/ncertData';

const SUGGESTIONS: { text: string; chapter: number }[] = [
  { text: 'What is a redox reaction?',         chapter: 1 },
  { text: 'What is the pH scale?',             chapter: 2 },
  { text: 'What is the reactivity series?',    chapter: 3 },
  { text: "Explain Snell's Law",               chapter: 10 },
  { text: 'What is corrosion and how to prevent it?', chapter: 1 },
  { text: 'What is a neutralisation reaction?', chapter: 2 },
  { text: 'How does a concave mirror work?',   chapter: 10 },
  { text: 'How are metals extracted?',         chapter: 3 },
];

const CHAPTER_EMOJI: Record<number, string> = { 1: '⚗️', 2: '🧪', 3: '⚙️', 10: '💡' };

export default function App() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [inputValue, setInputValue]       = useState('');
  const { messages, isStreaming, sendMessage, clearChat } = useChat(activeChapter);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSuggestion = (text: string) => {
    sendMessage(text);
  };

  const activeChapterData = CHAPTERS.find((c) => c.num === activeChapter);

  const showWelcome = messages.length === 0;

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#070b14', color: '#e2e8f0' }}>

      {/* Background ambient orbs */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 600, height: 600, top: -200, left: -200,
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500, bottom: -150, right: 100,
            background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Sidebar */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Sidebar
          activeChapter={activeChapter}
          onSelectChapter={setActiveChapter}
          onClearChat={clearChat}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden" style={{ position: 'relative', zIndex: 5 }}>

        {/* Header */}
        <header
          className="shrink-0 px-6 py-4 flex items-center justify-between"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(7,11,20,0.9)', backdropFilter: 'blur(12px)' }}
        >
          <div>
            <h1 className="font-semibold text-slate-200 text-base">
              {activeChapterData ? `${CHAPTER_EMOJI[activeChapter!]} ${activeChapterData.title}` : '🔬 Science Tutor'}
            </h1>
            <p className="text-xs text-slate-600 mt-0.5">
              {activeChapterData
                ? `Filtered to Chapter ${activeChapter}`
                : 'All Chapters · NCERT Class 10 Science'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* RAG badge */}
            <div
              className="rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-medium"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                style={{ animation: 'pulse 2.5s ease-in-out infinite' }}
              />
              <span className="text-slate-400">RAG</span>
              <span className="text-slate-600">·</span>
              <span className="text-indigo-400">Offline</span>
            </div>
          </div>
        </header>

        {/* Messages / Welcome */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5" id="messages-area">

          {showWelcome && (
            <div className="flex flex-col items-center justify-center min-h-full py-12 animate-fade-in">
              {/* Hero icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))',
                  border: '1px solid rgba(99,102,241,0.25)',
                  boxShadow: '0 0 60px rgba(99,102,241,0.15)',
                }}
              >
                🔬
              </div>

              <h2 className="text-2xl font-bold text-slate-100 mb-2">Hey! I'm ClassM8</h2>
              <p className="text-slate-500 text-center max-w-sm text-sm leading-relaxed mb-10">
                Ask me anything about <strong className="text-slate-400">CBSE Class 10 Science</strong>.
                I'll find the answer directly from your NCERT textbook — fully offline, no internet needed.
              </p>

              {/* Suggestion grid */}
              <div className="w-full max-w-2xl grid grid-cols-2 gap-2.5">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestion(s.text)}
                    className="text-left rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94a3b8',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(99,102,241,0.12)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(99,102,241,0.35)';
                      (e.currentTarget as HTMLButtonElement).style.color = '#c4b5fd';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8';
                    }}
                  >
                    <span className="mr-2">{CHAPTER_EMOJI[s.chapter]}</span>
                    {s.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat messages */}
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}

          {/* Typing indicator — show briefly before streaming starts */}
          <TypingIndicator visible={isStreaming && (messages.length === 0 || messages[messages.length - 1].role === 'user')} />

          <div ref={bottomRef} />
        </div>

        {/* Input */}
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
