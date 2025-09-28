import  { useState } from "react";

export type THoverPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
  opacity: number;
};

export type THoverEvent =
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.FocusEvent<HTMLElement, Element>;

  

export const useHoverHighlightPosition = () => {
  const [hoverPosition, setHoverPosition] = useState<THoverPosition>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const handleMouseLeave = () => {
    setHoverPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleMouseEnter = (event: THoverEvent) => {
    const childRect = event.currentTarget.getBoundingClientRect();
    const parent = event.currentTarget.parentElement;

    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const styles = getComputedStyle(parent);
    const borderTop = parseFloat(styles.borderTopWidth) || 0;
    const borderLeft = parseFloat(styles.borderLeftWidth) || 0;

    setHoverPosition({
      width: childRect.width,
      height: childRect.height,
      left: childRect.left - parentRect.left - borderLeft,
      top: childRect.top - parentRect.top - borderTop,
      opacity: 1,
    });
  };

  return {
    hoverPosition,
    handleMouseEnter,
    handleMouseLeave,
  };
};