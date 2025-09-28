"use client";
import React, { ReactNode } from "react";
import { motion } from "motion/react";
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
