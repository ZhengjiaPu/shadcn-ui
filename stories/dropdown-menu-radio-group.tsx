"use client"

import * as React from "react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

interface DropdownMenuRadioGroupProps {
  panelLabel: string
  option1: string
  option2: string
  option3: string
}

export default function DropdownMenuRadioGroupDemo({
  panelLabel = "Panel Position",
  option1 = "Top",
  option2 = "Bottom",
  option3 = "Right",
}: DropdownMenuRadioGroupProps) {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{panelLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">{option1}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            {option2}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">{option3}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
