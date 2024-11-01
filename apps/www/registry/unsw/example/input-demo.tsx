import { Input } from "@/registry/default/ui/input"

// InputDemo component styled for IBM's design with blue-600 border and square corners
export default function InputDemo() {
  return (
    <div className="relative">
      {" "}
      {/* Add a relative wrapper */}
      <Input
        type="email"
        placeholder="Email"
        className="border border-blue-600 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-200 ease-in-out" // Tailwind classes for IBM style
      />
    </div>
  )
}
