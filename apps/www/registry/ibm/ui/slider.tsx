"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
      onPointerDown={() => setIsActive(true)}
      onPointerUp={() => setIsActive(false)}
    >
      <SliderPrimitive.Track className="relative h-[4px] w-full grow overflow-hidden bg-secondary">
        <SliderPrimitive.Range
          className={cn(
            "absolute h-full transition-colors",
            isActive ? "bg-blue-600" : "bg-black"
          )}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          "block h-5 w-5 rounded-full transition-colors",
          isActive ? "border-2 border-blue-600 bg-blue-600" : "bg-black"
        )}
      />
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
