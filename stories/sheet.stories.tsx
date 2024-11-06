// sheet.stories.tsx
import type { Meta, ComponentStory } from '@storybook/react';
import SheetDemo from './sheet-demo';
import SheetSide from './sheet-side';

const meta: Meta = {
  title: 'Components/Sheet',
};

export default meta;

// SheetDemo Template
const SheetDemoTemplate: ComponentStory<typeof SheetDemo> = (args) => <SheetDemo {...args} />;

export const SheetDemoStory = SheetDemoTemplate.bind({});
SheetDemoStory.storyName = 'Sheet Demo';  //
SheetDemoStory.args = {
  triggerLabel: 'Open',
  nameLabel: 'Name',
  nameValue: 'Pedro Duarte',
  usernameLabel: 'Username',
  usernameValue: '@peduarte',
  side: 'right',
};

//
SheetDemoStory.argTypes = {
  side: {
    control: 'select',
    options: ['top', 'right', 'bottom', 'left'],
    description: 'Position of the sheet (for SheetDemo component)',
    defaultValue: 'right',
  },
  triggerLabel: {
    control: 'text',
    description: 'Label for the trigger button',
    defaultValue: 'Open',
  },
  nameLabel: {
    control: 'text',
    description: 'Label for the name input',
    defaultValue: 'Name',
  },
  nameValue: {
    control: 'text',
    description: 'Default value for the name input',
    defaultValue: 'Pedro Duarte',
  },
  usernameLabel: {
    control: 'text',
    description: 'Label for the username input',
    defaultValue: 'Username',
  },
  usernameValue: {
    control: 'text',
    description: 'Default value for the username input',
    defaultValue: '@peduarte',
  },
};

// SheetSide Template
const SheetSideTemplate: ComponentStory<typeof SheetSide> = (args) => <SheetSide {...args} />;

export const SheetSideStory = SheetSideTemplate.bind({});
SheetSideStory.storyName = 'Sheet Side';  //
SheetSideStory.args = {
  triggerLabel: 'Open',
  nameLabel: 'Name',
  nameValue: 'Pedro Duarte',
  usernameLabel: 'Username',
  usernameValue: '@peduarte',
};

//
SheetSideStory.argTypes = {
  side: {
    table: {
      disable: true, //
    },
  },
  triggerLabel: {
    control: 'text',
    description: 'Label for the trigger button',
    defaultValue: 'Open',
  },
  nameLabel: {
    control: 'text',
    description: 'Label for the name input',
    defaultValue: 'Name',
  },
  nameValue: {
    control: 'text',
    description: 'Default value for the name input',
    defaultValue: 'Pedro Duarte',
  },
  usernameLabel: {
    control: 'text',
    description: 'Label for the username input',
    defaultValue: 'Username',
  },
  usernameValue: {
    control: 'text',
    description: 'Default value for the username input',
    defaultValue: '@peduarte',
  },
};
