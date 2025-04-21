
import { useState, useEffect } from "react";
import { WordChoice, Sentence } from "@/types/game";
import { WordOption } from "./WordOption";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface SentenceBuilderProps {
  sentence: Sentence;
  onComplete: (sentenceId: number) => void;
}

export const SentenceBuilder = ({
  sentence,
  onComplete,
}: SentenceBuilderProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<(boolean | undefined)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLastCorrect, setIsLastCorrect] = useState<boolean | null>(null);
  const [showTip, setShowTip] = useState(false);
  const [tipText, setTipText] = useState("");

  const currentWordChoice: WordChoice | undefined =
    sentence.wordChoices[currentWordIndex];

  // 西班牙语末尾标点
  const spanishPunctuation = (sentence.spanish.match(/[.，,。!?¡¿]/g) || []).join("");

  // 构造的句子。
  const constructed = selectedWords.join(" ");
  const fullConstructed = currentWordIndex === sentence.wordChoices.length
    ? constructed + spanishPunctuation
    : constructed;

  // 点击选项
  const handleOptionClick = (isCorrect: boolean, optionText: string, correctTip: string, incorrectTip: string) => {
    setIsLastCorrect(isCorrect);
    setShowFeedback(true);
    setShowTip(true);

    if (isCorrect) {
      setTipText(correctTip);
      setTimeout(() => {
        setSelectedWords([...selectedWords, optionText]);
        setSelectedOptions((prev) => {
          const next = [...prev];
          next[currentWordIndex] = true;
          return next;
        });
        if (currentWordIndex < sentence.wordChoices.length - 1) {
          setCurrentWordIndex(currentWordIndex + 1);
        } else {
          onComplete(sentence.id);
        }
        setShowFeedback(false);
        setIsLastCorrect(null);
        setShowTip(false);
        setTipText("");
      }, 1200);
    } else {
      setTipText(incorrectTip);
      setTimeout(() => {
        setSelectedOptions((prev) => {
          const next = [...prev];
          next[currentWordIndex] = false;
          return next;
        });
        setShowFeedback(false);
        setIsLastCorrect(null);
        setShowTip(false);
        setTipText("");
      }, 1200);
    }
  };

  // 题目变化时重置
  useEffect(() => {
    setCurrentWordIndex(0);
    setSelectedWords([]);
    setSelectedOptions([]);
    setShowFeedback(false);
    setIsLastCorrect(null);
    setShowTip(false);
    setTipText("");
  }, [sentence.id]);

  if (!currentWordChoice) {
    return null;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-spain-yellow max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-spain-darkred">
          句子 {sentence.id}
        </h2>
        <p className="text-xl mb-4 font-medium">{sentence.chinese}</p>
        
        {/* 已拼写的句子 */}
        <div className="mb-6 min-h-16 p-3 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-lg break-words">
            {constructed}
            {currentWordIndex === sentence.wordChoices.length && (
              <span className="ml-1">{spanishPunctuation}</span>
            )}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>
      </div>
      {/* 当前单词选择 */}
      {currentWordIndex < sentence.wordChoices.length && (
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2 text-gray-700">
            请选择正确的单词:
          </h3>
          <div className="flex gap-4 justify-center">
            {currentWordChoice.options.map((option, index) => (
              <WordOption
                key={index}
                option={option}
                onClick={(isCorrect) =>
                  handleOptionClick(
                    isCorrect,
                    option.text,
                    option.correctTip,
                    option.incorrectTip
                  )
                }
                disabled={selectedOptions[currentWordIndex] !== undefined || showFeedback}
                selected={
                  showFeedback &&
                  isLastCorrect !== null &&
                  isLastCorrect &&
                  option.isCorrect
                }
                showFeedback={showFeedback && isLastCorrect !== null}
                isCorrect={option.isCorrect}
                showTip={
                  showTip &&
                  ((isLastCorrect === true && option.isCorrect) ||
                    (isLastCorrect === false && !option.isCorrect))
                }
                tipText={
                  showTip
                    ? isLastCorrect
                      ? option.correctTip
                      : option.incorrectTip
                    : ""
                }
              />
            ))}
          </div>
          {/* 反馈信息及理由 */}
          <div className="mt-3 h-9 flex flex-col items-center justify-center">
            {showTip && tipText && (
              <span className={isLastCorrect ? "text-correct" : "text-incorrect"} style={{ fontWeight: "500" }}>
                {tipText}
              </span>
            )}
          </div>
        </div>
      )}

      {/* 进度指示 */}
      <div className="flex justify-center gap-2 mt-4">
        {sentence.wordChoices.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-3 h-3 rounded-full",
              index < currentWordIndex
                ? "bg-correct"
                : index === currentWordIndex
                ? "bg-spain-yellow"
                : "bg-gray-300"
            )}
          />
        ))}
      </div>

      {/* 完成标记 */}
      {sentence.completed && (
        <div className="mt-4 flex items-center justify-center text-correct">
          <CheckCircle className="mr-1" />
          <span className="font-medium">已完成</span>
        </div>
      )}
    </div>
  );
};
