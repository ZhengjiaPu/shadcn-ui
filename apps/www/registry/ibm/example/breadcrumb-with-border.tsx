import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export function BreadcrumbBasic() {
  const { toast } = useToast()
  const buttonText = "Normal Show Toast"
  return (
    <Breadcrumb>
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
              <DropdownMenuItem className="text-blue-600 hover:text-blue-800 hover:underline">
                Documentation
              </DropdownMenuItem>
              <DropdownMenuItem className="text-blue-600 hover:text-blue-800 hover:underline">
                Themes
              </DropdownMenuItem>
              <DropdownMenuItem className="text-blue-600 hover:text-blue-800 hover:underline">
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
          <BreadcrumbPage
            className="text-blue-600 hover:text-blue-800 hover:underline"
            onClick={() => {
              console.log(buttonText, "has clicked")
              toast({ description: "Breadcrumb." })
            }}
          >
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadcrumbBasic
