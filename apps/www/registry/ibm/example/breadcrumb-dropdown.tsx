import { ChevronDownIcon, SlashIcon } from "@radix-ui/react-icons"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/new-york/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

export default function BreadcrumbWithDropdown() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline">
              Components
              <ChevronDownIcon />
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
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-blue-600 hover:text-blue-800 hover:underline">
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
