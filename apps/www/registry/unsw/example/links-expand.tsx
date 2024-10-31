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
          <a
            href="https://www.sydney.edu.au/"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            Read more ↓
          </a>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default ExpandLink
