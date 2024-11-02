import * as React from "react"
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import { motion } from "framer-motion"

import { Alert } from "@/registry/sydney/ui/alert"

const variantAnimations = {
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  destructive: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  information: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  warning: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  success: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
}

export default function AlertAnimation() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Info Alert */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.default}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="border-l-8 border-t border-r border-b border-blue-300 bg-blue-50 text-blue-800 transition-colors duration-300 rounded-none flex items-center p-4">
          <RocketIcon className="h-5 w-5 mr-2 text-blue-700" />
          <span className="font-medium">Heads up!</span>
        </Alert>
      </motion.div>

      {/* Success Alert */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.success}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="border-l-8  border-t border-r border-b border-green-300 bg-green-50 text-green-800 transition-colors duration-300 rounded-none flex items-center p-4">
          <CheckCircledIcon className="h-5 w-5 mr-2 text-green-700" />
          <span className="font-medium">Successful alert</span>
        </Alert>
      </motion.div>

      {/* Information Alert */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.information}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="border-l-8  border-t border-r border-b border-blue-300 bg-blue-50 text-blue-700 transition-colors duration-300 rounded-none flex items-center p-4">
          <InfoCircledIcon className="h-5 w-5 mr-2 text-blue-700" />
          <span className="font-medium">Information alert</span>
        </Alert>
      </motion.div>

      {/* Warning Alert */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.warning}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="border-l-8  border-t border-r border-b border-yellow-300 bg-yellow-50 text-yellow-800 transition-colors duration-300 rounded-none flex items-center p-4">
          <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-yellow-700" />
          <span className="font-medium">Warning alert</span>
        </Alert>
      </motion.div>

      {/* Error Alert */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.destructive}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="border-l-8  border-t border-r border-b border-red-300 bg-red-50 text-red-800 transition-colors duration-300 rounded-none flex items-center p-4">
          <CrossCircledIcon className="h-5 w-5 mr-2 text-red-700" />
          <span className="font-medium">Error alert</span>
        </Alert>
      </motion.div>
    </div>
  )
}
