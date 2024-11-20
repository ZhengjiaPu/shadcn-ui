import { Button } from "@/registry/ibm/ui/button"
import { ToastAction } from "@/registry/ibm/ui/toast"
import { Toaster } from "@/registry/ibm/ui/toaster"
import { useToast } from "@/registry/ibm/ui/use-toast"

export function ButtonDemo() {
  const { toast } = useToast()

  return (
    <>
      <Toaster />
      <Button
        variant="default"
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
