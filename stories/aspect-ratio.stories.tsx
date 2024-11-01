import React from "react"
// 根据你的文件路径调整
import Image from "next/image"
import { Meta, StoryObj } from "@storybook/react"

import { AspectRatio } from "@/registry/default/ui/aspect-ratio"

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: "select" },
      options: {
        "1:1": 1,
        "4:3": 4 / 3,
        "16:9": 16 / 9,
        "21:9": 21 / 9,
      },
      description: "Aspect ratio options",
      defaultValue: 16 / 9,
    },
    imageUrl: {
      control: { type: "text" },
      description: "The URL of the image to display",
      defaultValue:
        "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    },
    rounded: {
      control: { type: "boolean" },
      description: "Whether to apply rounded corners to the image",
      defaultValue: true,
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    imageUrl:
      "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    rounded: true,
  },
  render: (args) => (
    <AspectRatio ratio={args.ratio} className="bg-muted">
      <Image
        src={args.imageUrl}
        alt="Demo Image"
        fill
        className={`h-full w-full ${args.rounded ? "rounded-md" : ""}`}
      />
    </AspectRatio>
  ),
}
