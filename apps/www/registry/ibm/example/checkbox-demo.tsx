"use client"

import React from "react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export default function CheckboxDemo() {
  const { toast } = useToast()

  function handleCheckboxClick(checkboxId: string) {
    toast({
      title: "Checkbox Clicked",
      description: `You clicked on the checkbox with ${checkboxId}`,
    })
  }

  return (
    <>
      <Toaster />
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="Default checkbox"
            onClick={() => handleCheckboxClick("Default checkbox")}
          />
          <label
            htmlFor="Default checkbox"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Default checkbox
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="Checked State"
            onClick={() => handleCheckboxClick("Checked State")}
          />
          <label
            htmlFor="Checked State"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Checked State
          </label>
        </div>
      </div>
    </>
  )
}
