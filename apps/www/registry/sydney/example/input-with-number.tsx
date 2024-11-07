import * as React from "react"

import { Input } from "@/registry/default/ui/input"

// InputNumber component styled for Sydney style
export function InputNumber() {
  const [value, setValue] = React.useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    // Only numbers are allowed
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue)
    }
  }

  return (
    <Input
      type="number"
      value={value}
      onChange={handleChange}
      placeholder="Enter Amount"
      className="border border-orange-600 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 w-1/4" // Sydney style
    />
  )
}

export default InputNumber
