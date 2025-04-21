import { Sentence } from "@/types/game";
import { cn } from "@/lib/utils";
import { CheckCircle, Star } from "lucide-react";

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
            // 使用索引和ID组合作为唯一key，确保不会重复
            key={`sentence-${sentence.id}-${index}`}
            className={cn(
              "w-full px-4 py-2 rounded-lg transition-all text-left flex items-center justify-between",
              "border-2 font-medium text-base",
              index === currentSentenceIndex
                ? "bg-spain-yellow border-spain-yellow"
                : sentence.completed && sentence.perfectlyCompleted
                ? "bg-green-50 border-green-500 text-green-700"
                : sentence.completed && !sentence.perfectlyCompleted
                ? "bg-yellow-50 border-yellow-500 text-yellow-700"
                : "bg-white border-gray-300 text-gray-700 hover:border-spain-yellow"
            )}
            onClick={() => onSelectSentence(index)}
          >
            <span>
              {sentence.id}. {sentence.chinese}
            </span>
            {sentence.completed && (
              <div className="flex items-center">
                {sentence.perfectlyCompleted ? (
                  <div title="完美完成">
                    <Star className="ml-2 w-4 h-4 text-green-500 fill-green-500" />
                  </div>
                ) : (
                  <div title="已完成">
                    <CheckCircle className="ml-2 w-4 h-4 text-yellow-500" />
                  </div>
                )}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
