import { Button } from "@/registry/default/ui/button"

export default function ButtonLink() {
  return (
    <Button
      variant="link"
      className="text-black hover:text-orange-600 hover:underline hover:underline-offset-4"
    >
      Link
    </Button>
  )
}
