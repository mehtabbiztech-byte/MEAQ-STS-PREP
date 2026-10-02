import React from 'react';

const COMMON_WORDS = new Set([
  'because', 'between', 'correct', 'different', 'during', 'example', 'following',
  'important', 'question', 'something', 'students', 'through', 'understand',
]);

export function isDifficultWord(value: string): boolean {
  const word = value.toLocaleLowerCase('en').replace(/[^\p{L}'’\-]/gu, '');
  if (!word || COMMON_WORDS.has(word)) return false;
  return word.length >= 7;
}

type MeaningTextProps = {
  text: string;
  className?: string;
  allWords?: boolean;
};

/**
 * Highlights vocabulary without changing the surrounding layout. Clicking a
 * highlighted word opens the global dictionary and never triggers its parent
 * quiz option.
 */
export const MeaningText: React.FC<MeaningTextProps> = ({ text, className, allWords = false }) => {
  const parts = text.split(/([\p{L}][\p{L}'’\-]*)/gu);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const clickable = /^[\p{L}][\p{L}'’\-]*$/u.test(part) && (allWords || isDifficultWord(part));
        if (!clickable) return <React.Fragment key={index}>{part}</React.Fragment>;

        return (
          <span
            key={index}
            data-word-meaning-word={part}
            className="cursor-help rounded px-0.5 font-medium underline decoration-dotted decoration-emerald-600/80 underline-offset-4 hover:bg-emerald-100/80 hover:text-emerald-900 dark:decoration-emerald-400/80 dark:hover:bg-emerald-950/80 dark:hover:text-emerald-100 transition-colors"
            title={`Click for the meaning of “${part}”`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              window.dispatchEvent(new CustomEvent('meqsa:word-meaning', {
                detail: { word: part, x: event.clientX, y: event.clientY },
              }));
            }}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};
