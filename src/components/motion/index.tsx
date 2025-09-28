"use client";
import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { leftVariant, rightVariant } from "./variants";

const variantsMap = {
  left: leftVariant,
  right: rightVariant,
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
    variants={variantsMap[variant]}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
