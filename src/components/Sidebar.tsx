import { CHAPTERS } from '../lib/ncertData';

interface SidebarProps {
  activeChapter: number | null;
  onSelectChapter: (n: number | null) => void;
  onClearChat: () => void;
  onUploadPdf?: (file: File) => void;
  uploadedDocumentName: string | null;
}

import { useRef } from 'react';

export function Sidebar({ activeChapter, onSelectChapter, onClearChat, onUploadPdf, uploadedDocumentName }: SidebarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  return (
    <aside className="w-64 shrink-0 flex flex-col h-screen bg-paper-alt border-r border-slate-200">
      {/* Logo Area */}
      <div className="px-6 pt-8 pb-6">
        <div className="font-serif text-2xl tracking-tight text-ink">ClassM8</div>
        <div className="text-xs text-graphite mt-1 tracking-wide uppercase">CBSE Science · Cl 10</div>
      </div>

      {/* Offline Status */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-ink"></div>
          <span className="text-xs font-medium text-ink uppercase tracking-wider">Local Mode</span>
        </div>
        <p className="text-[10px] text-graphite mt-1">NCERT data cached.</p>
      </div>

      {/* Table of Contents */}
      <div className="px-6 mb-3">
        <p className="text-[10px] font-bold text-ash uppercase tracking-widest">Table of Contents</p>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {!uploadedDocumentName ? (
          <>
            <button
              onClick={() => onSelectChapter(null)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeChapter === null 
                  ? 'bg-white shadow-sm border border-slate-200 text-ink font-medium' 
                  : 'text-graphite hover:text-ink hover:bg-slate-100'
              }`}
            >
              All Chapters
            </button>

            {CHAPTERS.map((ch) => {
              const active = activeChapter === ch.num;
              return (
                <button
                  key={ch.num}
                  onClick={() => onSelectChapter(ch.num)}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    active 
                      ? 'bg-white shadow-sm border border-slate-200 text-ink font-medium' 
                      : 'text-graphite hover:text-ink hover:bg-slate-100'
                  }`}
                >
                  <span className="text-ash mr-2 block text-xs mb-0.5">Chapter {ch.num}</span>
                  <span className="block leading-snug">{ch.title}</span>
                </button>
              );
            })}
          </>
        ) : (
          <button
            className="w-full text-left px-3 py-3 rounded text-sm transition-colors bg-white shadow-sm border border-slate-200 text-ink font-medium"
          >
            <span className="text-ash mr-2 block text-xs mb-0.5">Uploaded Document</span>
            <span className="block leading-snug truncate" title={uploadedDocumentName}>
              {uploadedDocumentName}
            </span>
          </button>
        )}
      </nav>

      {/* Upload PDF */}
      <div className="px-4 py-3 border-t border-slate-200 bg-paper-alt">
        <input 
          type="file" 
          accept="application/pdf" 
          className="hidden" 
          ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file && onUploadPdf) onUploadPdf(file);
            e.target.value = '';
          }}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full py-2 mb-2 text-xs font-medium text-white bg-ink hover:bg-slate-800 border border-ink rounded transition-colors"
        >
          Upload PDF
        </button>
        <button
          onClick={onClearChat}
          className="w-full py-2 text-xs text-graphite hover:text-ink border border-slate-300 rounded transition-colors bg-white hover:bg-slate-50"
        >
          Clear Workspace
        </button>
      </div>
    </aside>
  );
}
