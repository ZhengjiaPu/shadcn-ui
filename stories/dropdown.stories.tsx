import * as React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import DropdownMenuCheckboxes from "./dropdown-menu-checkboxes"
import DropdownMenuDemo from "./dropdown-menu-demo"
import DropdownMenuRadioGroupDemo from "./dropdown-menu-radio-group"
import DropdownMenuwithDividers from "./dropdown-menu-with-divider"
import DropdownMenuwithHeader from "./dropdown-menu-with-header"
import DropdownMenuwithIcon from "./dropdown-menu-with-icon"
import DropdownMenuSelect from "./dropdown-menu-with-search"

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenuDemo,
  argTypes: {
    defaultOption1: {
      table: { disable: false },
      description: "Text for the first default dropdown option.",
    },
    defaultOption2: {
      table: { disable: false },
      description: "Text for the second default dropdown option.",
    },
    defaultOption3: {
      table: { disable: false },
      description: "Text for the third default dropdown option.",
    },
    defaultOption4: {
      table: { disable: false },
      description: "Text for the fourth default dropdown option.",
    },
    checkboxOption1: {
      table: { disable: false },
      description: "Text for the first checkbox dropdown option.",
    },
    checkboxOption2: {
      table: { disable: false },
      description: "Text for the second checkbox dropdown option.",
    },
    checkboxOption3: {
      table: { disable: false },
      description: "Text for the third checkbox dropdown option.",
    },
    appearanceLabel: {
      table: { disable: false },
      description: "Label text for appearance-related checkbox options.",
    },
    panelLabel: {
      table: { disable: false },
      description: "Label for the radio group panel section.",
    },
    radioOption1: {
      table: { disable: false },
      description: "Text for the first radio group option.",
    },
    radioOption2: {
      table: { disable: false },
      description: "Text for the second radio group option.",
    },
    radioOption3: {
      table: { disable: false },
      description: "Text for the third radio group option.",
    },
    chineseCarsLabel: {
      table: { disable: false },
      description: "Label for Chinese car options in the divider dropdown.",
    },
    germanCarsLabel: {
      table: { disable: false },
      description: "Label for German car options in the divider dropdown.",
    },
    dividerOption1: {
      table: { disable: false },
      description: "Text for the first divider dropdown option.",
    },
    dividerOption2: {
      table: { disable: false },
      description: "Text for the second divider dropdown option.",
    },
    dividerOption3: {
      table: { disable: false },
      description: "Text for the third divider dropdown option.",
    },
    dividerOption4: {
      table: { disable: false },
      description: "Text for the fourth divider dropdown option.",
    },
    searchOption1: {
      table: { disable: false },
      description: "Text for the first search dropdown option.",
    },
    searchOption2: {
      table: { disable: false },
      description: "Text for the second search dropdown option.",
    },
    searchOption3: {
      table: { disable: false },
      description: "Text for the third search dropdown option.",
    },
    searchOption4: {
      table: { disable: false },
      description: "Text for the fourth search dropdown option.",
    },
    headerLabel: {
      table: { disable: false },
      description:
        "Label text for the header section of the dropdown with header.",
    },
    userEmail: {
      table: { disable: false },
      description: "User email displayed in the dropdown with header.",
    },
    headerOption1: {
      table: { disable: false },
      description: "Text for the first header dropdown option.",
    },
    headerOption2: {
      table: { disable: false },
      description: "Text for the second header dropdown option.",
    },
    headerOption3: {
      table: { disable: false },
      description: "Text for the third header dropdown option.",
    },
    headerOption4: {
      table: { disable: false },
      description: "Text for the fourth header dropdown option.",
    },
  },
} as ComponentMeta<typeof DropdownMenuDemo>

// Default variant
const DefaultTemplate: ComponentStory<typeof DropdownMenuDemo> = (args) => (
  <DropdownMenuDemo
    option1={args.defaultOption1}
    option2={args.defaultOption2}
    option3={args.defaultOption3}
    option4={args.defaultOption4}
  />
)

export const Default = DefaultTemplate.bind({})
Default.storyName = "Default"
Default.args = {
  defaultOption1: "Account Settings",
  defaultOption2: "Support",
  defaultOption3: "License",
  defaultOption4: "Signout",
}

// Checkboxes variant
const CheckboxesTemplate: ComponentStory<typeof DropdownMenuCheckboxes> = (
  args
) => (
  <DropdownMenuCheckboxes
    appearanceLabel={args.appearanceLabel}
    option1={args.checkboxOption1}
    option2={args.checkboxOption2}
    option3={args.checkboxOption3}
  />
)

export const Checkboxes = CheckboxesTemplate.bind({})
Checkboxes.storyName = "Checkboxes"
Checkboxes.args = {
  appearanceLabel: "Appearance",
  checkboxOption1: "Status Bar",
  checkboxOption2: "Activity Bar",
  checkboxOption3: "Panel",
}

// Radio Group variant
const RadioGroupTemplate: ComponentStory<typeof DropdownMenuRadioGroupDemo> = (
  args
) => (
  <DropdownMenuRadioGroupDemo
    panelLabel={args.panelLabel}
    option1={args.radioOption1}
    option2={args.radioOption2}
    option3={args.radioOption3}
  />
)

export const RadioGroup = RadioGroupTemplate.bind({})
RadioGroup.storyName = "Radio Group"
RadioGroup.args = {
  panelLabel: "Panel Position",
  radioOption1: "Top",
  radioOption2: "Bottom",
  radioOption3: "Right",
}

// With icons variant
const WithIconsTemplate: ComponentStory<typeof DropdownMenuwithIcon> = () => (
  <DropdownMenuwithIcon />
)

export const WithIcons = WithIconsTemplate.bind({})
WithIcons.storyName = "With icons"

// With divider variant
const DividerTemplate: ComponentStory<typeof DropdownMenuwithDividers> = (
  args
) => (
  <DropdownMenuwithDividers
    chineseCarsLabel={args.chineseCarsLabel}
    germanCarsLabel={args.germanCarsLabel}
    option1={args.dividerOption1}
    option2={args.dividerOption2}
    option3={args.dividerOption3}
    option4={args.dividerOption4}
  />
)

export const WithDivider = DividerTemplate.bind({})
WithDivider.storyName = "With divider"
WithDivider.args = {
  chineseCarsLabel: "Chinese Cars",
  germanCarsLabel: "German Cars",
  dividerOption1: "BYD",
  dividerOption2: "GWM",
  dividerOption3: "Mercedes",
  dividerOption4: "Audi",
}

// With search variant
const WithSearchTemplate: ComponentStory<typeof DropdownMenuSelect> = (
  args
) => (
  <DropdownMenuSelect
    option1={args.searchOption1}
    option2={args.searchOption2}
    option3={args.searchOption3}
    option4={args.searchOption4}
  />
)

export const WithSearch = WithSearchTemplate.bind({})
WithSearch.storyName = "With search"
WithSearch.args = {
  searchOption1: "Account Settings",
  searchOption2: "Support",
  searchOption3: "License",
  searchOption4: "Signout",
}

// With header variant
const WithHeaderTemplate: ComponentStory<typeof DropdownMenuwithHeader> = (
  args
) => (
  <DropdownMenuwithHeader
    headerLabel={args.headerLabel}
    userEmail={args.userEmail}
    option1={args.headerOption1}
    option2={args.headerOption2}
    option3={args.headerOption3}
    option4={args.headerOption4}
  />
)

export const WithHeader = WithHeaderTemplate.bind({})
WithHeader.storyName = "With header"
WithHeader.args = {
  headerLabel: "Signed in as",
  userEmail: "nzha9876@uni.sydney.edu.au",
  headerOption1: "Account Settings",
  headerOption2: "Support",
  headerOption3: "License",
  headerOption4: "Signout",
}
