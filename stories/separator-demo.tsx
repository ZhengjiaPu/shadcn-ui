// separator-demo.tsx
import * as React from "react";
import { Separator } from "@/registry/default/ui/separator";

export interface SeparatorDemoProps {
  separatorOrientation?: "horizontal" | "vertical";
  separatorClass?: string;
}

export default function SeparatorDemo({
  separatorOrientation = "horizontal",
  separatorClass = "my-4",
}: SeparatorDemoProps) {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className={separatorClass} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation={separatorOrientation} />
        <div>Docs</div>
        <Separator orientation={separatorOrientation} />
        <div>Source</div>
      </div>
    </div>
  );
}
