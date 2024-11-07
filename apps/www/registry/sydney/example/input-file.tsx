import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

// InputFile component styled for Sydney style
export default function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture" className="text-orange-600">
        Picture
      </Label>{" "}
      {/* Set label text color to orange */}
      <div className="border border-orange-600 bg-white rounded-md">
        {" "}
        {/* Add wrapper for custom styling */}
        <Input
          id="picture"
          type="file"
          className="w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
          style={{ padding: "0.5rem 0" }} // Remove horizontal padding and set vertical padding
        />
      </div>
    </div>
  )
}
