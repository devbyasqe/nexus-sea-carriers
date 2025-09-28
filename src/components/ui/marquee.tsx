import { cn } from "@/lib/utils";
import React from "react";

type TMarquee = {
  className?: string;
  reverse?: boolean;
  showMask?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
};

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  showMask = true,
  ...props
}: TMarquee) => {
  return (
    <div
      {...props}
      className={cn(
        "group/marquee relative flex w-full items-center justify-center [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:2rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "[mask-image:linear-gradient(90deg,hsla(0,0%,0%,0)0%,hsla(0,0%,0%,1)33.3%,hsla(0,0%,0%,1)66.7%,hsla(0,0%,0%,0)100%)]":
            showMask && !vertical,
          "[mask-image:linear-gradient(180deg,hsla(0,0%,0%,0)0%,hsla(0,0%,0%,1)33.3%,hsla(0,0%,0%,1)66.7%,hsla(0,0%,0%,0)100%)]":
            showMask && vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee-horizontal flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover/marquee:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export default Marquee;
