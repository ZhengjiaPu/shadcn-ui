import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SuccessPanel from './panel-demo';
import FailPanel from './panel-fail';

export default {
  title: 'Components/Panel',
  component: SuccessPanel,
  subcomponents: { FailPanel },
  argTypes: {
    // SuccessPanel args
    successTitle: {
      control: 'text',
      description: 'Title for the Success Panel',
      defaultValue: 'Application Complete',
    },
    successReferenceNumber: {
      control: 'text',
      description: 'Reference number text for Success Panel',
      defaultValue: 'KDU3957KF',
    },
    successTitleColor: {
      control: 'color',
      description: 'Color for the Success Panel title',
      defaultValue: '#4B5563',
    },
    successDescriptionColor: {
      control: 'color',
      description: 'Color for the Success Panel description',
      defaultValue: '#6B7280',
    },

    // FailPanel args
    failTitle: {
      control: 'text',
      description: 'Title for the Fail Panel',
      defaultValue: 'Application Failed',
    },
    failMessage: {
      control: 'text',
      description: 'Message for Fail Panel',
      defaultValue: 'Please try again',
    },
    failButtonText: {
      control: 'text',
      description: 'Text for the Fail Panel button',
      defaultValue: 'Back',
    },
    failTitleColor: {
      control: 'color',
      description: 'Color for the Fail Panel title',
      defaultValue: '#000000',
    },
    failMessageColor: {
      control: 'color',
      description: 'Color for the Fail Panel message',
      defaultValue: '#000000',
    },
    failButtonColor: {
      control: 'color',
      description: 'Background color for the Fail Panel button',
      defaultValue: '#000000',
    },
    failButtonTextColor: {
      control: 'color',
      description: 'Text color for the Fail Panel button',
      defaultValue: '#FFFFFF',
    },
  },
} as ComponentMeta<typeof SuccessPanel>;

// Template for SuccessPanel
const SuccessTemplate: ComponentStory<typeof SuccessPanel> = ({
  successTitle,
  successReferenceNumber,
  successTitleColor,
  successDescriptionColor,
}) => (
  <SuccessPanel
    title={successTitle}
    referenceNumber={successReferenceNumber}
    titleColor={successTitleColor}
    descriptionColor={successDescriptionColor}
  />
);

export const Success = SuccessTemplate.bind({});
Success.args = {
  successTitle: 'Application Complete',
  successReferenceNumber: 'KDU3957KF',
  successTitleColor: '#4B5563',
  successDescriptionColor: '#6B7280',
};

// Template for FailPanel
const FailTemplate: ComponentStory<typeof FailPanel> = ({
  failTitle,
  failMessage,
  failButtonText,
  failTitleColor,
  failMessageColor,
  failButtonColor,
  failButtonTextColor,
}) => (
  <FailPanel
    title={failTitle}
    message={failMessage}
    buttonText={failButtonText}
    titleColor={failTitleColor}
    messageColor={failMessageColor}
    buttonColor={failButtonColor}
    buttonTextColor={failButtonTextColor}
  />
);

export const Fail = FailTemplate.bind({});
Fail.args = {
  failTitle: 'Application Failed',
  failMessage: 'Please try again',
  failButtonText: 'Back',
  failTitleColor: '#000000',
  failMessageColor: '#000000',
  failButtonColor: '#000000',
  failButtonTextColor: '#FFFFFF',
};
