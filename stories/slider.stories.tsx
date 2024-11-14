import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SliderDemo from './slider-demo';

export default {
  title: 'Components/Slider',
  component: SliderDemo,
  argTypes: {
    defaultValue: { 
      control: 'array', 
      description: 'Default slider value (array with a single number)', 
      defaultValue: [50] 
    },
    max: { 
      control: 'number', 
      description: 'Maximum value of the slider', 
      defaultValue: 100 
    },
    step: { 
      control: 'number', 
      description: 'Step interval for the slider', 
      defaultValue: 1 
    },
    className: { 
      control: 'text', 
      description: 'Custom class name for slider width', 
      defaultValue: 'w-[60%]' 
    },
    backgroundColor: {
      control: 'select', options: ['bg-gray-200', 'bg-gray-400', 'bg-green-300', 'bg-red-200'] ,
      description: 'Background color for the slider track',
      defaultValue: 'bg-gray-200'
    },
    trackColor: {
      control: 'select', options: ['bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-pink-500','bg-black'],
      description: 'Color for the filled portion of the slider track',
      defaultValue: 'bg-black'
    },
    thumbColor: {
      control: 'select', options: ['bg-red-500', 'bg-yellow-400', 'bg-blue-700', 'bg-purple-500', 'bg-black'] ,
      description: 'Color for the slider thumb',
      defaultValue: 'bg-black'
    },
    size: {
      control: 'select', options: ['small', 'medium', 'large'] ,
      description: 'Slider size, affecting height and thumb size',
      defaultValue: 'medium'
    },
  },
  parameters: {
    actions: {
      handles: ['onChange', 'onValueChange'],
    },
  },
} as ComponentMeta<typeof SliderDemo>;

// Define the default template for the slider
const Template: ComponentStory<typeof SliderDemo> = (args) => <SliderDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: [50],
  max: 100,
  step: 1,
  className: 'w-[60%]',
  backgroundColor: 'bg-gray-200',
  trackColor: 'bg-black',
  thumbColor: 'bg-black',
  size: 'small',
};
