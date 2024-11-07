import * as React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { FormProvider, useForm } from "react-hook-form"

import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

import RadioGroupForm from "./radio-group-form"

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    label1: {
      control: { type: "text" },
      defaultValue: "Default",
      description: "Label text for the first radio option.",
    },
    label2: {
      control: { type: "text" },
      defaultValue: "Comfortable",
      description: "Label text for the second radio option.",
    },
    label3: {
      control: { type: "text" },
      defaultValue: "Compact",
      description: "Label text for the third radio option.",
    },
    groupLabel: {
      control: { type: "text" },
      defaultValue: "Notify me about...",
      description: "Label for the entire radio group.",
    },
    buttonText: {
      control: { type: "text" },
      defaultValue: "Submit",
      description: "Text displayed on the form submission button.",
    },
    labelFontSize: {
      control: { type: "select" },
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
      ],
      defaultValue: "text-base",
      description: "Sets the font size for radio option labels.",
    },
    buttonFontSize: {
      control: { type: "select" },
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
      ],
      defaultValue: "text-base",
      description: "Sets the font size for the form submission button text.",
    },
  },
} as ComponentMeta<typeof RadioGroup>

// Basic RadioGroup template
const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <div>
    <RadioGroup>
      <div className="flex items-center">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className={args.labelFontSize}>
          {args.label1}
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className={args.labelFontSize}>
          {args.label2}
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className={args.labelFontSize}>
          {args.label3}
        </label>
      </div>
    </RadioGroup>
  </div>
)

export const Default = Template.bind({})
Default.storyName = "Default"
Default.args = {
  label1: "Default",
  label2: "Comfortable",
  label3: "Compact",
}
Default.argTypes = {
  groupLabel: {
    table: {
      disable: true,
    },
  },
  buttonText: {
    table: {
      disable: true,
    },
  },
  buttonFontSize: {
    table: {
      disable: true, // Hides buttonFontSize control in Default
    },
  },
}

// RadioGroupForm variant
export const Form: ComponentStory<typeof RadioGroupForm> = (args) => {
  const methods = useForm() // Create form methods using useForm

  return (
    <FormProvider {...methods}>
      {/* Wrap component with FormProvider */}
      <RadioGroupForm
        label1={args.label1}
        label2={args.label2}
        label3={args.label3}
        groupLabel={args.groupLabel}
        buttonText={args.buttonText}
        labelFontSize={args.labelFontSize}
        buttonFontSize={args.buttonFontSize}
      />
    </FormProvider>
  )
}
Form.storyName = "Form"
Form.args = {
  label1: "All new messages",
  label2: "Direct messages and mentions",
  label3: "Nothing",
  groupLabel: "Notify me about...",
  buttonText: "Submit",
  labelFontSize: "text-base",
  buttonFontSize: "text-base",
}
