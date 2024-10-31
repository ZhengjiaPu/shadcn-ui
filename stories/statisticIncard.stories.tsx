import type { Meta, StoryObj } from "@storybook/react"

import StatisticIncard from "./statisticIncard-index"

// Meta configuration for Storybook controls
const meta: Meta<typeof StatisticIncard> = {
  title: "Components/Statistic/Incard",
  component: StatisticIncard,
  argTypes: {
    activeValue: {
      control: { type: "number" },
      description: "Set the value for the 'Active' statistic.",
      defaultValue: 11.28,
    },
    idleValue: {
      control: { type: "number" },
      description: "Set the value for the 'Idle' statistic.",
      defaultValue: 9.3,
    },
    precision: {
      control: { type: "number", min: 0, max: 4, step: 1 },
      description: "Set the decimal precision for both statistics.",
      defaultValue: 2,
    },
    activeColor: {
      control: "color",
      description: "Set the color for the 'Active' value text.",
      defaultValue: "#2563EB", // tailwind blue-600
    },
    idleColor: {
      control: "color",
      description: "Set the color for the 'Idle' value text.",
      defaultValue: "#DC2626", // tailwind red-600
    },
    cardBackgroundColor: {
      control: "color",
      description: "Set the background color of the cards.",
      defaultValue: "#F3F4F6", // tailwind gray-100
    },
    cardBorderColor: {
      control: "color",
      description: "Set the border color of the cards.",
      defaultValue: "#D1D5DB", // tailwind gray-300
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
} satisfies Meta<typeof StatisticIncard>

export default meta

type Story = StoryObj<typeof StatisticIncard>

// Default story with adjustable props
export const Default: Story = {
  args: {
    activeValue: 11.28,
    idleValue: 9.3,
    precision: 2,
    activeColor: "#2563EB",
    idleColor: "#DC2626",
    cardBackgroundColor: "#F3F4F6",
    cardBorderColor: "#D1D5DB",
  },
  render: (args) => (
    <StatisticIncard
      activeValue={args.activeValue}
      idleValue={args.idleValue}
      precision={args.precision}
      activeColor={args.activeColor}
      idleColor={args.idleColor}
      cardBackgroundColor={args.cardBackgroundColor}
      cardBorderColor={args.cardBorderColor}
    />
  ),
}
