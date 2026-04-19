import { useState, useRef, useEffect, useCallback } from 'react';
import { retrieve, buildAnswer, type RetrievalResult } from '../lib/retrieval';
import type { Message, Source } from '../lib/types';

const STREAM_SPEED_MS = 12; // ms per character

export function useChat(chapterFilter: number | null) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef(false);

  const sendMessage = useCallback(
    async (query: string) => {
      if (!query.trim() || isStreaming) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: query.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsStreaming(true);
      abortRef.current = false;

      // Simulate retrieval delay (feels more "AI-like")
      await delay(600 + Math.random() * 400);

      const results: RetrievalResult[] = retrieve(query, chapterFilter);
      const fullAnswer = buildAnswer(query, results);
      const sources: Source[] = results.map((r) => ({
        chapter: r.chunk.chapter,
        section: r.chunk.section,
        chapterNum: r.chunk.chapterNum,
        score: r.score,
      }));

      // Start streaming message
      const assistantId = `assistant-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: 'assistant',
          content: '',
          sources,
          timestamp: new Date(),
          streaming: true,
        },
      ]);

      // Stream character by character
      for (let i = 0; i <= fullAnswer.length; i++) {
        if (abortRef.current) break;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: fullAnswer.slice(0, i), streaming: i < fullAnswer.length }
              : m,
          ),
        );
        if (i < fullAnswer.length) await delay(STREAM_SPEED_MS);
      }

      // Finalize
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, streaming: false } : m,
        ),
      );
      setIsStreaming(false);
    },
    [isStreaming, chapterFilter],
  );

  const clearChat = useCallback(() => {
    abortRef.current = true;
    setMessages([]);
    setIsStreaming(false);
  }, []);

  return { messages, isStreaming, sendMessage, clearChat };
}

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
