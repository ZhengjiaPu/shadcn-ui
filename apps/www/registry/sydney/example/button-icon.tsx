import { ChevronRight } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonIcon() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-100"
    >
      <ChevronRight className="h-4 w-4 text-orange-600" />
    </Button>
  )
}
