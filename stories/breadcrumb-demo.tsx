"use client"

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

interface BreadcrumbProps {
  width: string;
  paddingX: number;
  paddingY: number;
  borderRadius: string;
  borderColor: string;
  breadcrumbTextColor: string;
  otherTextColor: string;
  homeText: string;
  componentsText: string;
  breadcrumbText: string;
  documentationText: string;
  themesText: string;
  githubText: string;
}

export default function BreadcrumbDemo({
  width = 'w-1/3',
  paddingX = 2,
  paddingY = 2,
  borderRadius = 'rounded-lg',
  borderColor = 'border-gray-300',
  breadcrumbTextColor = 'text-black',
  otherTextColor = 'text-gray-600',
  homeText = 'Home',
  componentsText = 'Components',
  breadcrumbText = 'Breadcrumb',
  documentationText = 'Documentation',
  themesText = 'Themes',
  githubText = 'GitHub',
}: BreadcrumbProps) {
  return (
    <div className={`${width} p-4 relative z-1`}>
      <Breadcrumb 
        className={`${borderRadius} ${borderColor} border-2 px-${paddingX} py-${paddingY}`}
      >
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className={`${otherTextColor}`}>{homeText}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 ${otherTextColor}`}>
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="absolute z-50">
                <DropdownMenuItem>
                  <BreadcrumbLink href="/docs/documentation" className={`${otherTextColor}`}>{documentationText}</BreadcrumbLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BreadcrumbLink href="/themes" className={`${otherTextColor}`}>{themesText}</BreadcrumbLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BreadcrumbLink href="https://github.com" className={`${otherTextColor}`}>{githubText}</BreadcrumbLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components" className={`${otherTextColor}`}>{componentsText}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className={`${breadcrumbTextColor}`}>{breadcrumbText}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
