import { useState, useRef, useCallback } from 'react';
import { retrieve, buildAnswer, buildContext, type RetrievalResult, CUSTOM_CHUNKS } from '../lib/retrieval';
import { findCachedAnswer } from '../lib/ncertQA';
import type { Message, Source } from '../lib/types';
import { getEmbedding, generateAnswer } from '../lib/workerClient';

const STREAM_SPEED_MS = 10;

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

      await delay(300);

      // ── FAST-PATH: hardcoded Q&A cache lookup ──────────────────────────────
      const cached = findCachedAnswer(query);
      if (cached) {
        const sources: Source[] = [{
          chapter: cached.chapter,
          section: cached.section,
          chapterNum: cached.chapterNum,
          score: 1.0,
        }];

        const assistantId = `assistant-${Date.now()}`;
        setMessages((prev) => [...prev, {
          id: assistantId, role: 'assistant', content: '', sources,
          timestamp: new Date(), streaming: true,
        }]);

        const text = cached.answer;
        for (let i = 0; i <= text.length; i++) {
          if (abortRef.current) break;
          setMessages((prev) => prev.map((m) =>
            m.id === assistantId ? { ...m, content: text.slice(0, i), streaming: i < text.length } : m
          ));
          if (i < text.length) await delay(STREAM_SPEED_MS);
        }

        setMessages((prev) => prev.map((m) => m.id === assistantId ? { ...m, streaming: false } : m));
        setIsStreaming(false);
        return;
      }

      // ── NORMAL PATH: embed → retrieve top-5 → LLM ─────────────────────────
      await delay(300 + Math.random() * 400);

      let queryEmbedding: number[] | null = null;
      if (CUSTOM_CHUNKS.length > 0) {
        try { queryEmbedding = await getEmbedding(query); }
        catch (e) { console.error("Embedding failed:", e); }
      }

      const results: RetrievalResult[] = retrieve(query, chapterFilter, 5, queryEmbedding);
      const fullAnswer = buildAnswer(query, results);
      const sources: Source[] = results.map((r) => ({
        chapter: r.chunk.chapter, section: r.chunk.section,
        chapterNum: r.chunk.chapterNum, score: r.score,
      }));

      const assistantId = `assistant-${Date.now()}`;
      setMessages((prev) => [...prev, {
        id: assistantId, role: 'assistant', content: '', sources,
        timestamp: new Date(), streaming: true,
      }]);

      if (CUSTOM_CHUNKS.length > 0 && results.length > 0) {
        let textBuffer = "";
        let displayedText = "";
        let isGenerationDone = false;
        const contextForLLM = buildContext(results);

        const animate = async () => {
          while (!isGenerationDone || displayedText.length < textBuffer.length) {
            if (abortRef.current) break;
            if (displayedText.length < textBuffer.length) {
              displayedText += textBuffer[displayedText.length];
              setMessages((prev) => prev.map((m) =>
                m.id === assistantId ? { ...m, content: displayedText, streaming: true } : m
              ));
              await delay(STREAM_SPEED_MS);
            } else { await delay(10); }
          }
        };

        const animationPromise = animate();
        try {
          await generateAnswer(query, contextForLLM, (_chunk, fullText) => { textBuffer = fullText; });
        } catch (e) {
          console.error("Generation failed:", e);
          textBuffer = fullAnswer;
        }
        isGenerationDone = true;
        await animationPromise;

      } else {
        for (let i = 0; i <= fullAnswer.length; i++) {
          if (abortRef.current) break;
          setMessages((prev) => prev.map((m) =>
            m.id === assistantId ? { ...m, content: fullAnswer.slice(0, i), streaming: i < fullAnswer.length } : m
          ));
          if (i < fullAnswer.length) await delay(STREAM_SPEED_MS);
        }
      }

      setMessages((prev) => prev.map((m) => m.id === assistantId ? { ...m, streaming: false } : m));
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
