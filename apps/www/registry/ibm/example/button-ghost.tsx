import { Button } from "@/registry/default/ui/button"

export default function ButtonGhost() {
  return (
    <Button
      variant="ghost"
      className="bg-transparent text-gray-800 hover:bg-gray-100"
    >
      Ghost
    </Button>
  )
}
