import { useState } from "react";
import { sentencesData } from "@/data/sentences";
import { Sentence } from "@/types/game";
import { SentenceBuilder } from "@/components/SentenceBuilder";
import { SentenceList } from "@/components/SentenceList";

const Index = () => {
  const [sentences, setSentences] = useState<Sentence[]>(sentencesData);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const handleSentenceComplete = (sentenceId: number) => {
    setSentences(
      sentences.map((sentence) =>
        sentence.id === sentenceId
          ? { ...sentence, completed: true }
          : sentence
      )
    );
  };

  const handleSelectSentence = (index: number) => {
    setCurrentSentenceIndex(index);
  };

  const handleResetGame = () => {
    setSentences(
      sentences.map((sentence) => ({ ...sentence, completed: false }))
    );
    setCurrentSentenceIndex(0);
  };

  // 查找下一个未完成的句子
  const findNextIncompleteSentence = () => {
    const nextIncompleteIndex = sentences.findIndex(
      (s, index) => index > currentSentenceIndex && !s.completed
    );
    if (nextIncompleteIndex !== -1) {
      setCurrentSentenceIndex(nextIncompleteIndex);
    }
  };

  // 检查是否有下一个未完成的句子
  const hasNextIncompleteSentence = sentences.some(
    (s, index) => index > currentSentenceIndex && !s.completed
  );

  const completedCount = sentences.filter((s) => s.completed).length;

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <SentenceBuilder 
          sentence={sentences[currentSentenceIndex]} 
          onComplete={handleSentenceComplete}
          onNextSentence={findNextIncompleteSentence}
          hasNextIncompleteSentence={hasNextIncompleteSentence}
        />
        <div className="mt-8 max-h-96 overflow-y-auto">
          <SentenceList 
            sentences={sentences} 
            currentSentenceIndex={currentSentenceIndex}
            onSelectSentence={handleSelectSentence}
          />
        </div>
        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>© 2025 西班牙语拼句子挑战 | 快乐学习西班牙语！</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
