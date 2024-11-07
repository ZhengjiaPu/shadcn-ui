// separator.stories.tsx
import type { Meta, ComponentStory } from '@storybook/react';
import SeparatorDemo, { SeparatorDemoProps } from './separator-demo';

const meta: Meta<typeof SeparatorDemo> = {
  title: 'Components/Separator',
  component: SeparatorDemo,
  argTypes: {
    separatorOrientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the separator (horizontal or vertical)',
      defaultValue: 'horizontal',
      table: {
        disable: true, // 隐藏控件
      },
    },
    separatorClass: {
      control: 'select',
      options: [
        'my-4',            // 默认上下间距
        'my-2',            // 小间距
        'my-8',            // 大间距
        'h-px bg-gray-200', // 1px 高度，浅灰色
        'h-0.5 bg-gray-500', // 更粗的分隔线，深灰色
        'border-t border-gray-300', // 顶部边框样式
        'border-dashed',   // 虚线
        'border-dotted',   // 点状线
      ],
      description: 'Custom class for styling the separator component',
      defaultValue: 'my-4',
    },
  },
};

export default meta;

const Template: ComponentStory<typeof SeparatorDemo> = (args: SeparatorDemoProps) => (
  <SeparatorDemo {...args} />
);

export const DefaultSeparator = Template.bind({});
DefaultSeparator.args = {
  separatorOrientation: 'vertical',
  separatorClass: 'my-4',
};
