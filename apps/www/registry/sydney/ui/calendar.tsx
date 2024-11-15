"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-white shadow-md rounded-md", className)} // Light gray background
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center text-gray-800", // Darker gray caption text
        caption_label: "text-base font-semibold", // Larger, bolder caption text
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell: "text-gray-600 font-medium text-xs text-center w-9", // Smaller font for headers in gray
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-ochre rounded-md transition-colors"
        ),
        day_selected:
          "bg-ochre text-white font-semibold hover:bg-ochre-dark focus:bg-ochre-dark", // Ochre for selected day
        day_today: "text-ochre font-bold", // Bold ochre text for today
        day_outside: "text-gray-400 opacity-50",
        day_disabled: "text-gray-300 opacity-50",
        day_range_middle: "bg-ochre-light text-ochre",
        day_hidden: "invisible",
        ...classNames,
      }}
      modifiersClassNames={{
        selected: "bg-ochre text-white font-semibold h-9 w-9", // Make selected day ochre
      }}
      modifiersStyles={{
        selected: {
          backgroundColor: "#FF6F00", // University of Sydney ochre color
          color: "#ffffff",
          borderRadius: "4px",
        },
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-4 w-4 text-gray-600 hover:text-gray-800" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-4 w-4 text-gray-600 hover:text-gray-800" />
        ),
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
