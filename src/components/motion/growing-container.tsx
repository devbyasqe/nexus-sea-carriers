"use client";
import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type GrowingContainerProps = {
  className?: string;
  children: ReactNode;
  direction?: "left" | "right";
};

export const GrowingContainer = ({
  className,
  children,
  direction = "right",
}: GrowingContainerProps) => {
  return (
    <div
      className={cn(
        "bg-accent relative flex overflow-clip",
        direction === "right" ? "justify-start" : "justify-end",
        className,
      )}
    >
      <motion.div
        className={cn("h-full")}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 1, ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
