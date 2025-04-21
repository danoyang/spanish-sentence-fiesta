
import { Sentence } from "@/types/game";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface SentenceListProps {
  sentences: Sentence[];
  currentSentenceIndex: number;
  onSelectSentence: (index: number) => void;
}

export const SentenceList = ({
  sentences,
  currentSentenceIndex,
  onSelectSentence,
}: SentenceListProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4 text-center text-spain-darkred">
        西班牙语句子挑战
      </h2>
      <div className="flex flex-col gap-2">
        {sentences.map((sentence, index) => (
          <button
            key={sentence.id}
            className={cn(
              "w-full px-4 py-2 rounded-lg transition-all text-left flex items-center justify-between",
              "border-2 font-medium text-base",
              index === currentSentenceIndex
                ? "bg-spain-yellow border-spain-yellow"
                : sentence.completed
                ? "bg-green-50 border-correct text-correct"
                : "bg-white border-gray-300 text-gray-700 hover:border-spain-yellow"
            )}
            onClick={() => onSelectSentence(index)}
          >
            <span>{sentence.chinese}</span>
            {sentence.completed && (
              <CheckCircle className="ml-2 w-4 h-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
