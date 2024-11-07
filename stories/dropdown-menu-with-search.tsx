"use client"

import * as React from "react"

import { Button } from "@/registry/sydney/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/sydney/ui/dropdown-menu"

interface DropdownMenuSelectProps {
  option1: string
  option2: string
  option3: string
  option4: string
}

export function DropdownMenuSelect({
  option1 = "Account Settings",
  option2 = "Support",
  option3 = "License",
  option4 = "Signout",
}: DropdownMenuSelectProps) {
  const [selectedOptions, setSelectedOptions] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("")
  const [open, setOpen] = React.useState(false)

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const getButtonLabel = () => {
    if (selectedOptions.length === 0) return "Please select"
    return `Selected: ${selectedOptions.join(", ")}`
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleTriggerClick = () => {
    setOpen((prev) => !prev)
  }

  const options = [option1, option2, option3, option4]
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm)
  )

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" onClick={handleTriggerClick}>
          {getButtonLabel()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <input
          type="text"
          placeholder="search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 m-2 w-48"
        />
        <DropdownMenuSeparator />
        {filteredOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={selectedOptions.includes(option)}
            onCheckedChange={() => toggleOption(option)}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuSelect
