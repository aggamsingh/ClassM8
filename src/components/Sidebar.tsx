import { CHAPTERS } from '../lib/ncertData';

const CHAPTER_EMOJI: Record<number, string> = { 1: '⚗️', 2: '🧪', 3: '⚙️', 10: '💡' };

interface SidebarProps {
  activeChapter: number | null;
  onSelectChapter: (n: number | null) => void;
  onClearChat: () => void;
}

export function Sidebar({ activeChapter, onSelectChapter, onClearChat }: SidebarProps) {
  return (
    <aside
      className="w-64 shrink-0 flex flex-col h-screen border-r"
      style={{
        background: 'rgba(10,14,24,0.98)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      {/* Logo */}
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-1">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)' }}
          >
            C
          </div>
          <div>
            <div
              className="text-lg font-bold"
              style={{
                background: 'linear-gradient(135deg,#818cf8,#c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ClassM8
            </div>
            <div className="text-xs text-slate-600 -mt-0.5">CBSE Science · Class 10</div>
          </div>
        </div>
      </div>

      {/* Offline Status */}
      <div className="mx-4 mb-5">
        <div
          className="rounded-xl p-3 flex items-center gap-2.5"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <span
            className="w-2 h-2 rounded-full shrink-0 bg-emerald-400"
            style={{ animation: 'pulse 2.5s ease-in-out infinite' }}
          />
          <div>
            <p className="text-xs font-semibold text-emerald-400">Offline Mode</p>
            <p className="text-xs text-slate-600">NCERT data loaded locally</p>
          </div>
        </div>
      </div>

      {/* Chapter Filter */}
      <div className="px-4 mb-2">
        <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest">Filter by Chapter</p>
      </div>

      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
        {/* All Chapters */}
        <button
          onClick={() => onSelectChapter(null)}
          className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150"
          style={{
            background: activeChapter === null ? 'rgba(99,102,241,0.15)' : 'transparent',
            borderLeft: activeChapter === null ? '2px solid #6366f1' : '2px solid transparent',
            color: activeChapter === null ? '#a5b4fc' : '#64748b',
          }}
        >
          <span>📖</span>
          <span className="font-medium">All Chapters</span>
        </button>

        {CHAPTERS.map((ch) => {
          const active = activeChapter === ch.num;
          return (
            <button
              key={ch.num}
              onClick={() => onSelectChapter(ch.num)}
              className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150"
              style={{
                background: active ? 'rgba(99,102,241,0.15)' : 'transparent',
                borderLeft: active ? '2px solid #6366f1' : '2px solid transparent',
                color: active ? '#a5b4fc' : '#64748b',
              }}
            >
              <span>{CHAPTER_EMOJI[ch.num]}</span>
              <span className="font-medium leading-tight">{ch.title}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer actions */}
      <div className="p-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <button
          onClick={onClearChat}
          className="w-full flex items-center justify-center gap-2 text-xs text-slate-600 hover:text-slate-400 py-2 rounded-lg transition-colors"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear Chat
        </button>
        <p className="text-center text-xs text-slate-700 mt-3">
          Powered by NCERT Textbooks
        </p>
      </div>
    </aside>
  );
}
