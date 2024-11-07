import * as React from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp"

export default function InputOTPIndex({
  maxLength = 6,
  separatorCount = 0,
}: {
  maxLength?: number
  separatorCount?: number
}) {
  // Dynamically generate the layout of slots and separators based on maxLength and separatorCount
  const slotsPerGroup = Math.floor(maxLength / (separatorCount + 1))
  const groups = Array.from({ length: separatorCount + 1 }, (_, groupIndex) => (
    <InputOTPGroup key={groupIndex}>
      {Array.from({ length: slotsPerGroup }, (_, slotIndex) => (
        <InputOTPSlot key={slotIndex} index={groupIndex * slotsPerGroup + slotIndex} />
      ))}
    </InputOTPGroup>
  ))

  return (
    <InputOTP maxLength={maxLength}>
      {groups.map((group, index) => (
        <React.Fragment key={index}>
          {group}
          {index < separatorCount && <InputOTPSeparator />}
        </React.Fragment>
      ))}
    </InputOTP>
  )
}
