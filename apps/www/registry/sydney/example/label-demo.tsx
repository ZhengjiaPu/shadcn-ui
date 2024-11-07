import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function LabelDemo() {
  return (
    <div className="p-4 bg-gray-50">
      <div className="flex items-center space-x-2">
        {/* Custom Checkbox styled with USYD's orange-600 theme color */}
        <Checkbox
          id="terms"
          className="text-white checked:bg-orange-600 checked:border-orange-600 border-gray-300 rounded-none focus:ring-orange-600"
        />
        {/* Use orange-600 for label text color to match USYD style */}
        <Label htmlFor="terms" className="text-orange-600 font-medium">
          Accept terms and conditions
        </Label>
      </div>
    </div>
  )
}
