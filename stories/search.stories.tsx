import { Meta, Story } from "@storybook/react";
import BasicSearch  from "./search-demo";
import RadixSearch from "./search-icon";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";

export default {
  title: "Components/Search",
  component: BasicSearch,
  argTypes: {
    buttonColor: {
      control: "color",
      description: "Button background color",
      defaultValue: "#000000",
    },
    placeholderText: {
      control: "text",
      description: "Placeholder text for the search input",
      defaultValue: "Find Anything...",
    },
    formWidth: {
      control: "text",
      description: "Width of the form (tailwind width classes)",
      defaultValue: "w-2/3",
    },
    buttonText: {
      control: "text",
      description: "Text inside the search button",
      defaultValue: "Search",
    },
  },
} as Meta;

const Template: Story = ({ buttonColor, placeholderText, formWidth, buttonText }) => {
  return (
    <div className="p-4">
      <form className={`${formWidth} space-y-6`}>
        <Input placeholder={placeholderText} />
        <Button
          variant="default"
          style={{ marginTop: "5px", backgroundColor: buttonColor }}
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  buttonColor: "#000000",
  placeholderText: "Find Anything...",
  formWidth: "w-2/3",
  buttonText: "Search",
};

export const RadixSearchVariant: Story = () => {
  return (
    <div className="p-4">
      <RadixSearch />
    </div>
  );
};
