import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"

// InputWithButton component styled for Sydney style
export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="Email"
        className="border border-orange-600 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600" // Use Tailwind classes for Sydney style
      />
      <Button
        type="submit"
        className="bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50" // Use Tailwind classes for Sydney button style
      >
        Subscribe
      </Button>
    </div>
  )
}
