import React from "react"
import { Meta, StoryObj } from "@storybook/react"

import ComboboxDemo from "./combobox-demo"
// Adjust path
import ComboboxDropdownMenu from "./combobox-dropdown-menu"
// Adjust path
import ComboboxForm from "./combobox-form"
// Adjust path
import ComboboxPopover from "./combobox-popover"
// Adjust path
import ComboboxResponsive from "./combobox-responsive"

// Adjust path

const meta: Meta<typeof ComboboxDemo> = {
  title: "Components/Combobox",
  component: ComboboxDemo,
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "The placeholder text for the combobox",
      defaultValue: "Select framework...",
    },
    label1: {
      control: { type: "text" },
      description: "The label for the first option",
      defaultValue: "Next.js",
    },
    label2: {
      control: { type: "text" },
      description: "The label for the second option",
      defaultValue: "SvelteKit",
    },
    label3: {
      control: { type: "text" },
      description: "The label for the third option",
      defaultValue: "Nuxt.js",
    },
    label4: {
      control: { type: "text" },
      description: "The label for the fourth option",
      defaultValue: "Remix",
    },
    label5: {
      control: { type: "text" },
      description: "The label for the fifth option",
      defaultValue: "Astro",
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Select framework...",
    label1: "Next.js",
    label2: "SvelteKit",
    label3: "Nuxt.js",
    label4: "Remix",
    label5: "Astro",
  },
  render: (args) => (
    <ComboboxDemo
      frameworks={[
        { value: "next.js", label: args.label1 },
        { value: "sveltekit", label: args.label2 },
        { value: "nuxt.js", label: args.label3 },
        { value: "remix", label: args.label4 },
        { value: "astro", label: args.label5 },
      ]}
      placeholder={args.placeholder}
    />
  ),
}

export const DropdownMenu: Story = {
  args: {
    label1: "feature",
    label2: "bug",
    label3: "enhancement",
    label4: "documentation",
    label5: "design",
    label6: "question",
    label7: "maintenance",
  },
  render: (args) => (
    <ComboboxDropdownMenu
      labels={[
        args.label1,
        args.label2,
        args.label3,
        args.label4,
        args.label5,
        args.label6,
        args.label7,
      ]}
    />
  ),
}

export const Form: Story = {
  args: {
    language1: "English",
    language2: "French",
    language3: "German",
    language4: "Spanish",
    language5: "Portuguese",
    language6: "Russian",
    language7: "Japanese",
    language8: "Korean",
    language9: "Chinese",
  },
  render: (args) => (
    <ComboboxForm
      languages={[
        { label: args.language1, value: "en" },
        { label: args.language2, value: "fr" },
        { label: args.language3, value: "de" },
        { label: args.language4, value: "es" },
        { label: args.language5, value: "pt" },
        { label: args.language6, value: "ru" },
        { label: args.language7, value: "ja" },
        { label: args.language8, value: "ko" },
        { label: args.language9, value: "zh" },
      ]}
    />
  ),
}

export const Responsive: Story = {
  args: {
    status1: "Backlog",
    status2: "Todo",
    status3: "In Progress",
    status4: "Done",
    status5: "Canceled",
  },
  render: (args) => (
    <ComboboxResponsive
      statuses={[
        { value: "backlog", label: args.status1 },
        { value: "todo", label: args.status2 },
        { value: "in progress", label: args.status3 },
        { value: "done", label: args.status4 },
        { value: "canceled", label: args.status5 },
      ]}
    />
  ),
}
