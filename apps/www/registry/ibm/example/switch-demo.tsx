import { Label } from "@/registry/ibm/ui/label"
import { Switch } from "@/registry/ibm/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label
        htmlFor="airplane-mode"
        style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "18px",
          color: "#262626",
        }}
      >
        Airplane Mode
      </Label>
    </div>
  )
}
