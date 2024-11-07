import { Loader2 } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonLoading() {
  return (
    <Button disabled className="bg-orange-100 text-orange-600">
      <Loader2 className="mr-2 h-4 w-4 animate-spin text-orange-600" />
      Please wait
    </Button>
  )
}
