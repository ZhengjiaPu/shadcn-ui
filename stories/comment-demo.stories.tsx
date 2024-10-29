import React from "react";
import { Meta, Story } from "@storybook/react";
import CommentDemo from "./comment-demo";

// Storybook: Meta configuration for Comment component
export default {
  title: "Components/Comment",
  component: CommentDemo,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the comment box',
      defaultValue: '#f9f9f9',
    },
    fontSize: {
      control: {
        type: 'range',
        min: 12,
        max: 24,
        step: 1,
      },
      description: 'Font size of the comment content',
      defaultValue: 16,
    },
    padding: {
      control: {
        type: 'range',
        min: 0,
        max: 40,
        step: 1,
      },
      description: 'Padding inside the comment box',
      defaultValue: 10,
    },
    margin: {
      control: {
        type: 'range',
        min: 0,
        max: 40,
        step: 1,
      },
      description: 'Margin around the comment box',
      defaultValue: 10,
    },
    textAlign: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'Text alignment of the comment content',
      defaultValue: 'left',
    },
    initialMessages: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

// Template for the Comment component
const Template: Story = (args) => {
  const message = {
    user: "USYD Student",
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    description: "I am the student of USYD and majoring in Master of Computer Science.",
    content: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
    likes: 159,
    comments: 156,
    shares: 4,
  };

  const customStyle = {
    backgroundColor: args.backgroundColor,
    fontSize: `${args.fontSize}px`,
    padding: `${args.padding}px`,
    margin: `${args.margin}px`,
    textAlign: args.textAlign as 'left' | 'center' | 'right',
  };

  return (
    <div style={customStyle}>
      <CommentDemo
        initialMessages={[message]}
        fontSize={args.fontSize}
        backgroundColor={args.backgroundColor}
      />
    </div>
  );
};

// Default CommentDemo story
export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#f9f9f9',
  fontSize: 16,
  padding: 10,
  margin: 10,
  textAlign: 'left',
};