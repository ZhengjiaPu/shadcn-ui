"use client"

import * as React from "react"

import { Button } from "@/registry/sydney/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/sydney/ui/dropdown-menu"

export default function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-orange-600 hover:text-white"
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="top"
            className="hover:bg-orange-600 hover:text-white"
          >
            Top
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="bottom"
            className="hover:bg-orange-600 hover:text-white"
          >
            Bottom
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="right"
            className="hover:bg-orange-600 hover:text-white"
          >
            Right
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
