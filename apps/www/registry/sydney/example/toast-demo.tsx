import { Button } from "@/registry/sydney/ui/button"
import { ToastAction } from "@/registry/sydney/ui/toast"
import { Toaster } from "@/registry/sydney/ui/toaster"
import { useToast } from "@/registry/sydney/ui/use-toast"

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
