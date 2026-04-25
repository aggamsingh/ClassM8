

export interface SidebarProps {
  documents: string[];
  activeDocumentIndex: number | null;
  onSelectDocument: (index: number | null) => void;
  onClearChat: () => void;
  onUploadPdf?: (file: File) => void;
}

import { useRef } from 'react';

export function Sidebar({ documents, activeDocumentIndex, onSelectDocument, onClearChat, onUploadPdf }: SidebarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  return (
    <aside className="w-64 shrink-0 flex flex-col h-screen bg-paper-alt border-r border-slate-200">
      {/* Logo Area */}
      <div className="px-6 pt-8 pb-6">
        <div className="font-serif text-2xl tracking-tight text-ink">ClassM8</div>
        <div className="text-xs text-graphite mt-1 tracking-wide uppercase">AI Tutor</div>
      </div>

      {/* Offline Status */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-ink"></div>
          <span className="text-xs font-medium text-ink uppercase tracking-wider">Local Mode</span>
        </div>
        <p className="text-[10px] text-graphite mt-1">100% offline and private.</p>
      </div>

      {/* Uploaded Documents */}
      <div className="px-6 mb-3 flex items-center justify-between">
        <p className="text-[10px] font-bold text-ash uppercase tracking-widest">Your Documents</p>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {documents.length === 0 ? (
          <div className="px-3 py-4 text-xs text-graphite italic text-center border border-dashed border-slate-300 rounded">
            No documents uploaded yet.
          </div>
        ) : (
          documents.map((docName, index) => {
            const active = activeDocumentIndex === index;
            return (
              <button
                key={index}
                onClick={() => onSelectDocument(index)}
                className={`w-full text-left px-3 py-3 rounded text-sm transition-colors ${
                  active 
                    ? 'bg-white shadow-sm border border-slate-200 text-ink font-medium' 
                    : 'text-graphite hover:text-ink hover:bg-slate-100 border border-transparent'
                }`}
              >
                <span className="text-ash mr-2 block text-[10px] uppercase tracking-wider mb-0.5">Document {index + 1}</span>
                <span className="block leading-snug truncate" title={docName}>
                  {docName}
                </span>
              </button>
            );
          })
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
