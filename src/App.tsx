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

interface DocumentData {
  name: string;
  chunks: NcertChunk[];
}

export default function App() {
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [activeDocumentIndex, setActiveDocumentIndex] = useState<number | null>(null);
  
  const [inputValue, setInputValue]       = useState('');
  const [isProcessing, setIsProcessing]   = useState(false);
  const [processStatus, setProcessStatus] = useState('');
  
  const { messages, isStreaming, sendMessage, clearChat } = useChat(activeDocumentIndex);
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

      const documentChunks: NcertChunk[] = [];
      
      for (let i = 0; i < chunks.length; i++) {
        setProcessStatus(`Analyzing Content... ${Math.round((i / chunks.length) * 100)}%`);
        const chunkStr = chunks[i];
        const embedding = await getEmbedding(chunkStr);
        documentChunks.push({
          id: `custom-${Date.now()}-${i}`,
          chapter: file.name.replace('.pdf', ''),
          chapterNum: 99,
          section: `Part ${i + 1}`,
          text: chunkStr,
          embedding,
        });
      }

      const docName = file.name.replace('.pdf', '');
      const newDoc: DocumentData = { name: docName, chunks: documentChunks };
      
      setDocuments(prev => {
        const next = [...prev, newDoc];
        const newIndex = next.length - 1;
        setActiveDocumentIndex(newIndex);
        setCustomChunks(documentChunks);
        return next;
      });
      
      clearChat();
    } catch (e: any) {
      console.error(e);
      alert("Error processing PDF: " + e.message);
    } finally {
      setIsProcessing(false);
      setProcessStatus('');
    }
  };

  const handleSelectDocument = (index: number | null) => {
    setActiveDocumentIndex(index);
    if (index !== null && documents[index]) {
      setCustomChunks(documents[index].chunks);
    } else {
      setCustomChunks([]);
    }
    clearChat();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const showWelcome = messages.length === 0;
  const activeDocumentName = activeDocumentIndex !== null && documents[activeDocumentIndex] 
    ? documents[activeDocumentIndex].name 
    : null;

  return (
    <div className="flex h-screen overflow-hidden bg-paper bg-grid-pattern">
      <Sidebar
        documents={documents.map(d => d.name)}
        activeDocumentIndex={activeDocumentIndex}
        onSelectDocument={handleSelectDocument}
        onClearChat={() => {
          clearChat();
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
                  An offline AI tutor. Upload your PDF documents and ask questions directly. Answers are generated 100% locally on your device.
                </p>

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest font-bold text-ash">
                    {documents.length > 0 ? "Ask a question to start" : "Upload a Document to Begin"}
                  </p>
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
          disabled={isStreaming || isProcessing || activeDocumentIndex === null}
          value={inputValue}
          onChange={setInputValue}
          activeDocumentName={activeDocumentName}
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
