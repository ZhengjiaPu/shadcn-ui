import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import CheckboxDemo from './checkbox-demo';
import CheckboxFormMultiple from './checkbox-form-multiple';
import CheckboxFormSingle from './checkbox-form-single';

// 定义不同的 checkbox 选项
const checkboxOptions = {
  default: [
    { id: 'default-1', label: 'Default checkbox' },
    { id: 'default-2', label: 'Checked State' },
  ],
  custom1: [
    { id: 'custom-1', label: 'Custom checkbox 1' },
    { id: 'custom-2', label: 'Custom checkbox 2' },
  ],
  custom2: [
    { id: 'another-1', label: 'Another checkbox 1' },
    { id: 'another-2', label: 'Another checkbox 2' },
  ],
};

const meta: Meta = {
  title: 'Components/Checkbox',
  component: CheckboxDemo,
};

export default meta;

// CheckboxDemo 的 Story 模板
const CheckboxDemoTemplate: ComponentStory<typeof CheckboxDemo> = (args) => (
  <CheckboxDemo {...args} />
);

export const DefaultCheckbox = CheckboxDemoTemplate.bind({});
DefaultCheckbox.storyName = "Default Checkbox";
DefaultCheckbox.args = {
  checkboxes: checkboxOptions.default,
  toastMessage: 'Checkbox Clicked',
  layout: 'vertical',
};
DefaultCheckbox.argTypes = {
  checkboxes: {
    control: { type: 'select' },
    options: ['Default', 'Custom Set 1', 'Custom Set 2'],
    mapping: {
      Default: checkboxOptions.default,
      'Custom Set 1': checkboxOptions.custom1,
      'Custom Set 2': checkboxOptions.custom2,
    },
    description: 'Array of checkboxes with id and label',
  },
  toastMessage: {
    control: 'text',
    description: 'Custom toast message to show when a checkbox is clicked',
  },
  layout: {
    control: { type: 'select' },
    options: ['vertical', 'horizontal'],
    description: 'Set the layout for the checkboxes (vertical or horizontal)',
  },
};

// Custom checkboxes with horizontal layout
export const CustomCheckboxes = CheckboxDemoTemplate.bind({});
CustomCheckboxes.storyName = "Custom Checkbox Set";
CustomCheckboxes.args = {
  checkboxes: checkboxOptions.custom1,
  layout: 'horizontal',
};
CustomCheckboxes.argTypes = {
  checkboxes: { table: { disable: true } },
  toastMessage: { table: { disable: true } },
  layout: {
    control: { type: 'select' },
    options: ['vertical', 'horizontal'],
    description: 'Set the layout for the checkboxes (vertical or horizontal)',
  },
};

// Different toast message
export const CustomToastMessage = CheckboxDemoTemplate.bind({});
CustomToastMessage.storyName = "Custom Toast Message";
CustomToastMessage.args = {
  toastMessage: 'Custom Toast Message',
};
CustomToastMessage.argTypes = {
  checkboxes: { table: { disable: true } },
  toastMessage: { table: { disable: true } },
  layout: {
    control: { type: 'select' },
    options: ['vertical', 'horizontal'],
    description: 'Set the layout for the checkboxes (vertical or horizontal)',
  },
};

// CheckboxFormMultiple 的 Story 模板
const CheckboxFormMultipleTemplate: ComponentStory<typeof CheckboxFormMultiple> = (args) => (
  <CheckboxFormMultiple {...args} />
);

export const DefaultCheckboxFormMultiple = CheckboxFormMultipleTemplate.bind({});
DefaultCheckboxFormMultiple.storyName = "Checkbox Form Multiple";
DefaultCheckboxFormMultiple.args = {
  items: [
    { id: "recents", label: "Recents" },
    { id: "home", label: "Home" },
    { id: "applications", label: "Applications" },
    { id: "desktop", label: "Desktop" },
    { id: "downloads", label: "Downloads" },
    { id: "documents", label: "Documents" },
  ],
  defaultValues: ["recents", "home"],
  label: "Sidebar",
  description: "Select the items you want to display in the sidebar.",
  submitMessage: "You submitted the following values:",
};
DefaultCheckboxFormMultiple.argTypes = {
  items: {
    control: 'object',
    description: 'Array of checkbox items with id and label',
  },
  defaultValues: {
    control: 'object',
    description: 'Array of default selected checkbox ids',
  },
  label: {
    control: 'text',
    description: 'Label for the checkbox form',
  },
  description: {
    control: 'text',
    description: 'Description text for the checkbox form',
  },
  submitMessage: {
    control: 'text',
    description: 'Message to display when form is submitted',
  },
    items: { table: { disable: true } },
    defaultValues: { table: { disable: true } },
    checkboxes: { table: { disable: true } },
    toastMessage: { table: { disable: true } },
    layout: { table: { disable: true } },
};

// CheckboxFormSingle 的 Story 模板
const CheckboxFormSingleTemplate: ComponentStory<typeof CheckboxFormSingle> = (args) => (
  <CheckboxFormSingle {...args} />
);

export const DefaultCheckboxFormSingle = CheckboxFormSingleTemplate.bind({});
DefaultCheckboxFormSingle.storyName = "Checkbox Form Single";
DefaultCheckboxFormSingle.args = {
  defaultChecked: true,
  label: "Use different settings for my mobile devices",
  description: "You can manage your mobile notifications in the settings page.",
  submitMessage: "You submitted the following values:",
  linkUrl: "/examples/forms",
  linkText: "mobile settings",
};
DefaultCheckboxFormSingle.argTypes = {
  defaultChecked: {
    control: 'boolean',
    description: 'Default checked state of the checkbox',
  },
  label: {
    control: 'text',
    description: 'Label for the checkbox',
  },
  description: {
    control: 'text',
    description: 'Description text for the checkbox',
  },
  submitMessage: {
    control: 'text',
    description: 'Message to display when form is submitted',
  },
  linkUrl: {
    control: 'text',
    description: 'URL for the description link',
  },
  linkText: {
    control: 'text',
    description: 'Text for the description link',
  },
  defaultChecked: { table: { disable: true } },
    linkUrl: { table: { disable: true } },
    checkboxes: { table: { disable: true } },
    toastMessage: { table: { disable: true } },
    layout: { table: { disable: true } },
};
