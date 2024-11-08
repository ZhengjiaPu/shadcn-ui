import * as React from "react"

import { cn } from "@/lib/utils"

// 定义 variant 类型
type TableVariants = "default" | "colorful"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { variant?: TableVariants }
>(({ className, variant = "default", ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(
        "w-full text-sm caption-bottom",
        variant === "colorful"
          ? "shadow-md border border-gray-300 rounded-lg"
          : "shadow-lg",
        className
      )}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { variant?: TableVariants }
>(({ className, variant = "default", ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      variant === "colorful"
        ? "bg-blue-100 [&_tr]:border-b border-blue-300"
        : "bg-gray-200 [&_tr]:border-b",
      className
    )}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { variant?: TableVariants }
>(({ className, variant = "default", ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      variant === "colorful"
        ? "[&_tr:last-child]:border-0"
        : "[&_tr:last-child]:border-0",
      className
    )}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { variant?: TableVariants }
>(({ className, variant = "default", ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      variant === "colorful"
        ? "bg-blue-100 border-t border-blue-300 font-medium"
        : "bg-gray-200 border-t font-medium",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { variant?: TableVariants }
>(({ className, variant = "default", ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      variant === "colorful"
        ? "bg-white even:bg-gray-50 hover:bg-blue-50 border-b border-gray-300"
        : "bg-white text-gray-600 hover:bg-gray-200 hover:text-black border-b",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { variant?: TableVariants }
>(({ className, variant = "default", ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-semibold",
      variant === "colorful"
        ? "text-black border-b border-blue-300"
        : "text-black",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { variant?: TableVariants }
>(({ className, variant = "default", ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle",
      variant === "colorful"
        ? "text-gray-800 border-b border-gray-300"
        : "text-gray-600",
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & { variant?: TableVariants }
>(({ className, variant = "default", ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "mt-4 text-sm",
      variant === "colorful" ? "text-gray-700" : "text-gray-600",
      className
    )}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
