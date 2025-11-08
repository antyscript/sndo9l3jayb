// src/types/index.ts

export interface Chapter {
  id: number;
  title: string;
  titleFr?: string;
  summary: string;
  themes: string[];
  keyEvents?: string[];
  quotes?: string[];
}

export interface Character {
  id: number;
  name: string;
  nameFr?: string;
  role: string;
  description: string;
  relationships?: string[];
  traits?: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface QuizResult {
  score: number;
  total: number;
  answers: { [key: number]: string };
  passed: boolean;
}

export type TabType = 'home' | 'chapters' | 'characters' | 'quiz';