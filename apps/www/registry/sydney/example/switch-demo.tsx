import { Label } from "@/registry/sydney/ui/label"
import { Switch } from "@/registry/sydney/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label
        htmlFor="airplane-mode"
        className="font-sans text-base leading-snug text-charcoal"
      >
        Airplane Mode
      </Label>
    </div>
  )
}
