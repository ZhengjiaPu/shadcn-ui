import React from "react";
import { Meta, Story } from "@storybook/react";
import StepsBasic from "./steps-demo";
import StepperWithContent from "./steps-with-content";
import StepperWithDots from "./steps-with-dots";
import StepsWithIcon from "./steps-with-icon";

// Storybook: Meta configuration for Steps component
export default {
  title: "Components/Steps",
  component: StepsBasic,
  argTypes: {
    backgroundColor: { control: "color" },
    padding: { control: "text" },
    borderRadius: { control: "text" },
  },
} as Meta;

// Template for the Basic Steps
const BasicTemplate: Story = (args) => (
  <div style={{ backgroundColor: args.backgroundColor, padding: args.padding, borderRadius: args.borderRadius }}>
    <StepsBasic />
  </div>
);

// Template for Steps With Content
const ContentTemplate: Story = (args) => (
  <div style={{ backgroundColor: args.backgroundColor, padding: args.padding, borderRadius: args.borderRadius }}>
    <StepperWithContent />
  </div>
);

// Template for Steps With Dots
const DotsTemplate: Story = (args) => (
  <div style={{ backgroundColor: args.backgroundColor, padding: args.padding, borderRadius: args.borderRadius }}>
    <StepperWithDots />
  </div>
);

// Template for Steps With Icon
const IconTemplate: Story = (args) => (
  <div style={{ backgroundColor: args.backgroundColor, padding: args.padding, borderRadius: args.borderRadius }}>
    <StepsWithIcon />
  </div>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {
  backgroundColor: "#ffffff",
  padding: "10px",
  borderRadius: "8px",
};

export const WithContent = ContentTemplate.bind({});
WithContent.args = {
  backgroundColor: "#f5f5f5",
  padding: "15px",
  borderRadius: "8px",
};

export const WithDots = DotsTemplate.bind({});
WithDots.args = {
  backgroundColor: "#fafafa",
  padding: "12px",
  borderRadius: "8px",
};

export const WithIcon = IconTemplate.bind({});
WithIcon.args = {
  backgroundColor: "#f0f0f0",
  padding: "8px",
  borderRadius: "8px",
};
