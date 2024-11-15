"use client"

import * as React from "react"

import { Calendar } from "@/registry/default/ui/calendar"
import { ToastAction } from "@/registry/default/ui/toast"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const { toast } = useToast()

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate) {
      // Trigger toast when a date is selected
      toast({
        description: `You selected: ${selectedDate.toDateString()}`,
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      })
    }
  }

  return (
    <>
      <Toaster />
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-md border"
      />
    </>
  )
}
