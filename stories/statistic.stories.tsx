import type { Meta, StoryObj } from "@storybook/react"

import StatisticNormal from "./statistic-index"

const meta: Meta<typeof StatisticNormal> = {
  title: "Components/Statistic/Normal",
  component: StatisticNormal,
  argTypes: {
    title: {
      control: "text",
      description: "Set the title of the statistic",
    },
    value: {
      control: { type: "number" },
      description: "Set the value to be displayed",
    },
    precision: {
      control: { type: "number", min: 0, max: 4, step: 1 },
      description: "Set the precision of the statistic",
    },
    loading: {
      control: { type: "boolean" },
      description: "Enable or disable loading state",
    },
    buttonText: {
      control: "text",
      description: "Set the text of the button",
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
} satisfies Meta<typeof StatisticNormal>

export default meta

type Story = StoryObj<typeof StatisticNormal>

// Default story
export const Default: Story = {
  args: {
    title: "Active Users",
    value: 112893,
    precision: 0,
    loading: false,
    buttonText: "Recharge",
  },
}

export const WithPrecision: Story = {
  args: {
    title: "Account Balance (CNY)",
    value: 112893,
    precision: 2,
    loading: false,
    buttonText: "Recharge",
  },
}

export const Loading: Story = {
  args: {
    title: "Active Users",
    value: 112893,
    loading: true,
    buttonText: "Recharge",
  },
}
