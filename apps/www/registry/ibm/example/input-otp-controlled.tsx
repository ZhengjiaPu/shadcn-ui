"use client"

import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp"

export default function InputOTPControlled() {
  const [value, setValue] = React.useState("")

  return (
    <div className="space-y-4">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
        className="flex items-center gap-2"
      >
        <InputOTPGroup className="flex gap-2">
          <InputOTPSlot
            index={0}
            className="w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-none text-xl text-center focus:border-blue-800 focus:outline-none transition-colors"
          />
          <InputOTPSlot
            index={1}
            className="w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-none text-xl text-center focus:border-blue-800 focus:outline-none transition-colors"
          />
          <InputOTPSlot
            index={2}
            className="w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-none text-xl text-center focus:border-blue-800 focus:outline-none transition-colors"
          />
          <InputOTPSlot
            index={3}
            className="w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-none text-xl text-center focus:border-blue-800 focus:outline-none transition-colors"
          />
          <InputOTPSlot
            index={4}
            className="w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-none text-xl text-center focus:border-blue-800 focus:outline-none transition-colors"
          />
          <InputOTPSlot
            index={5}
            className="w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-none text-xl text-center focus:border-blue-800 focus:outline-none transition-colors"
          />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm text-gray-700">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>
            You entered: <span className="font-semibold">{value}</span>
          </>
        )}
      </div>
    </div>
  )
}
