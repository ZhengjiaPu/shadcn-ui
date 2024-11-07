import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-blue-600 text-white rounded-none hover:bg-blue-700">
          Open popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white shadow-lg rounded-lg">
        <div className="space-y-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-lg leading-none">Dimensions</h4>
            <p className="text-xs text-gray-600">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <Label
                htmlFor="width"
                className="text-gray-700 text-sm font-medium"
              >
                Width
              </Label>
              <Input
                id="width"
                defaultValue="100%"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label
                htmlFor="maxWidth"
                className="text-gray-700 text-sm font-medium"
              >
                Max. width
              </Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label
                htmlFor="height"
                className="text-gray-700 text-sm font-medium"
              >
                Height
              </Label>
              <Input
                id="height"
                defaultValue="25px"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label
                htmlFor="maxHeight"
                className="text-gray-700 text-sm font-medium"
              >
                Max. height
              </Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
