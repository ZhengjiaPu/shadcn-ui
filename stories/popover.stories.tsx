// popover.stories.tsx
import { Meta, StoryObj } from "@storybook/react"
import PopoverDemo from "./popover-index"

const meta: Meta<typeof PopoverDemo> = {
  title: "Components/Popover",
  component: PopoverDemo,
  argTypes: {
    buttonLabel: {
      control: "text",
      defaultValue: "Open popover",
      description: "The label text of the popover trigger button.",
    },
    popoverBorderColor: {
      control: "color",
      defaultValue: "#000000", // 默认颜色为黑色
      description: "Border color for the popover content.",
    },
    buttonBackgroundColor: {
      control: "color",
      defaultValue: "#ffffff", // 默认背景色为白色
      description: "Background color of the button.",
    },
    buttonFontColor: {
      control: "color",
      defaultValue: "#000000", // 默认字体颜色为黑色
      description: "Font color of the button text.",
    },
    titleText: {
      control: "text",
      defaultValue: "Dimensions",
      description: "Title text displayed in the popover content.",
    },
    descriptionText: {
      control: "text",
      defaultValue: "Set the dimensions for the layer.",
      description: "Description text under the title in the popover.",
    },
    initialWidth: {
      control: "text",
      defaultValue: "100%",
      description: "Default width input value.",
    },
    initialMaxWidth: {
      control: "text",
      defaultValue: "300px",
      description: "Default max width input value.",
    },
    initialHeight: {
      control: "text",
      defaultValue: "25px",
      description: "Default height input value.",
    },
    initialMaxHeight: {
      control: "text",
      defaultValue: "none",
      description: "Default max height input value.",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A customizable popover component with dimensions settings and configurable appearance.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PopoverDemo>

export const Default: Story = {
  args: {
    buttonLabel: "Open popover",
    popoverBorderColor: "#000000",
    buttonBackgroundColor: "#ffffff",
    buttonFontColor: "#000000",
    titleText: "Dimensions",
    descriptionText: "Set the dimensions for the layer.",
    initialWidth: "100%",
    initialMaxWidth: "300px",
    initialHeight: "25px",
    initialMaxHeight: "none",
  },
  render: (args) => (
    <PopoverDemo {...args} />
  ),
}

export const CustomizedPopover: Story = {
  args: {
    buttonLabel: "Customize Popover",
    popoverBorderColor: "#ff9800", // Light orange for USYD
    buttonBackgroundColor: "#f97316", // USYD主题色 orange-600
    buttonFontColor: "#ffffff", // 白色字体
    titleText: "Custom Dimensions",
    descriptionText: "Configure your custom dimensions.",
    initialWidth: "90%",
    initialMaxWidth: "350px",
    initialHeight: "30px",
    initialMaxHeight: "auto",
  },
  render: (args) => (
    <PopoverDemo {...args} />
  ),
}
