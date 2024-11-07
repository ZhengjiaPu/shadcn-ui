import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function LabelDemo() {
  return (
    <div className="p-4 bg-gray-50">
      <div className="flex items-center space-x-2">
        {/* Custom Checkbox styled in IBM Carbon Design System colors */}
        <Checkbox
          id="terms"
          className="text-blue-600 focus:ring-blue-600 checked:bg-blue-600 checked:border-blue-600 border-gray-500 rounded-none"
        />
        {/* Grey label text for a minimalistic IBM style */}
        <Label htmlFor="terms" className="text-gray-700 font-medium">
          Accept terms and conditions
        </Label>
      </div>
    </div>
  )
}
