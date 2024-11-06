import { Loader2 } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonLoading() {
  return (
    <Button disabled className="bg-gray-300 text-gray-700">
      <Loader2 className="mr-2 h-4 w-4 animate-spin text-gray-700" />
      Please wait
    </Button>
  )
}
