
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
  const [selectedOptions, setSelectedOptions] = useState<boolean[]>([]);

  const currentWordChoice: WordChoice | undefined =
    sentence.wordChoices[currentWordIndex];

  const handleOptionClick = (isCorrect: boolean, optionText: string) => {
    if (isCorrect) {
      // Add the word to our constructed sentence
      setSelectedWords([...selectedWords, optionText]);
      setSelectedOptions([...selectedOptions, true]);

      // Move to the next word if not at the end
      if (currentWordIndex < sentence.wordChoices.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        // We've completed the sentence
        onComplete(sentence.id);
      }
    } else {
      // Mark as incorrect choice
      setSelectedOptions([...selectedOptions, false]);
      // Incorrect option - we don't advance
    }
  };

  // Reset when sentence changes
  useEffect(() => {
    setCurrentWordIndex(0);
    setSelectedWords([]);
    setSelectedOptions([]);
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
        
        {/* Constructed sentence so far */}
        <div className="mb-6 min-h-16 p-3 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-lg break-words">
            {selectedWords.join(" ")}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>
      </div>

      {/* Current word choice */}
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
              disabled={selectedOptions[currentWordIndex] !== undefined}
              selected={
                selectedOptions[currentWordIndex] !== undefined &&
                option.isCorrect
              }
            />
          ))}
        </div>
      </div>

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
