"use client"

import * as React from "react"

import { Button } from "@/registry/ibm/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ibm/ui/dropdown-menu"

export function DropdownMenuSelect() {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
  const [searchTerm, setSearchTerm] = React.useState("")
  const [open, setOpen] = React.useState(false)

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
        <Button
          variant="outline"
          onClick={handleTriggerClick}
          className="hover:bg-blue-600 hover:text-white"
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
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
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        />
        <DropdownMenuSeparator />
        {filteredOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={selectedOptions.includes(option)}
            onCheckedChange={() => toggleOption(option)}
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuSelect
