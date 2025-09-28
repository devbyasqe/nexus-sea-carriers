"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "../svg";

export const FaqCard = ({
  answer,
  question,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 py-6 transition-all duration-300 group-hover/faq:not-hover:blur-[1px]">
      <div
        role="button"
        className="flex cursor-pointer items-start gap-3"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="bg-success inline-flex size-6 shrink-0 items-center justify-center rounded-full text-black">
          <p className="text-sm font-medium">{index} </p>
        </div>
        <div className="">
          <p className="font-medium font-serif">{question} </p>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, filter: "blur(5px)" }}
                animate={{ height: "auto", filter: "blur(0px)" }}
                exit={{ height: 0, filter: "blur(5px)" }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="overflow-clip"
              >
                <p className="text-foreground-muted mt-4">{answer} </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Button buttonSize={"icon"} padding={null} className="ms-auto">
          <PlusIcon
            className={cn("transition-all size-5 duration-300", open && "rotate-45")}
          />
        </Button>
      </div>
    </div>
  );
};
