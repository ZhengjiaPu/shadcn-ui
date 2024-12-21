import React from "react";
import { Meta, Story } from "@storybook/react";
import ScrollAreaDemo from "./scroll-area-demo";
import ScrollAreaHorizontalDemo from "./scroll-area-horizontal";

export default {
  title: "Components/ScrollArea",
  component: ScrollAreaDemo,
  argTypes: {
    height: {
      control: { type: "text" },
      description: "Height of the scroll area container (e.g., 'h-72')",
      defaultValue: "h-72",
    },
    width: {
      control: { type: "text" },
      description: "Width of the scroll area container (e.g., 'w-48')",
      defaultValue: "w-48",
    },
    border: {
      control: { type: "text" },
      description: "Border styling (e.g., 'border', 'border-2')",
      defaultValue: "border",
    },
    borderRadius: {
      control: { type: "text" },
      description: "Border radius (e.g., 'rounded-md', 'rounded-none')",
      defaultValue: "rounded-md",
    },
    spaceX: {
      control: { type: "text" },
      description: "Horizontal spacing between items (e.g., 'space-x-4')",
      defaultValue: "space-x-4",
    },
  },
} as Meta;

// Template for vertical ScrollArea
const Template: Story = (args) => (
  <div
    className={`${args.height} ${args.width} ${args.border} ${args.borderRadius}`}
  >
    <ScrollAreaDemo />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  height: "h-72",
  width: "w-48",
  border: "border",
  borderRadius: "rounded-md",
};

// Template for horizontal ScrollArea
const HorizontalTemplate: Story = (args) => (
  <div
    className={`${args.width} whitespace-nowrap ${args.border} ${args.borderRadius} flex ${args.spaceX}`}
  >
    <ScrollAreaHorizontalDemo />
  </div>
);

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
  width: "w-96",
  border: "border",
  borderRadius: "rounded-md",
  spaceX: "space-x-4",
};
