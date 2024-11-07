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
        <Button
          variant="outline"
          className="border-orange-600 text-orange-600 hover:bg-orange-100"
        >
          Open popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white border border-orange-600 rounded-md shadow-md">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-orange-600 leading-none">
              Dimensions
            </h4>
            <p className="text-sm text-gray-600">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width" className="text-gray-700">
                Width
              </Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth" className="text-gray-700">
                Max. width
              </Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height" className="text-gray-700">
                Height
              </Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight" className="text-gray-700">
                Max. height
              </Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
