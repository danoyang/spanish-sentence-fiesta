import { useState, useEffect } from "react";
import { WordChoice, Sentence } from "@/types/game";
import { WordOption } from "./WordOption";
import { cn } from "@/lib/utils";
import { CheckCircle, ArrowRight } from "lucide-react";
import { speakAzure } from "@/audio/azureTTS";
import { 
  getWordMasteryLevel, 
  updateWordMastery, 
  getMasteryColorClass 
} from "@/services/masteryService";

interface SentenceBuilderProps {
  sentence: Sentence;
  onComplete: (sentenceId: number, perfectlyCompleted: boolean) => void;
  onNextSentence?: () => void;
  hasNextIncompleteSentence: boolean;
  onUpdateSentence: (sentenceId: number, updates: Partial<Sentence>) => void;
}

export const SentenceBuilder = ({
  sentence,
  onComplete,
  onNextSentence,
  hasNextIncompleteSentence,
  onUpdateSentence,
}: SentenceBuilderProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<(boolean | undefined)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLastCorrect, setIsLastCorrect] = useState<boolean | null>(null);
  const [showTip, setShowTip] = useState(false);
  const [tipText, setTipText] = useState("");
  // 新增: 记录当前尝试是否有错误
  const [hasMistakesInCurrentAttempt, setHasMistakesInCurrentAttempt] = useState(
    sentence.hasMistakesInCurrentAttempt || false
  );
  // 新增: 跟踪单词掌握程度
  const [wordMasteryLevels, setWordMasteryLevels] = useState<number[]>([]);

  const currentWordChoice: WordChoice | undefined =
    sentence.wordChoices[currentWordIndex];

  const spanishPunctuation = (sentence.spanish.match(/[.，,。!?¡¿]/g) || []).join("");

  const constructed = selectedWords.join(" ");
  const fullConstructed = currentWordIndex === sentence.wordChoices.length
    ? constructed + spanishPunctuation
    : constructed;

  // 新增: 初始化加载单词掌握程度
  useEffect(() => {
    if (sentence?.wordChoices) {
      const masteryLevels = sentence.wordChoices.map(wordChoice => {
        // 使用正确的单词文本来获取掌握度
        return getWordMasteryLevel(wordChoice.correctWord);
      });
      setWordMasteryLevels(masteryLevels);
    }
  }, [sentence.id]);

  // 修改：点击选项后不再让选项区域 disabled（showFeedback也可点）
  const handleOptionClick = async (
    isCorrect: boolean,
    optionText: string,
    correctTip: string,
    incorrectTip: string
  ) => {
    setIsLastCorrect(isCorrect);
    setShowFeedback(true);
    setShowTip(true);

    // 如果当前词组存在，更新掌握度
    if (currentWordChoice) {
      const newMasteryLevel = updateWordMastery(currentWordChoice.correctWord, isCorrect);
      
      // 更新本地掌握度状态
      const newMasteryLevels = [...wordMasteryLevels];
      newMasteryLevels[currentWordIndex] = newMasteryLevel;
      setWordMasteryLevels(newMasteryLevels);
    }

    if (isCorrect) {
      setTipText(correctTip);

      // Play audio but don't wait - allow user to continue immediately
      speakAzure(optionText);

      // Update state immediately
      setSelectedWords([...selectedWords, optionText]);
      setSelectedOptions((prev) => {
        const next = [...prev];
        next[currentWordIndex] = true;
        return next;
      });

      let isFinished = false;
      if (currentWordIndex < sentence.wordChoices.length - 1) {
        setTimeout(() => {
          // 立即允许选择下一个单词（即 currentWordIndex 更新后，选项不 disabled）
          setCurrentWordIndex((prev) => prev + 1);
          setShowFeedback(false);
          setIsLastCorrect(null);
          setShowTip(false);
          setTipText("");
        }, 1000); // 增加到1秒，让用户看到正确的反馈
      } else {
        // 句子完成时，根据是否有错误来决定完美完成状态
        const perfectlyCompleted = !hasMistakesInCurrentAttempt;
        onComplete(sentence.id, perfectlyCompleted);
        isFinished = true;
        setTimeout(() => {
          setShowFeedback(false);
          setIsLastCorrect(null);
          setShowTip(false);
          setTipText("");
        }, 3000); // 保持3秒
      }

      // Speak the full sentence if finished
      if (isFinished) {
        let finalSent = [...selectedWords, optionText].join(" ") + spanishPunctuation;
        speakAzure(finalSent);
      }
    } else {
      // 更新当前尝试中有错误的状态
      if (!hasMistakesInCurrentAttempt) {
        setHasMistakesInCurrentAttempt(true);
        onUpdateSentence(sentence.id, { hasMistakesInCurrentAttempt: true });
      }
      
      setTipText(incorrectTip);
      
      // 错误答案增加禁用时间，确保反馈显示完整3秒
      const disableOptionsTimeout = setTimeout(() => {
        setShowFeedback(false);
        setIsLastCorrect(null);
        setShowTip(false);
        setTipText("");
      }, 3000); // 确保反馈显示3秒
      
      // 添加返回函数清除超时，防止组件卸载时出现问题
      return () => {
        clearTimeout(disableOptionsTimeout);
      };
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
    // 重置当前尝试中的错误状态，使用句子中存储的值
    setHasMistakesInCurrentAttempt(sentence.hasMistakesInCurrentAttempt || false);
  }, [sentence.id, sentence.hasMistakesInCurrentAttempt]);

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
                  // 当显示错误反馈时，暂时禁用所有选项，确保用户看到完整反馈
                  disabled={showFeedback && isLastCorrect === false}
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
          <div
            className="mt-3 flex flex-col items-center justify-center"
            style={{ height: "48px", minHeight: "48px" }}
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
        {sentence.wordChoices.map((_, index) => {
          // 基本类名
          let dotClassNames = "w-3 h-3 rounded-full";
          
          // 基于当前位置的样式
          if (index < currentWordIndex) {
            // 已完成单词 - 使用掌握度颜色
            const masteryClass = getMasteryColorClass(wordMasteryLevels[index] || 0);
            dotClassNames = `${dotClassNames} ${masteryClass}`;
          } else if (index === currentWordIndex) {
            // 当前单词 - 黄色
            dotClassNames = `${dotClassNames} bg-spain-yellow`;
          } else {
            // 未开始单词 - 灰色
            dotClassNames = `${dotClassNames} bg-gray-300`;
          }
          
          return (
            <div
              key={index}
              className={dotClassNames}
              title={`掌握度: ${wordMasteryLevels[index] || 0}%`}
            />
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-center">
        {sentence.completed && (
          <>
            <div className="flex items-center mr-4">
              <CheckCircle className={sentence.perfectlyCompleted ? "text-green-500 mr-1" : "text-yellow-500 mr-1"} />
              <span className="font-medium">
                {sentence.perfectlyCompleted ? "完美完成" : "已完成"}
              </span>
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
