import { ComponentMeta, ComponentStory } from "@storybook/react"

import BreadcrumbDemo from "./breadcrumb-demo"

export default {
  title: "Components/Breadcrumb",
  component: BreadcrumbDemo,
  argTypes: {
    width: {
      control: { type: "select" },
      options: [
        "w-1/4",
        "w-1/3",
        "w-1/2",
        "w-2/3",
        "w-3/4",
        "w-full",
        "w-64",
        "w-80",
        "w-96",
      ],
      description:
        "Specifies the width of the breadcrumb container. Options include predefined widths like one-third, half, full width, and others.",
    },
    paddingX: {
      control: { type: "select" },
      options: [0, 1, 2, 3, 4],
      description:
        "Adjusts the horizontal padding (left and right) inside the breadcrumb container. Options range from 0 to 4 units.",
    },
    paddingY: {
      control: { type: "select" },
      options: [0, 1, 2, 3, 4],
      description:
        "Adjusts the vertical padding (top and bottom) inside the breadcrumb container. Options range from 0 to 4 units.",
    },
    borderRadius: {
      control: { type: "select" },
      options: [
        "rounded-none",
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg",
        "rounded-full",
      ],
      description:
        "Defines the border radius for the breadcrumb container, allowing rounded corners. Options include none, small, medium, large, and fully rounded corners.",
    },
    borderColor: {
      control: { type: "select" },
      options: [
        "border-black",
        "border-gray-300",
        "border-red-500",
        "border-blue-500",
        "border-green-500",
        "border-yellow-500",
        "border-purple-500",
        "border-pink-500",
      ],
      description:
        "Specifies the border color of the breadcrumb container. You can choose from various color options such as black, gray, red, blue, and others.",
    },
    breadcrumbTextColor: {
      control: { type: "select" },
      options: [
        "text-black",
        "text-gray-500",
        "text-red-500",
        "text-blue-500",
        "text-green-500",
        "text-yellow-500",
        "text-purple-500",
        "text-pink-500",
      ],
      description:
        "Sets the text color for the breadcrumb items. Options include colors like black, gray, red, blue, and more.",
    },
    otherTextColor: {
      control: { type: "select" },
      options: [
        "text-gray-600",
        "text-red-500",
        "text-blue-500",
        "text-green-500",
        "text-yellow-500",
        "text-purple-500",
        "text-pink-500",
      ],
      description:
        "Specifies the text color for other text elements in the breadcrumb (non-breadcrumb items). Options include colors such as gray, red, blue, green, and others.",
    },
    homeText: {
      control: { type: "text" },
      description: 'Customizes the label for the "Home" breadcrumb item.',
    },
    componentsText: {
      control: { type: "text" },
      description: 'Customizes the label for the "Components" breadcrumb item.',
    },
    breadcrumbText: {
      control: { type: "text" },
      description: 'Customizes the label for the "Breadcrumb" breadcrumb item.',
    },
    documentationText: {
      control: { type: "text" },
      description:
        'Customizes the label for the "Documentation" breadcrumb item.',
    },
    themesText: {
      control: { type: "text" },
      description: 'Customizes the label for the "Themes" breadcrumb item.',
    },
    githubText: {
      control: { type: "text" },
      description: 'Customizes the label for the "GitHub" breadcrumb item.',
    },
  },
} as ComponentMeta<typeof BreadcrumbDemo>

const Template: ComponentStory<typeof BreadcrumbDemo> = (args) => (
  <BreadcrumbDemo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  width: "w-1/3",
  paddingX: 2,
  paddingY: 2,
  borderRadius: "rounded-lg",
  borderColor: "border-gray-300",
  breadcrumbTextColor: "text-black",
  otherTextColor: "text-gray-600",
  homeText: "Home",
  componentsText: "Components",
  breadcrumbText: "Breadcrumb",
  documentationText: "Documentation",
  themesText: "Themes",
  githubText: "GitHub",
}
