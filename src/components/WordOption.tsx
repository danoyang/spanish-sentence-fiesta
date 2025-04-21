
import { cn } from "@/lib/utils";
import { WordOption as WordOptionType } from "@/types/game";
import { useState } from "react";

interface WordOptionProps {
  option: WordOptionType;
  onClick: (isCorrect: boolean) => void;
  disabled: boolean;
  selected: boolean;
}

export const WordOption = ({
  option,
  onClick,
  disabled,
  selected,
}: WordOptionProps) => {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setWasClicked(true);
    onClick(option.isCorrect);
  };

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg transition-all",
        "border-2 font-medium text-lg",
        selected
          ? option.isCorrect
            ? "bg-correct text-white border-correct"
            : "bg-incorrect text-white border-incorrect"
          : wasClicked
          ? option.isCorrect
            ? "border-correct text-correct"
            : "border-incorrect text-incorrect"
          : "border-gray-300 hover:border-spain-yellow",
        disabled && !selected && "opacity-50 cursor-not-allowed"
      )}
      disabled={disabled && !selected}
      onClick={handleClick}
    >
      {option.text}
    </button>
  );
};
