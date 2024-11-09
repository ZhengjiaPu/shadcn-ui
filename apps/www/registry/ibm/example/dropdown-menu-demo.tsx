"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/registry/ibm/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ibm/ui/dropdown-menu"

export function DropdownMenuCheckboxes() {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([])

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const getButtonLabel = () => {
    if (selectedOptions.length === 0) return "Select Options"
    return `Selected: ${selectedOptions.join(", ")}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          {getButtonLabel()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes("Account Settings")}
          onCheckedChange={() => toggleOption("Account Settings")}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Account Settings
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes("Support")}
          onCheckedChange={() => toggleOption("Support")}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Support
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes("License")}
          onCheckedChange={() => toggleOption("License")}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          License
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes("Signout")}
          onCheckedChange={() => toggleOption("Signout")}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Signout
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuCheckboxes
