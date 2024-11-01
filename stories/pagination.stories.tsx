import { ComponentMeta, ComponentStory } from "@storybook/react"

import PaginationDemo from "./pagination-demo"

export default {
  title: "Components/Pagination",
  component: PaginationDemo,
  argTypes: {
    totalPages: {
      control: { type: "number" },
      defaultValue: 10,
      description: "Specifies the total number of pages for pagination.",
    },
    border: {
      control: { type: "text" },
      defaultValue: "1px solid hsl(var(--border))",
      description: "Defines the border style for each pagination item.",
    },
    borderRadius: {
      control: { type: "text" },
      defaultValue: "4px",
      description:
        "Sets the border radius for the pagination items, allowing rounded corners.",
    },
    padding: {
      control: { type: "text" },
      defaultValue: "8px 12px",
      description: "Controls the padding inside each pagination item.",
    },
    cursor: {
      control: { type: "text" },
      defaultValue: "pointer",
      description:
        "Specifies the cursor style when hovering over a pagination item.",
    },
    textDecoration: {
      control: { type: "text" },
      defaultValue: "none",
      description:
        "Defines the text decoration (e.g., underline, none) for pagination items.",
    },
    backgroundColor: {
      control: { type: "select" },
      options: [
        "hsl(var(--background))",
        "hsl(var(--foreground))",
        "hsl(var(--primary))",
        "hsl(var(--primary-foreground))",
        "hsl(var(--secondary))",
        "hsl(var(--secondary-foreground))",
      ],
      defaultValue: "hsl(var(--background))",
      description: "Sets the background color for inactive pagination items.",
    },
    color: {
      control: { type: "select" },
      options: [
        "hsl(var(--background))",
        "hsl(var(--foreground))",
        "hsl(var(--primary))",
        "hsl(var(--primary-foreground))",
        "hsl(var(--secondary))",
        "hsl(var(--secondary-foreground))",
      ],
      defaultValue: "hsl(var(--foreground))",
      description: "Specifies the text color for inactive pagination items.",
    },
    activeBackgroundColor: {
      control: { type: "select" },
      options: [
        "hsl(var(--background))",
        "hsl(var(--foreground))",
        "hsl(var(--primary))",
        "hsl(var(--primary-foreground))",
        "hsl(var(--secondary))",
        "hsl(var(--secondary-foreground))",
      ],
      defaultValue: "hsl(var(--primary))",
      description:
        "Defines the background color for the active pagination item.",
    },
    activeColor: {
      control: { type: "select" },
      options: [
        "hsl(var(--background))",
        "hsl(var(--foreground))",
        "hsl(var(--primary))",
        "hsl(var(--primary-foreground))",
        "hsl(var(--secondary))",
        "hsl(var(--secondary-foreground))",
      ],
      defaultValue: "hsl(var(--primary-foreground))",
      description: "Specifies the text color for the active pagination item.",
    },
    activeBorderColor: {
      control: { type: "select" },
      options: [
        "hsl(var(--primary))",
        "hsl(var(--secondary))",
        "hsl(var(--foreground))",
      ],
      defaultValue: "hsl(var(--primary))",
      description: "Defines the border color for the active pagination item.",
    },
  },
} as ComponentMeta<typeof PaginationDemo>

const Template: ComponentStory<typeof PaginationDemo> = (args) => (
  <PaginationDemo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  totalPages: 10,
  border: "1px solid hsl(var(--border))",
  borderRadius: "4px",
  padding: "8px 12px",
  cursor: "pointer",
  textDecoration: "none",
  backgroundColor: "hsl(var(--background))",
  color: "hsl(var(--foreground))",
  activeBackgroundColor: "hsl(var(--primary))",
  activeColor: "hsl(var(--primary-foreground))",
  activeBorderColor: "hsl(var(--primary))",
}
