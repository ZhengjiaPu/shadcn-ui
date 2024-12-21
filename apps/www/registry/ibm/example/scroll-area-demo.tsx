import * as React from "react"

import { ScrollArea } from "@/registry/ibm/ui/scroll-area"
import { Separator } from "@/registry/ibm/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 border border-gray-30 bg-gray-10">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none text-gray-90">
          Tags
        </h4>
        {tags.map((tag, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-sm text-gray-80">{tag}</div>
            <Separator className="my-2 border-gray-30" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
