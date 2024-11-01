import React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Badge } from "@/registry/default/ui/badge"

// Adjust your import path as necessary

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    content: {
      control: { type: "text" },
      description: "The text displayed on the badge",
      defaultValue: "Badge",
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "secondary", "destructive", "outline"],
      },
      description: "Badge style variant",
      defaultValue: "default",
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: "Badge",
    variant: "default",
  },
  render: (args) => <Badge variant={args.variant}>{args.content}</Badge>,
}

export const Secondary: Story = {
  args: {
    content: "Secondary",
    variant: "secondary",
  },
  render: (args) => <Badge variant={args.variant}>{args.content}</Badge>,
}

export const Destructive: Story = {
  args: {
    content: "Destructive",
    variant: "destructive",
  },
  render: (args) => <Badge variant={args.variant}>{args.content}</Badge>,
}

export const Outline: Story = {
  args: {
    content: "Outline",
    variant: "outline",
  },
  render: (args) => <Badge variant={args.variant}>{args.content}</Badge>,
}
