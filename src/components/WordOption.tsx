
import { cn } from "@/lib/utils";
import { WordOption as WordOptionType } from "@/types/game";

interface WordOptionProps {
  option: WordOptionType;
  onClick: (isCorrect: boolean) => void;
  disabled: boolean;
  selected: boolean;
  showFeedback?: boolean;
  isCorrect?: boolean;
  lastSelected?: boolean;
}

export const WordOption = ({
  option,
  onClick,
  disabled,
  selected,
  showFeedback = false,
  isCorrect,
  lastSelected,
}: WordOptionProps) => {
  const handleClick = () => {
    if (disabled) return;
    onClick(option.isCorrect);
  };

  let buttonClasses =
    "px-4 py-2 rounded-lg transition-all border-2 font-medium text-lg";

  if (showFeedback) {
    if (selected && isCorrect) {
      buttonClasses += " bg-correct text-white border-correct";
    } else if (selected && !isCorrect) {
      buttonClasses += " bg-incorrect text-white border-incorrect";
    } else if (isCorrect && lastSelected) {
      buttonClasses += " border-correct text-correct";
    } else if (!isCorrect && lastSelected) {
      buttonClasses += " border-incorrect text-incorrect";
    } else {
      buttonClasses += " border-gray-300";
    }
  } else {
    buttonClasses += " border-gray-300 hover:border-spain-yellow";
  }

  if (disabled && !selected) {
    buttonClasses += " opacity-50 cursor-not-allowed";
  }

  return (
    <button
      className={cn(buttonClasses)}
      disabled={disabled && !selected}
      onClick={handleClick}
    >
      {option.text}
    </button>
  );
};
