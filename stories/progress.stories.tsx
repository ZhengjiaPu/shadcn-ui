// progress.stories.tsx
import { Meta, StoryObj } from "@storybook/react"
import ProgressDemo from "./progress-index"

const meta: Meta<typeof ProgressDemo> = {
  title: "Components/Progress",
  component: ProgressDemo,
  argTypes: {
    progressValue: {
      control: "number",
      defaultValue: 35,
      description: "The value of the progress bar, representing completion percentage.",
    },
    progressColor: {
      control: "color",
      defaultValue: "#2563eb", 
      description: "The color of the progress bar.",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A customizable progress bar component for displaying completion percentage.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressDemo>

export const Default: Story = {
  args: {
    progressValue: 35,
    progressColor: "#2563eb",
  },
  render: (args) => (
    <div className="w-[800px] rounded-md overflow-hidden mx-auto">
      <ProgressDemo {...args} />
    </div>
  ),
}
