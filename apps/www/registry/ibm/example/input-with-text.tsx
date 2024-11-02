import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

// InputWithText component styled for IBM's design
export default function InputWithText() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2" className="text-blue-600">
        Email
      </Label>{" "}
      {/* Set label text color to blue */}
      <Input
        type="email"
        id="email-2"
        placeholder="Email"
        className="border border-blue-600 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" // IBM style for input
      />
      <p className="text-sm text-gray-600">Enter your email address.</p>{" "}
      {/* Update to IBM text color */}
    </div>
  )
}
