import { useState, useRef, useCallback } from 'react';
import { retrieve, buildAnswer, buildContext, type RetrievalResult, CUSTOM_CHUNKS } from '../lib/retrieval';
import type { Message, Source } from '../lib/types';
import { getEmbedding, generateAnswer } from '../lib/workerClient';

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

      let queryEmbedding: number[] | null = null;
      if (CUSTOM_CHUNKS.length > 0) {
        try {
          queryEmbedding = await getEmbedding(query);
        } catch (e) {
          console.error("Failed to generate query embedding:", e);
        }
      }

      const results: RetrievalResult[] = retrieve(query, chapterFilter, 5, queryEmbedding);
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

      if (CUSTOM_CHUNKS.length > 0 && results.length > 0) {
        let textBuffer = "";
        let displayedText = "";
        let isGenerationDone = false;
        
        // Build context from ALL top-5 retrieved chunks (not just #1)
        const contextForLLM = buildContext(results);

        // Character-by-character animation loop
        const animate = async () => {
          while (!isGenerationDone || displayedText.length < textBuffer.length) {
            if (abortRef.current) break;
            if (displayedText.length < textBuffer.length) {
              displayedText += textBuffer[displayedText.length];
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: displayedText, streaming: true }
                    : m,
                ),
              );
              await delay(STREAM_SPEED_MS);
            } else {
              await delay(10); // Wait for more text
            }
          }
        };

        const animationPromise = animate();

        try {
          await generateAnswer(query, contextForLLM, (_chunk, fullText) => {
            textBuffer = fullText;
          });
        } catch (e) {
          console.error("Text generation failed:", e);
          textBuffer = fullAnswer; // fallback text
        }
        
        isGenerationDone = true;
        await animationPromise;

      } else {
        // Stream character by character (Simulated — no LLM, retrieval-only fallback)
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
