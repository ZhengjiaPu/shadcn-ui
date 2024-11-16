import React from "react";
import { Meta, Story } from "@storybook/react";
import ResizableDemo from "./resizable-demo";
import ResizableVertical from "./resizable-vertical";
import ResizableHandleDemo from "./resizable-handle";

export default {
  title: "Components/Resizable",
  component: ResizableDemo,
  argTypes: {
    borderColor: { control: "color" },
    borderRadius: { control: "text" },
    backgroundColor: { control: "color" },
    padding: { control: "text" },
  },
} as Meta;

const DefaultTemplate: Story = (args) => <ResizableDemo {...args} />;

const VerticalTemplate: Story = (args) => <ResizableVertical {...args} />;

const HandleTemplate: Story = (args) => <ResizableHandleDemo {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
  borderColor: "#ffffff",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  padding: "10px",
};

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
  borderColor: "#ffffff",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  padding: "10px",
};

export const Handle = HandleTemplate.bind({});
Handle.args = {
  borderColor: "#ffffff",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  padding: "10px",
};
