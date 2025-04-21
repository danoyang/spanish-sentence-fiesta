
export interface WordOption {
  text: string;
  isCorrect: boolean;
}

export interface WordChoice {
  correctWord: string;
  options: WordOption[];
}

export interface Sentence {
  id: number;
  chinese: string;
  spanish: string;
  wordChoices: WordChoice[];
  completed: boolean;
}

export interface GameState {
  sentences: Sentence[];
  currentSentenceIndex: number;
  currentWordIndex: number;
}
