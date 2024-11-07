import type { Meta, StoryObj } from '@storybook/react';
import LabelDemo from './label-index';

const meta: Meta<typeof LabelDemo> = {
  title: 'Components/Label',
  component: LabelDemo,
  argTypes: {
    textColor: {  
      control: 'color',
      description: 'Modify font color of the Label text',
    },
    backgroundColor: {
      control: 'color',
      description: 'Set background color for the Label container',
    },
    labelText: {
      control: 'text',
      description: 'Text displayed inside the Label component',
      defaultValue: 'Accept terms and conditions',
    },
  },
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textColor: '#000000',
    backgroundColor: '#ffffff',
    labelText: 'Accept terms and conditions',
  },
};

export const Colorful: Story = {
  args: {
    textColor: '#ff6600', // Example of a custom color for USYD
    backgroundColor: '#f0f0f0',
    labelText: 'Accept terms and conditions',
  },
};
