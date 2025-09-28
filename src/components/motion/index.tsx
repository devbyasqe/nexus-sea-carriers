"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { animate, motion, useInView } from "motion/react";
import { blurVariant, leftVariant, rightVariant } from "./variants";

const variantsMap = {
  left: leftVariant,
  right: rightVariant,
  blur: blurVariant,
} as const;

export const MotionContainer = ({
  children,
  className,
  variant = "left",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantsMap;
}) => (
  <motion.div
    layout
    variants={variantsMap[variant]}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: "linear" }}
    className={className}
  >
    {children}
  </motion.div>
);

export function AnimatedNumber({
  value,
  start = 0,
  duration = 0.5,
}: {
  value: number;
  start?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(start, value, {
        duration,
        ease: "linear",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.innerText = Math.round(latest).toString();
          }
        },
      });

      return controls.stop;
    }
  }, [isInView]);

  return <motion.span ref={ref}>{start}</motion.span>;
}
