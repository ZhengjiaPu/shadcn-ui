// draw-demo.stories.tsx
import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import DrawDemo, { DrawDemoProps } from './draw-demo';


const meta: Meta<typeof DrawDemo> = {
  title: 'Components/DrawDemo',
  component: DrawDemo,
  argTypes: {
    initialGoal: {
      control: 'number',
      description: 'Initial goal value in calories/day',
    },
    minGoal: {
      control: 'number',
      description: 'Minimum goal limit',
    },
    maxGoal: {
      control: 'number',
      description: 'Maximum goal limit',
    },
    step: {
      control: 'number',
      description: 'Step value to increase/decrease goal',
    },
    openButtonText: {
      control: 'text',
      description: 'Text for the open drawer button',
    },
    title: {
      control: 'text',
      description: 'Title text inside the drawer',
    },
    description: {
      control: 'text',
      description: 'Description text inside the drawer',
    },
    submitButtonText: {
      control: 'text',
      description: 'Text for the submit button',
    },
    cancelButtonText: {
      control: 'text',
      description: 'Text for the cancel button',
    },
  },
  args: {
    initialGoal: 350,
    minGoal: 200,
    maxGoal: 400,
    step: 10,
    openButtonText: 'Open Drawer',
    title: 'Move Goal',
    description: 'Set your daily activity goal.',
    submitButtonText: 'Submit',
    cancelButtonText: 'Cancel',
  },
};

export default meta;

type Story = StoryObj<DrawDemoProps>;

// Default Story
export const Default: Story = {
  args: {
    initialGoal: 350,
    minGoal: 200,
    maxGoal: 400,
    step: 10,
    openButtonText: 'Open Drawer',
    title: 'Move Goal',
    description: 'Set your daily activity goal.',
    submitButtonText: 'Submit',
    cancelButtonText: 'Cancel',
  },
};
