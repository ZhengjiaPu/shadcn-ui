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
      className={cn("p-4 bg-gray-50 border shadow-sm", className)}
      classNames={{
        months: "flex flex-col space-y-2",
        month: "space-y-2",
        caption: "flex justify-center items-center pt-1 relative",
        caption_label: "text-base font-semibold text-gray-900",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-6 w-6 bg-transparent p-0 text-gray-600 hover:text-gray-900"
        ),
        nav_button_previous: "absolute left-2",
        nav_button_next: "absolute right-2",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell: "text-gray-500 font-medium text-sm text-center w-10",
        row: "flex w-full",
        cell: "h-10 w-10 text-center text-sm p-0 relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 font-normal transition-colors bg-transparent hover:bg-gray-200 focus:outline-none",
          "rounded-none"
        ),
        day_selected: "h-10 w-10 font-semibold text-white",
        // Adjust styling for today's date to include a square indicator
        day_today:
          "relative text-blue-600 font-semibold after:content-[''] after:absolute after:bottom-[4px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-blue-600",
        day_outside: "text-gray-400",
        day_disabled: "text-gray-300 opacity-50",
        day_range_middle: "bg-blue-100 text-blue-700",
        day_hidden: "invisible",
        ...classNames,
      }}
      modifiersClassNames={{
        selected: "bg-blue-600 text-white font-semibold h-10 w-10",
      }}
      modifiersStyles={{
        selected: {
          backgroundColor: "#2563eb",
          color: "#ffffff",
          borderRadius: "0px",
        },
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-5 w-5" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-5 w-5" />,
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
