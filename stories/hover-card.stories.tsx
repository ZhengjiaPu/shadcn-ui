// hover-card.stories.tsx
import type { Meta, ComponentStory } from '@storybook/react';
import HoverCardDemo, { HoverCardDemoProps } from './hover-card-demo';

const meta: Meta<typeof HoverCardDemo> = {
  title: 'Components/HoverCard',
  component: HoverCardDemo,
  argTypes: {
    buttonText: {
      control: 'text',
      description: 'Text displayed on the HoverCard trigger button',
      defaultValue: '@nextjs',
    },
    avatarSrc: {
      control: 'text',
      description: 'Source URL for the avatar image',
      defaultValue: 'https://github.com/vercel.png',
    },
    avatarFallback: {
      control: 'text',
      description: 'Fallback text for the avatar when image is not available',
      defaultValue: 'VC',
    },
    username: {
      control: 'text',
      description: 'Username displayed in the hover card',
      defaultValue: '@nextjs',
    },
    description: {
      control: 'text',
      description: 'Description text displayed in the hover card',
      defaultValue: 'The React Framework – created and maintained by @vercel.',
    },
    joinDate: {
      control: 'text',
      description: 'Join date displayed in the hover card',
      defaultValue: 'December 2021',
    },
  },
};

export default meta;

const Template: ComponentStory<typeof HoverCardDemo> = (args: HoverCardDemoProps) => (
  <HoverCardDemo {...args} />
);

export const DefaultHoverCard = Template.bind({});
DefaultHoverCard.args = {
  buttonText: '@nextjs',
  avatarSrc: 'https://github.com/vercel.png',
  avatarFallback: 'VC',
  username: '@nextjs',
  description: 'The React Framework – created and maintained by @vercel.',
  joinDate: 'December 2021',
};
