"use client"

import * as React from "react"

import { Button } from "@/registry/sydney/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/sydney/ui/dropdown-menu"

interface DropdownMenuWithHeaderProps {
  headerLabel: string
  userEmail: string
  option1: string
  option2: string
  option3: string
  option4: string
}

export function DropdownMenuwithHeader({
  headerLabel = "Signed in as",
  userEmail = "nzha9876@uni.sydney.edu.au",
  option1 = "Account Settings",
  option2 = "Support",
  option3 = "License",
  option4 = "Signout",
}: DropdownMenuWithHeaderProps) {
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
        <DropdownMenuLabel>{headerLabel}</DropdownMenuLabel>
        <div className="email">{userEmail}</div>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes(option1)}
          onCheckedChange={() => toggleOption(option1)}
        >
          {option1}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes(option2)}
          onCheckedChange={() => toggleOption(option2)}
        >
          {option2}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes(option3)}
          onCheckedChange={() => toggleOption(option3)}
        >
          {option3}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.includes(option4)}
          onCheckedChange={() => toggleOption(option4)}
        >
          {option4}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuwithHeader
