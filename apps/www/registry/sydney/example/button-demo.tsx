import { Button } from "@/registry/sydney/ui/button"
import { ToastAction } from "@/registry/sydney/ui/toast"
import { Toaster } from "@/registry/sydney/ui/toaster"
import { useToast } from "@/registry/sydney/ui/use-toast"

export function ButtonDemo() {
  const { toast } = useToast()

  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Button clicked!",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
        }}
      >
        Button
      </Button>
    </>
  )
}
export default ButtonDemo
