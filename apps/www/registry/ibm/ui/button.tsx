import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-600 rounded-none",
        secondary:
          "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-60 rounded-none",
        ghost:
          "bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-600 rounded-none",
        destructive:
          "bg-red-600 text-white hover:bg-red-500 focus:ring-red-600 rounded-none",
        outline:
          "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 focus:ring-blue-600 rounded-none",
        link: "text-blue-600 underline hover:text-blue-500 focus:ring-blue-600 rounded-none",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-none",
        sm: "h-8 px-3 rounded-none",
        lg: "h-12 px-6 rounded-none",
        icon: "h-10 w-10 rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
