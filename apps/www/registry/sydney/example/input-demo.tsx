import { Input } from "@/registry/default/ui/input"

// InputDemo component with a custom wrapper for focus styling
export default function InputDemo() {
  return (
    <div className="relative">
      {" "}
      {/* Add a relative wrapper */}
      <Input
        type="email"
        placeholder="Email"
        className="border border-orange-600 focus:border-orange-600 focus:ring-orange-600 focus:ring-2" // Use Tailwind classes
      />
    </div>
  )
}
