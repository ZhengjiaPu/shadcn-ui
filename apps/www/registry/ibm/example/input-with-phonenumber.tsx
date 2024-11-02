import * as React from "react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import { Input } from "@/registry/default/ui/input"

// InputPhoneNumber component styled for IBM's design
export function InputPhoneNumber() {
  const [selectedCountry, setSelectedCountry] = React.useState("+61")
  const [phoneNumber, setPhoneNumber] = React.useState("")

  // Mapping of country codes to the maximum length of phone numbers
  const phoneLengthByCountry: { [key: string]: number } = {
    "+1": 10, // US
    "+44": 10, // UK
    "+61": 9, // Australia
    "+86": 11, // China
  }

  // Handle country selection
  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country)
    setPhoneNumber("") // Reset phone number when country is changed
  }

  // Handle phone number input and enforce length restriction
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const maxLength = phoneLengthByCountry[selectedCountry] || 10 // Default to 10 if no country selected
    // Only allow numeric input and restrict length based on the selected country
    if (/^\d*$/.test(input) && input.length <= maxLength) {
      setPhoneNumber(input)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" // IBM style for button
        >
          {selectedCountry}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={selectedCountry === "+1"}
          onCheckedChange={() => handleCountrySelect("+1")}
        >
          United States (+1)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCountry === "+44"}
          onCheckedChange={() => handleCountrySelect("+44")}
        >
          United Kingdom (+44)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCountry === "+61"}
          onCheckedChange={() => handleCountrySelect("+61")}
        >
          Australia (+61)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCountry === "+86"}
          onCheckedChange={() => handleCountrySelect("+86")}
        >
          China (+86)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>

      <Input
        type="text" // Change type to text for better formatting
        placeholder="123-456-7890"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className="border border-blue-600 bg-white text-blue-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 w-1/2" // IBM style for input
      />
    </DropdownMenu>
  )
}

export default InputPhoneNumber
