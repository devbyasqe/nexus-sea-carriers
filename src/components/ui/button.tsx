import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-300 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-secondary text-foreground-secondary",
        primary: "bg-primary text-white",
        success: "bg-success text-black",
        muted: "bg-muted text-foreground",
        theme:
          "group-disabled/button:bg-background group-disabled/button:text-foreground-muted group-disabled/button:border",
      },
      buttonSize: {
        default: "h-9 gap-2 text-sm font-medium whitespace-nowrap",
        icon: "size-9",
      },
      iconSize: {
        default: "size-9",
      },
      padding: {
        default: "px-4 py-2",
        "icon-last": "ps-4 pe-3",
      },
    },
    defaultVariants: {
      variant: "default",
      buttonSize: "default",
      iconSize: "default",
      padding: "icon-last",
    },
  },
);

function Button({
  hoverScale = true,
  svgIcon,
  className,
  textWrapperClassName,
  iconWrapperClassName,
  variant,
  padding,
  children,
  buttonSize,
  iconSize,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    textWrapperClassName?: string;
    iconWrapperClassName?: string;
    svgIcon?: React.ReactNode;
    hoverScale?: boolean;
  }) {
  return (
    <button
      data-slot="button"
      type="button"
      className={cn(
        "group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center transition-all duration-300 disabled:pointer-events-none",
        hoverScale && "hover:scale-105 focus-visible:scale-105 active:scale-95",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          buttonVariants({
            variant,
            padding,
            buttonSize,
            iconSize: null,
          }),
          textWrapperClassName,
        )}
      >
        {children}
      </div>
      {svgIcon && (
        <div
          className={cn(
            "-ms-1",
            buttonVariants({
              variant,
              iconSize,
              buttonSize: null,
              padding: null,
            }),
            iconWrapperClassName,
          )}
        >
          {svgIcon}
        </div>
      )}
    </button>
  );
}

export { Button, buttonVariants };
