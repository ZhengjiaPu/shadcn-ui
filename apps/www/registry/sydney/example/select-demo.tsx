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
      <SelectTrigger className="w-[180px] border border-orange-500 focus:border-orange-600 focus:outline-none focus:ring focus:ring-orange-200 hover:bg-orange-100 transition-colors ">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="border border-orange-500 mt-1 max-h-60 overflow-y-auto ">
        <SelectGroup>
          <SelectLabel className="text-orange-600">Fruits</SelectLabel>
          <SelectItem
            value="apple"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Apple
          </SelectItem>
          <SelectItem
            value="banana"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Banana
          </SelectItem>
          <SelectItem
            value="blueberry"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Blueberry
          </SelectItem>
          <SelectItem
            value="grapes"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Grapes
          </SelectItem>
          <SelectItem
            value="pineapple"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
