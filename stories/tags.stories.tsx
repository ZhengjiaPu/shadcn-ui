// tags-innovativetags.stories.tsx
import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import InnovativeTags from './tags-innovativetags';

const meta: Meta<typeof InnovativeTags> = {
  title: 'Components/Tags',
  component: InnovativeTags,
  argTypes: {
    variants: {
      control: { type: 'check' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Array of badge variants to display',
    },
    spacing: {
      control: { type: 'text' },
      description: 'Spacing between badges',
    },
  },
};

export default meta;

type Story = StoryObj<InnovativeTagsProps>;

// Default Story
export const Default: Story = {
  args: {
    variants: ['default', 'secondary', 'destructive', 'outline'],
    spacing: '10px',
  },
};

// Story with Custom Variants
export const CustomVariants: Story = {
  args: {
    variants: ['default', 'secondary'],
    spacing: '15px',
  },
};

// Story with Different Spacing
export const WideSpacing: Story = {
  args: {
    variants: ['default', 'outline'],
    spacing: '20px',
  },
};
