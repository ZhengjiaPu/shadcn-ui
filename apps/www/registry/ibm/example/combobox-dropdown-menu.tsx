"use client"

import * as React from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

export default function ComboboxDropdownMenu() {
  const [label, setLabel] = React.useState("feature")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
      <p
        className="text-sm font-medium leading-none"
        style={{
          fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
          fontWeight: 300,
        }}
      >
        <span
          className="mr-2 rounded-lg bg-blue-600 px-2 py-1 text-xs text-primary-foreground"
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          {label}
        </span>
        <span
          className="text-muted-foreground"
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Create a new project
        </span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            <DotsHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            Actions
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem
              style={{
                fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                fontWeight: 300,
              }}
            >
              Assign to...
            </DropdownMenuItem>
            <DropdownMenuItem
              style={{
                fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                fontWeight: 300,
              }}
            >
              Set due date...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger
                style={{
                  fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                  fontWeight: 300,
                }}
              >
                Apply label
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                <Command>
                  <CommandInput
                    placeholder="Filter label..."
                    autoFocus={true}
                    className="h-9"
                    style={{
                      fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                      fontWeight: 300,
                    }}
                  />
                  <CommandList>
                    <CommandEmpty>No label found.</CommandEmpty>
                    <CommandGroup>
                      {labels.map((label) => (
                        <CommandItem
                          key={label}
                          value={label}
                          onSelect={(value) => {
                            setLabel(value)
                            setOpen(false)
                          }}
                          style={{
                            fontFamily:
                              "Roboto, Helvetica Neue, Arial, sans-serif",
                            fontWeight: 300,
                          }}
                        >
                          {label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600"
              style={{
                fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                fontWeight: 300,
              }}
            >
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
