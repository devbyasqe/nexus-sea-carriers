import { cn } from "@/lib/utils";
import React from "react";

export const ShimmerText = ({
  as: Comp = "span",
  children,
  className,
}: {
  as?: React.ElementType;
  children: string;
  className?: string;
}) => {
  return (
    <Comp
      className={cn(
        "animate-shimmer-text relative inline-block bg-gradient-to-l from-black from-25% via-white to-black to-85% [background-size:200%_100%] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => (
  <input
    type={type}
    data-slot="input"
    className={cn(
      "placeholder:text-foreground-muted bg-background flex h-9 items-center rounded-xl border py-1 ps-10 pe-3 text-sm outline-none",
      className,
    )}
    {...props}
  />
);

export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  showMask = true,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  showMask?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}) => {
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
