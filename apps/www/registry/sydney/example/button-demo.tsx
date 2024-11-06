import { Button } from "@/registry/default/ui/button"
import { ToastAction } from "@/registry/default/ui/toast"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export function ButtonDemo() {
  const { toast } = useToast()

  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 hover:border hover:border-orange-600 focus:ring-orange-600"
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
