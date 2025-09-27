import { Variants } from "motion/react";

export const verticalInVariant: Variants = {
  enter: (dir: "left" | "right") => ({
    x: dir === "right" ? -100 : 100,
    opacity: 0,
    filter: "blur(15px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (dir: "left" | "right") => ({
    x: dir === "right" ? 100 : -100,
    opacity: 0,
    filter: "blur(15px)",
  }),
};
