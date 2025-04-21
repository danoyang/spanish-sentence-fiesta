
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

  const currentWordChoice: WordChoice | undefined =
    sentence.wordChoices[currentWordIndex];

  const spanishPunctuation = (sentence.spanish.match(/[.，,。!?¡¿]/g) || []).join("");

  // 去掉最后一个单词后面的标点（准确提取拼句，不让它出现在选项里）
  const fullSentenceWithoutPunctuation = sentence.spanish.replace(/[.，,。!?¡¿]\s*$/, "");

  const handleOptionClick = (isCorrect: boolean, optionText: string) => {
    // 只有选择后才显示反馈色
    setIsLastCorrect(isCorrect);
    setShowFeedback(true);

    if (isCorrect) {
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
      }, 450);
    } else {
      setTimeout(() => {
        setSelectedOptions((prev) => {
          const next = [...prev];
          next[currentWordIndex] = false;
          return next;
        });
        setShowFeedback(false);
        setIsLastCorrect(null);
      }, 450);
    }
  };

  // Reset when sentence changes
  useEffect(() => {
    setCurrentWordIndex(0);
    setSelectedWords([]);
    setSelectedOptions([]);
    setShowFeedback(false);
    setIsLastCorrect(null);
  }, [sentence.id]);

  if (!currentWordChoice) {
    return null;
  }

  // 完整答案拼接（不包含标点）
  const constructed = selectedWords.join(" ");

  // 拼接最后的标点
  const fullConstructed = currentWordIndex === sentence.wordChoices.length
    ? constructed + spanishPunctuation
    : constructed;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-spain-yellow max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-spain-darkred">
          句子 {sentence.id}
        </h2>
        <p className="text-xl mb-4 font-medium">{sentence.chinese}</p>
        
        {/* Constructed sentence so far */}
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
                onClick={(isCorrect) => handleOptionClick(isCorrect, option.text)}
                // 只有作答后才展示颜色
                disabled={selectedOptions[currentWordIndex] !== undefined || showFeedback}
                selected={
                  showFeedback &&
                  isLastCorrect !== null &&
                  isLastCorrect &&
                  option.isCorrect
                }
                showFeedback={showFeedback && isLastCorrect !== null}
                isCorrect={option.isCorrect}
                lastSelected={
                  showFeedback &&
                  isLastCorrect !== null &&
                  selectedOptions[currentWordIndex] === undefined &&
                  ((isLastCorrect && option.isCorrect) || (!isLastCorrect && !option.isCorrect))
                }
              />
            ))}
          </div>
          {/* 反馈信息，仅作选后的瞬时显示 */}
          <div className="mt-3 h-6 flex items-center justify-center">
            {showFeedback && isLastCorrect === true && (
              <span className="text-correct font-medium">选择正确！</span>
            )}
            {showFeedback && isLastCorrect === false && (
              <span className="text-incorrect font-medium">再试一次！</span>
            )}
          </div>
        </div>
      )}

      {/* Progress indicators */}
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

      {/* Completion marker */}
      {sentence.completed && (
        <div className="mt-4 flex items-center justify-center text-correct">
          <CheckCircle className="mr-1" />
          <span className="font-medium">已完成</span>
        </div>
      )}
    </div>
  );
};
