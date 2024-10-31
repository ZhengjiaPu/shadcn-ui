import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"

// InputWithButton component styled for IBM's design
export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="Email"
        className="border border-blue-600 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" // IBM style for input
      />
      <Button
        type="submit"
        className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" // IBM style for button
      >
        Subscribe
      </Button>
    </div>
  )
}
