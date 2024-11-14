"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    backgroundColor?: string
    trackColor?: string
    thumbColor?: string
    size?: "small" | "medium" | "large"
  }
>(
  (
    {
      className,
      backgroundColor = "bg-gray-200",
      trackColor = "bg-black",
      thumbColor = "bg-black",
      size = "medium",
      ...props
    },
    ref
  ) => {
    let sliderSizeClass
    switch (size) {
      case "small":
        sliderSizeClass = "h-1"
        break
      case "large":
        sliderSizeClass = "h-4"
        break
      default:
        sliderSizeClass = "h-2"
        break
    }

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        {/* Track with rounded-full to ensure rounded corners */}
        <SliderPrimitive.Track
          className={cn(
            "relative w-full overflow-hidden rounded-full",
            backgroundColor,
            sliderSizeClass
          )}
        >
          {/* Range with full height and rounded-full */}
          <SliderPrimitive.Range
            className={cn("absolute h-full rounded-full", trackColor)}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            "block rounded-full transition-colors",
            thumbColor,
            size === "small"
              ? "h-3 w-3"
              : size === "large"
              ? "h-6 w-6"
              : "h-4 w-4"
          )}
        />
      </SliderPrimitive.Root>
    )
  }
)

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
