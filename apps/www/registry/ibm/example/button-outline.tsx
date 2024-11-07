import { Button } from "@/registry/default/ui/button"

export default function ButtonOutline() {
  return (
    <Button
      variant="outline"
      className="bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-100"
    >
      Outline
    </Button>
  )
}
