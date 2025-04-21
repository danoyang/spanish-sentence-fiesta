
import { cn } from "@/lib/utils";

interface GameCompletionProps {
  completedCount: number;
  totalCount: number;
  onReset: () => void;
}

export const GameCompletion = ({
  completedCount,
  totalCount,
  onReset,
}: GameCompletionProps) => {
  const isAllCompleted = completedCount === totalCount;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">游戏进度</h3>
        <span className="text-sm font-medium">
          {completedCount}/{totalCount} ({percentage}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={cn(
            "h-2.5 rounded-full",
            isAllCompleted ? "bg-correct" : "bg-spain-yellow"
          )}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {isAllCompleted && (
        <div className="mt-4 text-center">
          <p className="font-bold text-lg text-correct mb-3">
            恭喜！你已完成所有句子！
          </p>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-spain-red text-white rounded-lg hover:bg-spain-darkred transition-colors"
          >
            重新开始
          </button>
        </div>
      )}
    </div>
  );
};
