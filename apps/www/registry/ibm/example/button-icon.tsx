import { ChevronRight } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonIcon() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-100"
    >
      <ChevronRight className="h-4 w-4 text-gray-800" />
    </Button>
  )
}
