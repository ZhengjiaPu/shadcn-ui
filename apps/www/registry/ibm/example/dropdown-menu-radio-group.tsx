"use client"

import * as React from "react"

import { Button } from "@/registry/ibm/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ibm/ui/dropdown-menu"

export default function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-blue-600 hover:text-white"
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Panel Position
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="top"
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            Top
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="bottom"
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            Bottom
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="right"
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            Right
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
