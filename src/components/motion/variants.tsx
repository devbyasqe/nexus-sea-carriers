import { Variants } from "motion/react";

export const verticalInVariant: Variants = {
  hidden: (dir: "left" | "right") => ({
    x: dir === "right" ? -100 : 100,
    opacity: 0,
    filter: "blur(15px)",
  }),
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

export const leftVariant: Variants = {
  hidden: { x: -100, opacity: 0, filter: "blur(15px)" },
  visible: { x: 0, opacity: 1, filter: "blur(0px)" },
};

export const rightVariant: Variants = {
  hidden: { x: 100, opacity: 0, filter: "blur(15px)" },
  visible: { x: 0, opacity: 1, filter: "blur(0px)" },
};
