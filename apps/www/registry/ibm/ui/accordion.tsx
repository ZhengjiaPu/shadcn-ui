"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

// Main Accordion Component
const Accordion = AccordionPrimitive.Root

// Accordion Item Component with Blue Border on Open
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-t border-gray-300 transition-colors data-[state=open]:shadow-lg",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

// Accordion Trigger Component with Chevron at End and Bold Blue Outline on Open
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between border border-transparent p-4 text-lg font-medium transition-all duration-300 data-[state=open]:border-2 data-[state=open]:border-blue-600",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="h-5 w-5 text-blue-600 transition-transform duration-200 data-[state=open]:rotate-180"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

// Accordion Content Component with Padding
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden px-4 pb-4 pt-2 text-base transition-all duration-300 data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("text-gray-700", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
