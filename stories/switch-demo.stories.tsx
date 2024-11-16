import React from "react";
import { Meta, Story } from "@storybook/react";
import SwitchDemo from "./switch-demo";

// Storybook: Meta configuration for SwitchDemo component
export default {
  title: "Components/SwitchDemo",
  component: SwitchDemo,
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "Background color of the container",
      defaultValue: "#ffffff",
    },
    labelColor: {
      control: "color",
      description: "Color of the label text",
      defaultValue: "#000000",
    },
    switchSize: {
      control: {
        type: "range",
        min: 16,
        max: 40,
        step: 2,
      },
      description: "Size of the switch",
      defaultValue: 20,
    },
    spacing: {
      control: {
        type: "range",
        min: 4,
        max: 20,
        step: 1,
      },
      description: "Spacing between the switch and label",
      defaultValue: 8,
    },
    labelText: {
      control: "text",
      description: "Text for the label",
      defaultValue: "Airplane Mode",
    },
    switchTrackColor: {
      control: "color",
      description: "Color of the switch track",
      defaultValue: "#e5e5e5",
    },
    switchThumbColor: {
      control: "color",
      description: "Color of the switch thumb",
      defaultValue: "#ffffff",
    },
  },
} as Meta;

// Template for the SwitchDemo component
const Template: Story = (args) => <SwitchDemo {...args} />;

// Default SwitchDemo story
export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#ffffff",
  labelColor: "#000000",
  switchSize: 24,
  spacing: 8,
  labelText: "Airplane Mode",
  switchTrackColor: "#e5e5e5",
  switchThumbColor: "#ffffff",
};
