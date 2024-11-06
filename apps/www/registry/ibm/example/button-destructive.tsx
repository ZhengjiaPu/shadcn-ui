import { Button } from "@/registry/default/ui/button"

export default function ButtonDestructive() {
  return (
    <Button
      variant="destructive"
      className="bg-red-600 text-white hover:bg-red-700"
    >
      Danger
    </Button>
  )
}
