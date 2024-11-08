import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 hover:bg-gray-200 transition-colors rounded-none">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="border border-gray-300 mt-1 rounded-none">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem
            value="apple"
            className="text-black hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            Apple
          </SelectItem>
          <SelectItem
            value="banana"
            className="text-black hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            Banana
          </SelectItem>
          <SelectItem
            value="blueberry"
            className="text-black hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            Blueberry
          </SelectItem>
          <SelectItem
            value="grapes"
            className="text-black hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            Grapes
          </SelectItem>
          <SelectItem
            value="pineapple"
            className="text-black hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
