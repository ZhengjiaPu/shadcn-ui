import type { Meta, StoryObj } from '@storybook/react';
import Tooltips from './tooltips';

const meta: Meta<typeof Tooltips> = {
  title: 'Components/Tooltips',
  component: Tooltips,
  argTypes: {
    tooltipText: {
      control: { type: 'select' },
      options: ['Add to library', 'Click to save', 'More info', 'Submit'],
      description: 'Text to display inside the tooltip',
    },
    buttonText: {
      control: { type: 'select' },
      options: ['Hover', 'Save', 'Submit', 'Info'],
      description: 'Text to display inside the button',
    },
    buttonVariant: {
      control: { type: 'select' },
      options: ['outline', 'default', 'secondary', 'destructive'],
      description: 'Variant of the button',
    },
    logOpenChange: {
      control: 'boolean',
      description: 'Log when the tooltip is opened',
    },
  },
  args: {
    tooltipText: 'Add to library',
    buttonText: 'Hover',
    buttonVariant: 'outline',
    logOpenChange: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    tooltipText: 'Add to library',
    buttonText: 'Hover',
    buttonVariant: 'outline',
    logOpenChange: true,
  },
  argTypes: {
    tooltipText: { table: { disable: true } },
    logOpenChange: { table: { disable: true } },
  },
};

// Story with custom text and variant
export const CustomTooltip: Story = {
  args: {
    tooltipText: 'Click to save',
    buttonText: 'Save',
    buttonVariant: 'default',
    logOpenChange: false,
  },
  argTypes: {
    tooltipText: { table: { disable: true } },
    logOpenChange: { table: { disable: true } },
  },
};
