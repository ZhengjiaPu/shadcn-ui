import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

// InputFile component styled for IBM's design with blue-600 border and square corners
export default function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture" className="text-blue-600">
        Picture
      </Label>{" "}
      {/* Set label text color to blue */}
      <div className="border border-blue-600 bg-white">
        {" "}
        {/* Use blue border and remove rounded corners */}
        <Input
          id="picture"
          type="file"
          className="w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          style={{ padding: "0.5rem 0" }} // Remove horizontal padding and set vertical padding
        />
      </div>
    </div>
  )
}
