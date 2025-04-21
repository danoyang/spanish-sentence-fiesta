import { useState, useEffect } from "react";
import { sentencesData } from "@/data/sentences";
import { Sentence } from "@/types/game";
import { SentenceBuilder } from "@/components/SentenceBuilder";
import { SentenceList } from "@/components/SentenceList";

// 本地存储键名
const SENTENCES_STORAGE_KEY = 'spanish-sentence-fiesta-sentences';

const Index = () => {
  const [sentences, setSentences] = useState<Sentence[]>(() => {
    // 尝试从本地存储加载句子状态
    try {
      const savedData = localStorage.getItem(SENTENCES_STORAGE_KEY);
      if (savedData) {
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error('Failed to load sentences data:', error);
    }
    // 如果无法加载或不存在，则使用默认数据
    return sentencesData;
  });
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  // 当句子状态变化时保存到本地存储
  useEffect(() => {
    try {
      localStorage.setItem(SENTENCES_STORAGE_KEY, JSON.stringify(sentences));
    } catch (error) {
      console.error('Failed to save sentences data:', error);
    }
  }, [sentences]);

  // 更新句子的部分状态
  const handleUpdateSentence = (sentenceId: number, updates: Partial<Sentence>) => {
    setSentences(
      sentences.map((sentence) =>
        sentence.id === sentenceId
          ? { ...sentence, ...updates }
          : sentence
      )
    );
  };

  // 完成句子处理，现在包含完美完成状态
  const handleSentenceComplete = (sentenceId: number, perfectlyCompleted: boolean) => {
    setSentences(
      sentences.map((sentence) =>
        sentence.id === sentenceId
          ? { 
              ...sentence, 
              completed: true,
              perfectlyCompleted: perfectlyCompleted,
              // 重置当前尝试中的错误状态，为下一次尝试做准备
              hasMistakesInCurrentAttempt: false 
            }
          : sentence
      )
    );
  };

  const handleSelectSentence = (index: number) => {
    setCurrentSentenceIndex(index);
  };

  const handleResetGame = () => {
    setSentences(
      sentences.map((sentence) => ({ 
        ...sentence, 
        completed: false,
        perfectlyCompleted: false,
        hasMistakesInCurrentAttempt: false 
      }))
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
  const perfectlyCompletedCount = sentences.filter((s) => s.perfectlyCompleted).length;

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 添加进度指示器 */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-spain-darkred mb-2">西班牙语拼句子挑战</h1>
          <div className="text-gray-700">
            已完成: {completedCount}/{sentences.length} 句 | 
            完美完成: {perfectlyCompletedCount}/{sentences.length} 句
            <button 
              onClick={handleResetGame}
              className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm"
            >
              重置
            </button>
          </div>
        </div>

        <SentenceBuilder 
          sentence={sentences[currentSentenceIndex]} 
          onComplete={handleSentenceComplete}
          onNextSentence={findNextIncompleteSentence}
          hasNextIncompleteSentence={hasNextIncompleteSentence}
          onUpdateSentence={handleUpdateSentence}
        />
        <div className="mt-8 max-h-96 overflow-y-auto">
          <SentenceList 
            sentences={sentences} 
            currentSentenceIndex={currentSentenceIndex}
            onSelectSentence={handleSelectSentence}
          />
        </div>
        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p> 2025 西班牙语拼句子挑战 | 快乐学习西班牙语！</p>
        </footer>
      </div>
    </div>
  );
}

export default Index;
