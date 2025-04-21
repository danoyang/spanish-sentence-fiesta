
import { cn } from "@/lib/utils";
import { WordOption as WordOptionType } from "@/types/game";
import { useState } from "react";

interface WordOptionProps {
  option: WordOptionType;
  onClick: (isCorrect: boolean) => void;
  disabled: boolean;
  selected: boolean;
  showFeedback?: boolean;
  isCorrect?: boolean;
  lastSelected?: boolean;
  showTip?: boolean;
  tipText?: string;
}

export const WordOption = ({
  option,
  onClick,
  disabled,
  selected,
  showFeedback = false,
  isCorrect,
  lastSelected,
  showTip = false,
  tipText = "",
}: WordOptionProps) => {
  const [internalTip, setInternalTip] = useState("");

  const handleClick = () => {
    if (disabled) return;
    onClick(option.isCorrect);
  };

  let buttonClasses =
    "px-4 py-2 rounded-lg transition-all border-2 font-medium text-lg w-full";

  // 不提前显示答案颜色
  if (showFeedback) {
    if (selected && isCorrect) {
      buttonClasses += " bg-correct text-white border-correct";
    } else if (selected && !isCorrect) {
      buttonClasses += " bg-incorrect text-white border-incorrect";
    } else {
      buttonClasses += " border-gray-300";
    }
  } else {
    buttonClasses += " border-gray-300 hover:border-spain-yellow";
  }

  if (disabled) {
    buttonClasses += " opacity-50 cursor-not-allowed";
  }

  return (
    <div className="flex flex-col items-center w-full">
      <button
        className={cn(buttonClasses)}
        disabled={disabled}
        onClick={handleClick}
      >
        {option.text}
      </button>
    </div>
  );
};
