import React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp"

export default function InputOTPWithSeparator() {
  return (
    <InputOTP maxLength={6} className="flex items-center gap-2">
      <InputOTPGroup className="flex gap-2">
        <InputOTPSlot
          index={0}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
        <InputOTPSlot
          index={1}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
      </InputOTPGroup>

      <InputOTPSeparator className="text-2xl text-orange-600 mx-1" />

      <InputOTPGroup className="flex gap-2">
        <InputOTPSlot
          index={2}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
        <InputOTPSlot
          index={3}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
      </InputOTPGroup>

      <InputOTPSeparator className="text-2xl text-orange-600 mx-1" />

      <InputOTPGroup className="flex gap-2">
        <InputOTPSlot
          index={4}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
        <InputOTPSlot
          index={5}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
      </InputOTPGroup>
    </InputOTP>
  )
}
