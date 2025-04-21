
import { useState, useEffect } from "react";
import { WordChoice, Sentence } from "@/types/game";
import { WordOption } from "./WordOption";
import { cn } from "@/lib/utils";
import { CheckCircle, ArrowRight } from "lucide-react";
import { speakAzure } from "@/audio/azureTTS";

interface SentenceBuilderProps {
  sentence: Sentence;
  onComplete: (sentenceId: number) => void;
  onNextSentence?: () => void;
  hasNextIncompleteSentence: boolean;
}

export const SentenceBuilder = ({
  sentence,
  onComplete,
  onNextSentence,
  hasNextIncompleteSentence,
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

  const spanishPunctuation = (sentence.spanish.match(/[.，,。!?¡¿]/g) || []).join("");

  const constructed = selectedWords.join(" ");
  const fullConstructed = currentWordIndex === sentence.wordChoices.length
    ? constructed + spanishPunctuation
    : constructed;

  const handleOptionClick = async (
    isCorrect: boolean,
    optionText: string,
    correctTip: string,
    incorrectTip: string
  ) => {
    setIsLastCorrect(isCorrect);
    setShowFeedback(true);
    setShowTip(true);

    if (isCorrect) {
      setTipText(correctTip);
      
      // Play audio but don't wait - allow user to continue immediately
      speakAzure(optionText);

      // Update state immediately, don't wait for audio to finish
      setSelectedWords([...selectedWords, optionText]);
      setSelectedOptions((prev) => {
        const next = [...prev];
        next[currentWordIndex] = true;
        return next;
      });
      
      let isFinished = false;
      if (currentWordIndex < sentence.wordChoices.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        onComplete(sentence.id);
        isFinished = true;
      }

      // Only feedback needs a timeout
      setTimeout(() => {
        setShowFeedback(false);
        setIsLastCorrect(null);
        setShowTip(false);
        setTipText("");
      }, 1200);

      // Speak the full sentence if finished, but don't block the UI
      if (isFinished) {
        let finalSent = [...selectedWords, optionText].join(" ") + spanishPunctuation;
        speakAzure(finalSent);
      }
    } else {
      setTipText(incorrectTip);
      setTimeout(() => {
        setShowFeedback(false);
        setIsLastCorrect(null);
        setShowTip(false);
        setTipText("");
      }, 1200);
    }
  };

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
      {currentWordIndex < sentence.wordChoices.length && (
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2 text-gray-700">
            请选择正确的单词:
          </h3>
          {/* 固定高度和宽度的选项容器 */}
          <div className="flex justify-center mb-2" style={{ minHeight: "48px" }}>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
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
                  disabled={showFeedback}
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
          </div>
          {/* 固定高度的答题结果提示区域【答对/答错】 */}
          <div
            className="mt-3 flex flex-col items-center justify-center"
            style={{ height: "48px", minHeight: "48px" }} // 增加固定高度
          >
            {showTip && tipText && (
              <span className={isLastCorrect ? "text-correct" : "text-incorrect"} style={{ fontWeight: "500" }}>
                {tipText}
              </span>
            )}
            {!showTip && <span style={{ opacity: 0 }}>&nbsp;</span>}
          </div>
        </div>
      )}
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
      
      {/* 添加句子完成状态和下一句按钮 */}
      <div className="mt-4 flex items-center justify-center">
        {sentence.completed && (
          <>
            <div className="flex items-center text-correct mr-4">
              <CheckCircle className="mr-1" />
              <span className="font-medium">已完成</span>
            </div>
            
            {hasNextIncompleteSentence && (
              <button 
                onClick={onNextSentence}
                className="flex items-center bg-spain-yellow hover:bg-spain-darkred text-white px-4 py-2 rounded-lg transition-colors"
              >
                <span className="font-medium">下一句</span>
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
