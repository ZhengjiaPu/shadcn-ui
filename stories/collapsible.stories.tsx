import React from "react"
import { Meta, StoryObj } from "@storybook/react"
// Adjust as necessary
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
// Adjust import paths as necessary
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"

// Assuming you're using lucide-react for icons

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: {
    headerText: {
      control: { type: "text" },
      description: "The text in the header section",
      defaultValue: "@peduarte starred 3 repositories",
    },
    firstRepo: {
      control: { type: "text" },
      description: "Text for the first repository",
      defaultValue: "@radix-ui/primitives",
    },
    secondRepo: {
      control: { type: "text" },
      description: "Text for the second repository in the collapsible content",
      defaultValue: "@radix-ui/colors",
    },
    thirdRepo: {
      control: { type: "text" },
      description: "Text for the third repository in the collapsible content",
      defaultValue: "@stitches/react",
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headerText: "@peduarte starred 3 repositories",
    firstRepo: "@radix-ui/primitives",
    secondRepo: "@radix-ui/colors",
    thirdRepo: "@stitches/react",
  },
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">{args.headerText}</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          {args.firstRepo}
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            {args.secondRepo}
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            {args.thirdRepo}
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}
