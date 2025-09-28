"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon, SystemIcon } from "../svg";
import { useTheme } from "next-themes";
import { Button } from "./button";
import {
  THoverEvent,
  useHoverHighlightPosition,
} from "../hooks/mouse-position";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const themeModes = [
  { icon: <SystemIcon />, label: "system" },
  { icon: <SunIcon />, label: "light" },
  { icon: <MoonIcon />, label: "dark" },
];

const ThemeToggler = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const { handleMouseEnter, handleMouseLeave, hoverPosition } =
    useHoverHighlightPosition();

  useEffect(() => setMount(true), []);

  if (!mount) return null;

  const handleHover = (e: THoverEvent, label: string) => {
    if (theme !== label) {
      handleMouseEnter(e);
    }
  };

  const handleClick = (e: THoverEvent, label: string) => {
    if (theme !== label) {
      setTheme(label);
      handleMouseEnter(e);
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={cn(
        "bg-accent relative inline-flex items-center justify-center gap-0.5 rounded-full border p-1",
        className,
      )}
    >
      {themeModes.map(({ icon, label }) => (
        <Button
          key={label}
          disabled={theme === label}
          buttonSize={"icon"}
          variant={"theme"}
          padding={null}
          onClick={(e) => handleClick(e, label)}
          onMouseEnter={(e) => handleHover(e, label)}
          onFocus={(e) => handleHover(e, label)}
          className="z-10"
        >
          {icon}
        </Button>
      ))}
      <motion.div
        animate={{ ...hoverPosition }}
        className="bg-muted absolute rounded-full"
      />
    </div>
  );
};

export default ThemeToggler;
