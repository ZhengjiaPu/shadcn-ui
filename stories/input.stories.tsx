import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, InputProps } from "@/registry/default/ui/input";
import InputWithButton from "@/registry/default/example/input-with-button";
import InputWithLabel from "@/registry/default/example/input-with-label";
import InputFile from "@/registry/default/example/input-file";
import InputDisabled from "@/registry/default/example/input-disabled";
import InputNumber from "@/registry/default/example/input-with-number";
import InputPhoneNumber from "@/registry/default/example/input-with-phonenumber";

const meta: Meta<typeof Input> = {
  title: "Components/Input", // Descriptive title for inputs
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "The Input component is a flexible form field used in various scenarios like text, email, number, and more. Each story demonstrates different use cases.",
      },
    },
  },
  args: {
    placeholder: "Enter text", // Default placeholder for all input stories
    disabled: false, // Inputs are enabled by default
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text displayed inside the input field.",
      table: {
        defaultValue: { summary: "Enter text" },
      },
    },
    type: {
      control: { type: "select" },
      options: ["text", "number", "file"],
      description: "Specifies the type of the input.",
      table: {
        defaultValue: { summary: "text" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input field if set to true.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;

// Basic Input Story
const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text",
  disabled: false,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: "email",
  placeholder: "Enter email",
  disabled: false,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  type: "text",
  placeholder: "Disabled Input",
  disabled: true,
};

export const InputWithLabelStory = () => <InputWithLabel />;
InputWithLabelStory.storyName = "Input with Label";

export const InputWithButtonStory = () => <InputWithButton />;
InputWithButtonStory.storyName = "Input with Button";

export const FileInput = Template.bind({});
FileInput.args = {
  type: "file",
  disabled: false,
};

export const NumberInput = () => <InputNumber />;
NumberInput.storyName = "Number Input";

export const PhoneNumberInput = () => <InputPhoneNumber />;
PhoneNumberInput.storyName = "Phone Number Input";
