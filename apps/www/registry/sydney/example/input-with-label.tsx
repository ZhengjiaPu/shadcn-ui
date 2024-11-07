import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

// InputWithLabel component styled for Sydney style
export default function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="text-orange-600">
        Email
      </Label>{" "}
      {/* Set label text color to orange */}
      <Input
        type="email"
        id="email"
        placeholder="Email"
        className="border border-orange-600 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600" // Use Tailwind classes for Sydney style
      />
    </div>
  )
}
