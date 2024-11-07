// popover-index.tsx
import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

interface PopoverDemoProps {
  buttonLabel?: string
  popoverBorderColor?: string
  buttonBackgroundColor?: string
  buttonFontColor?: string
  titleText?: string
  descriptionText?: string
  initialWidth?: string
  initialMaxWidth?: string
  initialHeight?: string
  initialMaxHeight?: string
}

export default function PopoverDemo({
  buttonLabel = "Open popover",
  popoverBorderColor = "#000000",
  buttonBackgroundColor = "#ffffff",
  buttonFontColor = "#000000",
  titleText = "Dimensions",
  descriptionText = "Set the dimensions for the layer.",
  initialWidth = "100%",
  initialMaxWidth = "300px",
  initialHeight = "25px",
  initialMaxHeight = "none",
}: PopoverDemoProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-opacity-80"
          style={{ backgroundColor: buttonBackgroundColor, color: buttonFontColor }}
        >
          {buttonLabel}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-4 bg-white border rounded-md"
        style={{ borderColor: popoverBorderColor }}
      >
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg" style={{ color: popoverBorderColor }}>
              {titleText}
            </h4>
            <p className="text-sm text-gray-600">
              {descriptionText}
            </p>
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width" className="text-gray-700">Width</Label>
              <Input
                id="width"
                defaultValue={initialWidth}
                className="col-span-2 h-8 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth" className="text-gray-700">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue={initialMaxWidth}
                className="col-span-2 h-8 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height" className="text-gray-700">Height</Label>
              <Input
                id="height"
                defaultValue={initialHeight}
                className="col-span-2 h-8 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight" className="text-gray-700">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue={initialMaxHeight}
                className="col-span-2 h-8 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
