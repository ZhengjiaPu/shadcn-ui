import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import CardWithDrawer from './card-with-drawer';
import CardDemo from './card-demo';
import DynamicCardComponent from './card-dynamic';
import CardWithPicture from './card-image';
import LargeHeaderCard from './card-large-header.tsx';
import CardWithNormal from './card-normal';
import EnquirySubmittedCard from './card-with-action.tsx';
import CardWithForm from './card-with-form';

const meta: Meta = {
  title: 'Components/Card',
  component: CardWithDrawer,
};
export default meta;

// CardWithDrawer - Default 变体
const DefaultTemplate: ComponentStory<typeof CardWithDrawer> = (args) => (
  <CardWithDrawer {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.storyName = "Default CardWithDrawer";
Default.args = {
  imageUrl: 'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg',
  cardTitle: 'University of Sydney',
  userName: 'Mariana',
  buttonText: 'Explore More',
  buttonLink: 'https://www.sydney.edu.au/',
  width: 'w-1/2',
  height: 'h-64',
};
Default.argTypes = {
  imageUrl: { control: 'select', options: [
    'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg',
    'https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__2x/public/thumbnails/image/2022-11-02-students-library-lawn-0002_2.jpg',
    'https://p5.itc.cn/q_70/images01/20210704/79c80488351d42aa88df59a6b0510b01.jpeg',
  ] },
  cardTitle: { control: 'select', options: ['University of Sydney', 'University of New South Wales', 'Guangdong University of technology'] },
  userName: { control: 'select', options: ['Mariana', 'John Doe', 'Jane Smith'] },
  buttonText: { control: 'select', options: ['Explore More', 'Learn More', 'Contact Us'] },
  buttonLink: { control: 'select', options: [
    'https://www.sydney.edu.au/',
    'https://www.unsw.edu.au/',
    'https://www.gdut.edu.cn/',
  ] },
  width: { control: 'select', options: ['w-1/4', 'w-1/3', 'w-1/2', 'w-full'] },
  height: { control: 'select', options: ['h-32', 'h-48', 'h-64', 'h-80'] },
};

// CardWithDrawer - Small Card 变体
const SmallCardTemplate: ComponentStory<typeof CardWithDrawer> = (args) => (
  <CardWithDrawer {...args} />
);

export const SmallCard = SmallCardTemplate.bind({});
SmallCard.storyName = "Small Card";
SmallCard.args = {
  width: 'w-1/4',
  height: 'h-48',
};
SmallCard.argTypes = {
  width: { control: 'select', options: ['w-1/4', 'w-1/3'] },
  height: { control: 'select', options: ['h-32', 'h-48'] },
  imageUrl: { table: { disable: true } },
      userName: { table: { disable: true } },
      buttonLink: { table: { disable: true } },
      cardTitle: { table: { disable: true } },
      buttonText: { table: { disable: true } },
      cardDescription: { table: { disable: true } },
};

// CardWithDrawer - Custom Card 变体
const CustomCardTemplate: ComponentStory<typeof CardWithDrawer> = (args) => (
  <CardWithDrawer {...args} />
);

export const CustomCard = CustomCardTemplate.bind({});
CustomCard.storyName = "Custom Card";
CustomCard.args = {
  cardTitle: 'Custom Title',
  userName: 'John Doe',
  buttonText: 'Learn More',
  buttonLink: 'https://www.sydney.edu.au/',
};
CustomCard.argTypes = {
  cardTitle: { control: 'text' },
  userName: { control: 'text' },
  buttonText: { control: 'select', options: ['Explore More', 'Learn More', 'Contact Us'] },
  buttonLink: { control: 'text' },
  imageUrl: { table: { disable: true } },
      userName: { table: { disable: true } },
      width: { table: { disable: true } },
      height: { table: { disable: true } },
      cardDescription: { table: { disable: true } },
};

// CardDemo - Default 变体
const CardDemoDefaultTemplate: ComponentStory<typeof CardDemo> = (args) => (
  <CardDemo {...args} />
);

export const CardDemoDefault = CardDemoDefaultTemplate.bind({});
CardDemoDefault.storyName = "CardDemo";
CardDemoDefault.args = {
  CardTitle: 'Notifications',
  CardDescription: 'You have 3 unread messages.',
  ButtonText: 'Mark all as read',

};
CardDemoDefault.argTypes = {
  CardTitle: { control: 'text' },
  cardDescription: { control: 'text' },
  ButtonText: { control: 'text' },
  imageUrl: { table: { disable: true } },
    userName: { table: { disable: true } },
    buttonLink: { table: { disable: true } },
    width: { table: { disable: true } },
    height: { table: { disable: true } },
    cardTitle: { table: { disable: true } },
    buttonText: { table: { disable: true } },
    cardDescription: { table: { disable: true } },
};


// DynamicCardComponent - Default 变体
const DynamicCardTemplate: ComponentStory<typeof DynamicCardComponent> = (args) => (
  <DynamicCardComponent {...args} />
);

export const DynamicCard = DynamicCardTemplate.bind({});
DynamicCard.storyName = "Dynamic Card";
DynamicCard.args = {
  title: "Events Triggered",
  productionLabel: "Production",
  data: [
    { name: "analytics", value: "12,403", change: "+15% /wk", color: "#38b2ac", barWidth: "70%" },
    { name: "emails", value: "112,403", change: "+15% /wk", color: "#f56565", barWidth: "90%" },
  ],
  footerContent: {
    analytics: { label: "High Latency Detected", time: "8s" },
    emails: { label: "Online Now", count: "1,302" },
  },
  totalEventsLabel: "Total Events Triggered: 35,968",
  analyticsColor: "#38b2ac", // 默认绿色
  emailsColor: "#f56565", // 默认红色
};
DynamicCard.argTypes = {
  title: { control: 'text' },
  productionLabel: { control: 'text' },
  data: { table: { disable: true } },
  footerContent: { table: { disable: true } },
  totalEventsLabel: { control: 'text' },
  analyticsColor: {
    control: 'select',
    options: ['#38b2ac', '#3182ce', '#805ad5', '#e53e3e'], // 绿色、蓝色、紫色、红色
    description: 'Set the color of the analytics bar',
  },
  emailsColor: {
    control: 'select',
    options: ['#f56565', '#ed8936', '#48bb78', '#4299e1'], // 红色、橙色、绿色、蓝色
    description: 'Set the color of the emails bar',
  },
      imageUrl: { table: { disable: true } },
      userName: { table: { disable: true } },
      buttonLink: { table: { disable: true } },
      width: { table: { disable: true } },
      height: { table: { disable: true } },
      cardTitle: { table: { disable: true } },
      buttonText: { table: { disable: true } },
};

// LargeHeaderCard - Default 变体
const LargeHeaderCardTemplate: ComponentStory<typeof LargeHeaderCard> = (args) => (
  <LargeHeaderCard {...args} />
);

export const LargeHeaderCardStory = LargeHeaderCardTemplate.bind({});
LargeHeaderCardStory.storyName = "Large Header Card";
LargeHeaderCardStory.args = {
  headerText: "The University of Sydney is ranked 19th in the 2024 QS World University Rankings",
  description: "The University of Sydney was founded on the principle of giving everyone the opportunity to realise their potential through education and still holds that belief just as strongly today.",
  buttonText: "Explore your study options →",
};
LargeHeaderCardStory.argTypes = {
  headerText: {
    control: 'text',
    description: 'Text displayed as the header of the card',
  },
  description: {
    control: 'text',
    description: 'Description text displayed below the header',
  },
  buttonText: {
    control: 'text',
    description: 'Text displayed on the button',
  },
  imageUrl: { table: { disable: true } },
      userName: { table: { disable: true } },
      buttonLink: { table: { disable: true } },
      width: { table: { disable: true } },
      height: { table: { disable: true } },
      cardTitle: { table: { disable: true } },
      cardDescription: { table: { disable: true } },
};

// CardWithNormal - Default 变体
const CardWithNormalTemplate: ComponentStory<typeof CardWithNormal> = (args) => (
  <CardWithNormal {...args} />
);

export const CardWithNormalStory = CardWithNormalTemplate.bind({});
CardWithNormalStory.storyName = "Card With Normal";
CardWithNormalStory.args = {
  title: "Contact us",
  description: "Submit a partnership enquiry or make a donation by contacting the University revenue team.",
  buttonText: "Explore more →",
};
CardWithNormalStory.argTypes = {
  title: {
    control: 'text',
    description: 'Title text displayed in the card header',
  },
  description: {
    control: 'text',
    description: 'Description text displayed in the card content',
  },
  buttonText: {
    control: 'text',
    description: 'Text displayed on the button',
  },
  imageUrl: { table: { disable: true } },
        userName: { table: { disable: true } },
        buttonLink: { table: { disable: true } },
        width: { table: { disable: true } },
        height: { table: { disable: true } },
        cardTitle: { table: { disable: true } },
        cardDescription: { table: { disable: true } },
};

// EnquirySubmittedCard - Default 变体
const EnquirySubmittedCardTemplate: ComponentStory<typeof EnquirySubmittedCard> = (args) => (
  <EnquirySubmittedCard {...args} />
);

export const EnquirySubmittedCardStory = EnquirySubmittedCardTemplate.bind({});
EnquirySubmittedCardStory.storyName = "Card With Action";
EnquirySubmittedCardStory.args = {
  title: "Enquiry Submitted",
  message: "Thank you for your enquiry. We will get back to you as soon as we can.",
  buttonText: "Return to Page",
};
EnquirySubmittedCardStory.argTypes = {
  title: {
    control: 'text',
    description: 'Title text displayed in the card',
  },
  message: {
    control: 'text',
    description: 'Message displayed in the card content',
  },
  buttonText: {
    control: 'text',
    description: 'Text displayed on the button',
  },

  imageUrl: { table: { disable: true } },
      userName: { table: { disable: true } },
      buttonLink: { table: { disable: true } },
      width: { table: { disable: true } },
      height: { table: { disable: true } },
      cardTitle: { table: { disable: true } },
      cardDescription: { table: { disable: true } },
};

// CardWithForm - Default 变体
const CardWithFormTemplate: ComponentStory<typeof CardWithForm> = (args) => (
  <CardWithForm {...args} />
);

export const CardWithFormStory = CardWithFormTemplate.bind({});
CardWithFormStory.storyName = "Card With Form";
CardWithFormStory.args = {
  title: "Create project",
  description: "Deploy your new project in one-click.",
  buttonTextCancel: "Cancel",
  buttonTextDeploy: "Deploy",

};
CardWithFormStory.argTypes = {
  title: {
    control: 'text',
    description: 'Title text displayed in the card header',
  },
  description: {
    control: 'text',
    description: 'Description text displayed in the card header',
  },
  buttonTextCancel: {
    control: 'text',
    description: 'Text displayed on the cancel button',
  },
  buttonTextDeploy: {
    control: 'text',
    description: 'Text displayed on the deploy button',
  },
  frameworkOptions: {
    control: 'object',
    description: 'Options available in the framework dropdown',
  },
  imageUrl: { table: { disable: true } },
        userName: { table: { disable: true } },
        buttonLink: { table: { disable: true } },
        width: { table: { disable: true } },
        height: { table: { disable: true } },
        cardTitle: { table: { disable: true } },
        cardDescription: { table: { disable: true } },
        buttonText: { table: { disable: true } },
        frameworkOptions: { table: { disable: true } },
};
