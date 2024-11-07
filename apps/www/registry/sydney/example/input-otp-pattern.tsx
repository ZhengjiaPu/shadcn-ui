import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp"

export default function InputOTPPattern() {
  return (
    <InputOTP
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      className="flex items-center gap-2"
    >
      <InputOTPGroup className="flex gap-2">
        <InputOTPSlot
          index={0}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
        <InputOTPSlot
          index={1}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
        <InputOTPSlot
          index={2}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
        <InputOTPSlot
          index={3}
          className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
        />
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
