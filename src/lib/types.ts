export type MessageRole = 'user' | 'assistant';

export interface Source {
  chapter: string;
  section: string;
  chapterNum: number;
  score: number;
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  sources?: Source[];
  timestamp: Date;
  streaming?: boolean;
}
