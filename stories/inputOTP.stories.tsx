import { Meta, StoryObj } from "@storybook/react"
import InputOTPIndex from "./inputOTP-index" 

const meta: Meta<typeof InputOTPIndex> = {
  title: "Components/InputOTP",
  component: InputOTPIndex,
  argTypes: {
    maxLength: {
      control: { type: "number", min: 4, max: 10, step: 1 }, // Limit maxLength to an integer, range 4 to 10
      description: "Set the maximum length of OTP (integer)",
      defaultValue: 6,
    },
    separatorCount: {
      control: { type: "number", min: 0, step: 1 }, // Limit separatorCount to an integer, starting from 0
      description: "Set the number of separators",
      defaultValue: 1,
    },
  },
  decorators: [
    (Story, context) => {
      // Get the maxLength value
      const maxLength = context.args.maxLength || 6;
      
      // Check if separatorCount exists, then dynamically set the maximum to maxLength - 1
      if (context.argTypes.separatorCount) {
        context.argTypes.separatorCount.max = Math.max(0, maxLength - 1);
      }
      
      return <Story />;
    },
  ],
}

export default meta
type Story = StoryObj<typeof InputOTPIndex>

export const Default: Story = {
  args: {
    maxLength: 6,
    separatorCount: 1,
  },
}

export const MultipleSeparators: Story = {
  args: {
    maxLength: 8,
    separatorCount: 3,
  },
}
