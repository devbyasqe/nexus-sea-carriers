"use client";

import { useState } from "react";

export type TUseTextScramble = {
  duration?: number;
  speed?: number;
  characterSet?: string;
};

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const useTextScramble = (
  text: string,
  {
    duration = 0.8,
    speed = 0.04,
    characterSet = defaultChars,
  }: TUseTextScramble = {},
) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const original = text;

  const scramble = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = Math.ceil(duration / speed);
    let step = 0;

    const interval = setInterval(() => {
      const progress = step / steps;
      const chars: string[] = [];

      for (let i = 0; i < original.length; i++) {
        if (original[i] === " ") {
          chars.push(" ");
          continue;
        }

        if (progress * original.length > i) {
          chars.push(original[i]);
        } else {
          chars.push(
            characterSet[Math.floor(Math.random() * characterSet.length)],
          );
        }
      }

      setDisplayText(chars.join(""));
      step++;

      if (step >= steps) {
        clearInterval(interval);
        setDisplayText(original);
        setIsAnimating(false);
      }
    }, speed * 1000);
  };

  return { displayText, scramble };
};
