import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 flex items-center space-x-2 transition-colors duration-300",
  {
    variants: {
      variant: {
        info: " border-blue-50 bg-blue-100 hover:bg-blue-200 hover:text-blue-800 transition-colors duration-300 ",
        success:
          "border-green-50 bg-green-100 hover:bg-green-200 hover:text-green-800 transition-colors duration-300 ",
        warning:
          "border-yellow-50 bg-yellow-100 hover:bg-yellow-200 hover:text-yellow-800 transition-colors duration-300 ",
        error:
          "border-red-50 bg-red-100 hover:bg-red-200 hover:text-red-800 transition-colors duration-300 ",
        default: "border-blue-50 bg-gray-100 text-gray-800",
      },
      hoverEffect: {
        true: "hover:bg-opacity-75",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hoverEffect: false,
    },
  }
)

const alertAnimations: Record<string, Variants> = {
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  success: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  info: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  warning: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  error: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
}

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof alertVariants> & {
      animate?: boolean
    }
>(({ className, variant, hoverEffect, animate = false, ...props }, ref) => {
  const motionProps = animate ? alertAnimations[variant || "default"] : null

  const alertContent = (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, hoverEffect }), className)}
      {...props}
    />
  )

  return animate ? (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={motionProps}
      transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
    >
      {alertContent}
    </motion.div>
  ) : (
    alertContent
  )
})
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
