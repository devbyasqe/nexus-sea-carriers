import * as React from "react";

import { cn } from "@/lib/utils";

const Input = ({
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

export default Input;
