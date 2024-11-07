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

export function DropdownMenuSelect() {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
  const [searchTerm, setSearchTerm] = React.useState<string>("")
  const [open, setOpen] = React.useState<boolean>(false)

  const toggleOption = (option: string) => {
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleTriggerClick = () => {
    setOpen((prev) => !prev)
  }

  const options = ["Account Settings", "Support", "License", "Signout"]
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
