import React, { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

type TooltipsProps = {
  tooltipText?: string;
  buttonText?: string;
  buttonVariant?: "outline" | "default" | "secondary" | "destructive"; // Button variants
  logOpenChange?: boolean; // Whether to log when the tooltip is opened
};

export function Tooltips({
  tooltipText = "Add to library",
  buttonText = "Hover",
  buttonVariant = "outline",
  logOpenChange = true,
}: TooltipsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (logOpenChange && open) {
      console.log("Tooltip is now visible");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip onOpenChange={handleOpenChange}>
        <TooltipTrigger asChild>
          <Button variant={buttonVariant}>{buttonText}</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default Tooltips;
