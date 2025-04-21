export interface WordOption {
  text: string;
  isCorrect: boolean;
  correctTip: string;
  incorrectTip: string;
}

export interface WordChoice {
  correctWord: string;
  options: WordOption[];
  masteryLevel?: number;
}

export interface Sentence {
  id: number;
  chinese: string;
  spanish: string;
  wordChoices: WordChoice[];
  completed: boolean;
  hasMistakesInCurrentAttempt?: boolean;
  perfectlyCompleted?: boolean;
}

export interface GameState {
  sentences: Sentence[];
  currentSentenceIndex: number;
  currentWordIndex: number;
}

export interface WordMasteryData {
  wordText: string;
  masteryLevel: number;
  lastPracticed: string;
}
