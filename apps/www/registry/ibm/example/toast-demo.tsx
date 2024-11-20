import { Button } from "@/registry/ibm/ui/button"
import { ToastAction } from "@/registry/ibm/ui/toast"
import { Toaster } from "@/registry/ibm/ui/toaster"
import { useToast } from "@/registry/ibm/ui/use-toast"

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
        }}
      >
        Add to calendar
      </Button>
    </>
  )
}
