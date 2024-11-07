import { Button } from "@/registry/sydney/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/sydney/ui/card"

export function ExpandLink() {
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <CardTitle>For more information and details, please</CardTitle>
        </CardHeader>
        <CardDescription></CardDescription>
        <CardFooter>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <a href="https://www.sydney.edu.au/">Read More →</a>
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default ExpandLink
