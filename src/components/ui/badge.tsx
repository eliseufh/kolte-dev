import * as React from "react";

import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 bg-white/4 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
