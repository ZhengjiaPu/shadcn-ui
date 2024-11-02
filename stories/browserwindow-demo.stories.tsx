import React from "react";
import { Meta, Story } from "@storybook/react";
import BrowserMockup from "./browserwindow-demo";

// Storybook: Meta configuration for Browser Window component
export default {
  title: "Components/Browser Window",
  component: BrowserMockup,
  argTypes: {
    url: {
      control: 'text',
      description: 'URL displayed in the browser window',
      defaultValue: "https://www.example.com",
    },
    width: {
      control: 'text',
      description: 'Width of the browser window (e.g., 80%)',
      defaultValue: '80%',
    },
    height: {
      control: 'text',
      description: 'Height of the browser window (e.g., 70%)',
      defaultValue: '70%',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the browser window',
      defaultValue: '#fff',
    },
    borderColor: {
      control: 'color',
      description: 'Border color of the browser window',
      defaultValue: '#ccc',
    },
    shadowColor: {
      control: 'color',
      description: 'Shadow color of the browser window',
      defaultValue: 'rgba(0, 0, 0, 0.1)',
    },
  },
} as Meta;

// Template for the Browser Window component
const Template: Story = (args) => <BrowserMockup {...args} />;

// Default Browser Window story
export const Default = Template.bind({});
Default.args = {
  url: "https://www.example.com",
  width: '80%',
  height: '70%',
  backgroundColor: '#fff',
  borderColor: '#ccc',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
};