import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import CarouselDemo from './carousel-demo';
import CarouselBasic from './carousel-basic';
import CarouselAuto from './carousel-auto';
import CarouselImage from './carousel-images';
import CarouselSize from './carousel-size';
import CarouselOrientation from './carousel-orientation';


const meta: Meta = {
  title: 'Components/Carousel',
};
export default meta;

// CarouselDemo - Demo Carousel 变体
const DemoTemplate: ComponentStory<typeof CarouselDemo> = (args) => (
  <CarouselDemo {...args} />
);

export const DemoCarousel = DemoTemplate.bind({});
DemoCarousel.storyName = "Demo Carousel";
DemoCarousel.args = {
  items: Array.from({ length: 5 }, (_, i) => <span className="text-4xl font-semibold">{i + 1}</span>),
  width: 'w-full',
  height: 'max-w-xs',
  cardClass: 'flex aspect-square items-center justify-center p-6',
  itemCount: 5,
  textColor: 'text-black',
};
DemoCarousel.argTypes = {
  items: {
    table: { disable: true },
  },
  width: {
    control: { type: 'select' },
    options: ['w-full', 'w-1/2', 'w-1/3', 'w-1/4'],
    description: 'Set the width of the carousel using TailwindCSS classes',
  },
  height: {
    control: { type: 'select' },
    options: ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg'],
    description: 'Set the height of the carousel using TailwindCSS classes',
  },
  cardClass: {
    control: 'text',
    description: 'Custom class for the cards displayed inside the carousel',
  },
  itemCount: {
    control: 'number',
    description: 'Number of items in the carousel',
  },
  textColor: {
    control: { type: 'select' },
    options: ['text-black', 'text-white', 'text-red-600', 'text-blue-600', 'text-green-600'],
    description: 'Set the text color using TailwindCSS classes',
  },
};

// CarouselBasic - Basic Carousel 变体
const BasicTemplate: ComponentStory<typeof CarouselBasic> = (args) => (
  <CarouselBasic {...args} />
);

export const BasicCarousel = BasicTemplate.bind({});
BasicCarousel.storyName = "Basic Carousel";
BasicCarousel.args = {
  quotes: [
    { word: "I love you the more in that I believe you had liked me for my own sake and for nothing else", author: "John Keats" },
    { word: "But man is not made for defeat. A man can be destroyed but not defeated.", author: "Ernest Hemingway" },
    { word: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
  ],
  width: 'w-full',
  height: 'max-w-xs',
};
BasicCarousel.argTypes = {
  quotes: {
    control: 'object',
    description: 'Array of quotes to display in the carousel',
  },
  width: {
    control: { type: 'select' },
    options: ['w-full', 'w-1/4'],
    description: 'Set the width of the carousel using TailwindCSS classes',
  },
  height: {
    control: { type: 'select' },
    options: ['max-w-xs', 'max-w-sm'],
    description: 'Set the height of the carousel using TailwindCSS classes',
  },
  quotes: { table: { disable: true } },
};

// Default Story for CarouselAuto
const CarouselAutoTemplate: ComponentStory<typeof CarouselAuto> = (args) => (
  <CarouselAuto {...args} />
);

export const DefaultAutoCarousel = CarouselAutoTemplate.bind({});
DefaultAutoCarousel.storyName = "Auto Carousel";
DefaultAutoCarousel.args = {
  itemCount: 5,
  delay: 2000,
  width: 'w-full',
  height: 'max-w-xs',
};
DefaultAutoCarousel.argTypes = {
  itemCount: {
    control: 'number',
    description: 'Number of items in the carousel',
  },
  delay: {
    control: 'number',
    description: 'Autoplay delay in milliseconds',
  },
  width: {
    control: { type: 'select' },
    options: ['w-full', 'w-1/4'],
    description: 'Set the width of the carousel using TailwindCSS classes',
  },
  height: {
    control: { type: 'select' },
    options: ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg'],
    description: 'Set the height of the carousel using TailwindCSS classes',
  },
};

// Default Story for CarouselImage
const CarouselImageTemplate: ComponentStory<typeof CarouselImage> = (args) => (
  <CarouselImage {...args} />
);

export const DefaultImageCarousel = CarouselImageTemplate.bind({});
DefaultImageCarousel.storyName = "Image Carousel";
DefaultImageCarousel.args = {
  images: [
    "https://imgs.qunarzz.com/sight/p8/201211/04/7e43ab184c4721c793835fbb.jpg_750x500_e33e884f.jpg",
    "https://static.independent.co.uk/2023/01/04/12/iStock-505918312.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEJDADOCBmZjLuO6WmN3uVAIYhgxgl3tjvw&s",
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Sydney_Tower_%28Centre_Point_Tower%29_seen_from_Queen%27s_Square%2C_Sydney.jpg",
    "https://www.audeng.com/file/2020/10/UniversityofSydney.png",
  ],
  delay: 4000,
  width: 'w-full',
  height: 'max-w-xs',
};
DefaultImageCarousel.argTypes = {
  images: {
    control: 'object',
    description: 'Array of image URLs to display in the carousel',
  },
  delay: {
    control: 'number',
    description: 'Autoplay delay in milliseconds',
  },
  width: {
    control: { type: 'select' },
    options: ['w-full', 'w-1/2', 'w-1/3', 'w-1/4'],
    description: 'Set the width of the carousel using TailwindCSS classes',
  },
  height: {
    control: { type: 'select' },
    options: ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg'],
    description: 'Set the height of the carousel using TailwindCSS classes',
  },
  images: { table: { disable: true } },
};
// Default Story for CarouselSize
const CarouselSizeTemplate: ComponentStory<typeof CarouselSize> = (args) => (
  <CarouselSize {...args} />
);

export const DefaultSizeCarousel = CarouselSizeTemplate.bind({});
DefaultSizeCarousel.storyName = "Size Carousel";
DefaultSizeCarousel.args = {
  itemCount: 5,
  align: "start",
  width: 'w-full',
  height: 'max-w-sm',
};
DefaultSizeCarousel.argTypes = {
  itemCount: {
    control: 'number',
    description: 'Number of items in the carousel',
  },
  align: {
    control: { type: 'select' },
    options: ['start', 'center', 'end'],
    description: 'Align items within the carousel',
  },
  width: {
    control: { type: 'select' },
    options: ['w-full', 'w-1/2', 'w-1/3', 'w-1/4'],
    description: 'Set the width of the carousel using TailwindCSS classes',
  },
  height: {
    control: { type: 'select' },
    options: ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg'],
    description: 'Set the height of the carousel using TailwindCSS classes',
  },
  align: { table: { disable: true } },
};
// Default Story for CarouselOrientation
const CarouselOrientationTemplate: ComponentStory<typeof CarouselOrientation> = (args) => (
  <CarouselOrientation {...args} />
);

export const DefaultOrientationCarousel = CarouselOrientationTemplate.bind({});
DefaultOrientationCarousel.storyName = "Orientation Carousel";
DefaultOrientationCarousel.args = {
  itemCount: 5,
  align: "start",
  orientation: "vertical",
  width: 'w-full',
  height: 'max-w-xs',
};
DefaultOrientationCarousel.argTypes = {
  itemCount: {
    control: 'number',
    description: 'Number of items in the carousel',
  },
  align: {
    control: { type: 'select' },
    options: ['start', 'center', 'end'],
    description: 'Align items within the carousel',
  },
  orientation: {
    control: { type: 'select' },
    options: ['horizontal', 'vertical'],
    description: 'Set the orientation of the carousel',
  },
  width: {
    control: { type: 'select' },
    options: ['w-full', 'w-1/2', 'w-1/3', 'w-1/4'],
    description: 'Set the width of the carousel using TailwindCSS classes',
  },
  height: {
    control: { type: 'select' },
    options: ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg'],
    description: 'Set the height of the carousel using TailwindCSS classes',
  },
  align: { table: { disable: true } },
};
