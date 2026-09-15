export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface InteractiveGame {
  id: string;
  emoji: string;
  name: string;
  subject: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  iconBg: string;
  mechanic: 'bubble-math' | 'word-tile' | 'habitat-sort' | 'eco-sort' | 'shape-tap' | 'standard';
  badgeTitle: string;
}

export interface GameQuestion {
  id: string;
  setNumber: number; // 1 to 10
  level: Difficulty; // Easy (1-3), Medium (4-7), Hard (8-10)
  levelNumber: number; // 1 to 10
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  visualHint?: string;
  speechText?: string;
  lang?: 'en' | 'ur' | 'sd';
}

export interface WordTilePuzzle {
  id: string;
  setNumber: number; // 1 to 10
  levelNumber: number; // 1 to 10
  difficulty: Difficulty;
  word: string;
  hint: string;
  emoji: string;
  meaning: string;
}

export interface GameSetInfo {
  setNumber: number; // 1 to 10
  levelNumber: number; // 1 to 10
  title: string;
  difficulty: Difficulty;
  totalQuestions: number; // 10
}
