"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/registry/sydney/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/sydney/ui/dropdown-menu"

interface DropdownMenuCheckboxesProps {
  option1: string
  option2: string
  option3: string
  option4: string
}

export function DropdownMenuCheckboxes({
  option1 = "Account Settings",
  option2 = "Support",
  option3 = "License",
  option4 = "Signout",
}: DropdownMenuCheckboxesProps) {
  const [selectedOptions, setSelectedOptions] = React.useState([])

  const toggleOption = (option) => {
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
        <Button variant="outline">{getButtonLabel()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          className="pl-8"
          checked={selectedOptions.includes(option1)}
          onCheckedChange={() => toggleOption(option1)}
        >
          <span className="absolute left-2"></span> {}
          {option1}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="pl-8"
          checked={selectedOptions.includes(option2)}
          onCheckedChange={() => toggleOption(option2)}
        >
          <span className="absolute left-2"></span> {}
          {option2}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="pl-8"
          checked={selectedOptions.includes(option3)}
          onCheckedChange={() => toggleOption(option3)}
        >
          <span className="absolute left-2"></span> {}
          {option3}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="pl-8"
          checked={selectedOptions.includes(option4)}
          onCheckedChange={() => toggleOption(option4)}
        >
          <span className="absolute left-2"></span> {}
          {option4}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuCheckboxes
