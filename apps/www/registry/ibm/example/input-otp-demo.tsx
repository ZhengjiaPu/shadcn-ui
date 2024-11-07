import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp"

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6} className="flex items-center gap-2">
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
      </InputOTPGroup>

      <InputOTPSeparator className="text-2xl text-blue-600" />

      <InputOTPGroup className="flex gap-2">
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
  )
}
