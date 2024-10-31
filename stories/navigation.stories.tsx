// NavigationDemo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import NavigationDemo from "./navigation-index";

const meta: Meta<typeof NavigationDemo> = {
  title: "Components/Navigation",
  component: NavigationDemo,
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "Set the background color for the navigation buttons",
    },
    textColor: {
      control: "color",
      description: "Set the text color for the navigation buttons",
    },
    borderRadius: {
      control: { type: "select" },
      options: ["0px", "8px", "16px", "50%"], // Add any values you need
      description: "Set the border radius for the navigation buttons",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    borderRadius: "8px", // Default to rounded corners
  },
};

export const Colored: Story = {
  args: {
    backgroundColor: "#ff8412",
    textColor: "#ffffff",
  },
};
