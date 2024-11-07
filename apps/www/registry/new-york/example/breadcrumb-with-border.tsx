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
    <Breadcrumb className="border border-black pr-2">
      <BreadcrumbList>
        <Toaster />
        <BreadcrumbItem>
          <BreadcrumbLink
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
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({ description: "Documentation." })
                }}
              >
                Documentation
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({ description: "Themes." })
                }}
              >
                Themes
              </DropdownMenuItem>
              <DropdownMenuItem
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
