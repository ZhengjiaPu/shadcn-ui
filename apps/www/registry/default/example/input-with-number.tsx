import * as React from "react"

import { Input } from "@/registry/default/ui/input"

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
      style={{ width: "25%" }}
    />
  )
}

export default InputNumber
