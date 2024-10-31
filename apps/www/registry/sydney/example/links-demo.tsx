import { Button } from "@/registry/sydney/ui/button"

export function EnhancedLink() {
  return (
    <Button asChild className="bg-orange-600 hover:bg-orange-700">
      <a href="https://www.sydney.edu.au/">Read More →</a>
    </Button>
  )
}

export default EnhancedLink
