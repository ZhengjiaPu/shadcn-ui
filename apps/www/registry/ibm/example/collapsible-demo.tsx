"use client"

import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york/ui/collapsible"

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold" style={{ fontFamily: 'Segoe UI' }}>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm shadow-sm" style={{ fontFamily: 'Segoe UI' }}>
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2" style={{ fontFamily: 'Segoe UI' }}>
        <div className="rounded-md border px-4 py-2 text-sm shadow-sm" style={{ fontFamily: 'Segoe UI' }}>
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 text-sm shadow-sm" style={{ fontFamily: 'Segoe UI' }}>
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
