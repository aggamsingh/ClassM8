import { useState, useRef, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { MessageBubble } from './components/MessageBubble';
import { TypingIndicator } from './components/TypingIndicator';
import { InputBar } from './components/InputBar';
import { useChat } from './hooks/useChat';
import { initWorker, getEmbedding } from './lib/workerClient';
import { extractTextFromPDF, chunkText } from './lib/pdfParser';
import { setCustomChunks } from './lib/retrieval';
import type { NcertChunk } from './lib/ncertData';

const SUGGESTIONS = [
  { text: "What is a redox reaction?", chapter: 1 },
  { text: "What is the pH scale?", chapter: 2 },
  { text: "Explain Snell's Law", chapter: 10 },
  { text: "How are metals extracted?", chapter: 3 },
];

export default function App() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [inputValue, setInputValue]       = useState('');
  const [isProcessing, setIsProcessing]   = useState(false);
  const [processStatus, setProcessStatus] = useState('');
  const { messages, isStreaming, sendMessage, clearChat } = useChat(activeChapter);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleUploadPdf = async (file: File) => {
    setIsProcessing(true);
    try {
      setProcessStatus('Extracting text from PDF...');
      const text = await extractTextFromPDF(file);
      const chunks = chunkText(text);

      setProcessStatus('Initializing AI Engine...');
      await initWorker((progress) => {
        if (progress.status === 'download') {
          setProcessStatus(`Downloading AI Model...`);
        } else if (progress.status === 'progress') {
          setProcessStatus(`Downloading AI Model... ${Math.round(progress.progress)}%`);
        }
      });

      const ncertChunks: NcertChunk[] = [];
      
      for (let i = 0; i < chunks.length; i++) {
        setProcessStatus(`Analyzing Content... ${Math.round((i / chunks.length) * 100)}%`);
        const chunkStr = chunks[i];
        const embedding = await getEmbedding(chunkStr);
        ncertChunks.push({
          id: `custom-${i}`,
          chapter: file.name.replace('.pdf', ''),
          chapterNum: 99,
          section: `Part ${i + 1}`,
          text: chunkStr,
          embedding,
        });
      }

      setCustomChunks(ncertChunks);
      setActiveChapter(99);
      clearChat();
    } catch (e: any) {
      console.error(e);
      alert("Error processing PDF: " + e.message);
    } finally {
      setIsProcessing(false);
      setProcessStatus('');
    }
  };

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
          setCustomChunks([]);
        }}
        onUploadPdf={handleUploadPdf}
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
          disabled={isStreaming || isProcessing}
          value={inputValue}
          onChange={setInputValue}
        />
        
        {isProcessing && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-paper border border-slate-200 p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-ink rounded-full animate-spin mx-auto mb-4"></div>
              <h3 className="font-serif text-xl text-ink mb-2">Processing Document</h3>
              <p className="text-sm text-graphite font-medium">{processStatus}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
