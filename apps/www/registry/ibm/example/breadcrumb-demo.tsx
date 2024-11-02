import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/sydney/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/sydney/ui/dropdown-menu"

export function BreadcrumbDemo() {
  const { toast } = useToast()
  const buttonText = "Normal Show Toast"
  return (
    <Breadcrumb
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      <BreadcrumbList>
        <Toaster />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-blue-600 hover:text-blue-800 hover:underline"
            onClick={() => {
              console.log(buttonText, "has clicked")
              toast({ description: "Home." })
            }}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                className="text-blue-600 hover:text-blue-800 hover:underline"
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({ description: "Documentation." })
                }}
              >
                Documentation
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-blue-600 hover:text-blue-800 hover:underline"
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({ description: "Themes." })
                }}
              >
                Themes
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-blue-600 hover:text-blue-800 hover:underline"
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({ description: "GitHub." })
                }}
              >
                GitHub
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-blue-600 hover:text-blue-800 hover:underline"
            onClick={() => {
              console.log(buttonText, "has clicked")
              toast({ description: "Components." })
            }}
          >
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-blue-600 hover:text-blue-800 hover:underline"
            onClick={() => {
              console.log(buttonText, "has clicked")
              toast({ description: "Breadcrumb." })
            }}
          >
            Breadcrumb
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadcrumbDemo
