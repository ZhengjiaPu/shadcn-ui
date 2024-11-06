import React, { useState } from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export function DisableTooltip() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (open) {
      console.log("Disabled Tooltip is now visible")
    }
  }

  return (
    <TooltipProvider>
      <Tooltip onOpenChange={handleOpenChange}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            style={{ opacity: 0.5, cursor: "not-allowed" }}
          >
            Hover
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Disabled Tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default DisableTooltip
