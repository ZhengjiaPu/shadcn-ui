import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Calendar, { CalendarProps } from "./calendar-demo";

const meta: Meta<CalendarProps> = {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    fontSize: {
      control: { type: "range", min: 10, max: 24, step: 1 },
      description: "Adjust font size of day numbers.",
      defaultValue: 14,
    },
    backgroundColor: {
      control: "color",
      description: "Background color of the calendar.",
      defaultValue: "#ffffff",
    },
    padding: {
      control: { type: "range", min: 0, max: 50, step: 1 },
      description: "Padding inside the calendar container.",
      defaultValue: 16,
    },
    margin: {
      control: { type: "range", min: 0, max: 50, step: 1 },
      description: "Margin outside the calendar container.",
      defaultValue: 16,
    },
    // textAlign: {
    //   control: { type: "select", options: ["left", "center", "right"] },
    //   description: "Text alignment of the calendar content.",
    //   defaultValue: "center",
    // },
    showOutsideDays: {
      control: "boolean",
      description: "Show days from the previous and next months.",
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<CalendarProps>;

// Template for the Calendar component with custom styles
const Template: Story = (args: CalendarProps) => <Calendar {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  fontSize: 14,
  backgroundColor: "#ffffff",
  padding: 16,
  margin: 16,
  textAlign: "center",
  showOutsideDays: true,
};
