import * as React from "react"

import { Input } from "@/registry/default/ui/input"

// InputNumber component styled for IBM's design
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
      className="border border-blue-600 bg-white text-blue-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 w-1/4" // IBM style
    />
  )
}

export default InputNumber
