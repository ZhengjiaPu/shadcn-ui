"use client"

import { Button } from "@/registry/ibm/ui/button"
import { useToast } from "@/registry/ibm/ui/use-toast"

export default function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
