import { useEffect, useRef } from "react";

export const useClickOutSide = (callback: () => void) => {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEvent = (event: MouseEvent | KeyboardEvent) => {
      if (elRef.current && !elRef.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("keydown", handleEvent);
    return () => {
      document.addEventListener("mousedown", handleEvent);
      document.addEventListener("keydown", handleEvent);
    };
  }, [callback]);

  return elRef;
};
