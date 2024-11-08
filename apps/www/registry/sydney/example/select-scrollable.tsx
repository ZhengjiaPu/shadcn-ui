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

export default function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px] border border-orange-500 focus:border-orange-600 focus:outline-none focus:ring focus:ring-orange-200 hover:bg-orange-100 transition-colors ">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent className="border border-orange-500 mt-1 max-h-60 overflow-y-auto ">
        <SelectGroup>
          <SelectLabel className="text-orange-600">North America</SelectLabel>
          <SelectItem
            value="est"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Eastern Standard Time (EST)
          </SelectItem>
          <SelectItem
            value="cst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Central Standard Time (CST)
          </SelectItem>
          <SelectItem
            value="mst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Mountain Standard Time (MST)
          </SelectItem>
          <SelectItem
            value="pst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Pacific Standard Time (PST)
          </SelectItem>
          <SelectItem
            value="akst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Alaska Standard Time (AKST)
          </SelectItem>
          <SelectItem
            value="hst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Hawaii Standard Time (HST)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel className="text-orange-600">Europe & Africa</SelectLabel>
          <SelectItem
            value="gmt"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Greenwich Mean Time (GMT)
          </SelectItem>
          <SelectItem
            value="cet"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Central European Time (CET)
          </SelectItem>
          <SelectItem
            value="eet"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Eastern European Time (EET)
          </SelectItem>
          <SelectItem
            value="west"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem
            value="cat"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Central Africa Time (CAT)
          </SelectItem>
          <SelectItem
            value="eat"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            East Africa Time (EAT)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel className="text-orange-600">Asia</SelectLabel>
          <SelectItem
            value="msk"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Moscow Time (MSK)
          </SelectItem>
          <SelectItem
            value="ist"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            India Standard Time (IST)
          </SelectItem>
          <SelectItem
            value="cst_china"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            China Standard Time (CST)
          </SelectItem>
          <SelectItem
            value="jst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Japan Standard Time (JST)
          </SelectItem>
          <SelectItem
            value="kst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Korea Standard Time (KST)
          </SelectItem>
          <SelectItem
            value="ist_indonesia"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel className="text-orange-600">
            Australia & Pacific
          </SelectLabel>
          <SelectItem
            value="awst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem
            value="acst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem
            value="aest"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem
            value="nzst"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            New Zealand Standard Time (NZST)
          </SelectItem>
          <SelectItem
            value="fjt"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Fiji Time (FJT)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel className="text-orange-600">South America</SelectLabel>
          <SelectItem
            value="art"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Argentina Time (ART)
          </SelectItem>
          <SelectItem
            value="bot"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Bolivia Time (BOT)
          </SelectItem>
          <SelectItem
            value="brt"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Brasilia Time (BRT)
          </SelectItem>
          <SelectItem
            value="clt"
            className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          >
            Chile Standard Time (CLT)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
