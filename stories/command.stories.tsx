"use client";

import React, { useState, useEffect } from "react";
import { Meta, Story } from "@storybook/react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/default/ui/command";

const meta: Meta = {
  title: "Components/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    hoverColor: { control: "color" },
    calendarDisabled: { control: "boolean" },
    emojiDisabled: { control: "boolean" },
    calculatorDisabled: { control: "boolean" },
    profileDisabled: { control: "boolean" },
    billingDisabled: { control: "boolean" },
    settingsDisabled: { control: "boolean" },
    profileShortcut: { control: "text" },
    billingShortcut: { control: "text" },
    settingsShortcut: { control: "text" },
    showSuggestionsGroup: { control: "boolean" },
    showSettingsGroup: { control: "boolean" },
    openShortcut: { control: "text", description: "Shortcut to open the dialog (e.g., ⌘J)" },
  },
};

export default meta;

// Hoverable CommandItem component
const HoverableCommandItem = ({ children, hoverColor, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <CommandItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHovered ? { backgroundColor: hoverColor } : {}}
      disabled={disabled}
    >
      {children}
    </CommandItem>
  );
};

// Default Template
const Template: Story = ({
  hoverColor,
  calendarDisabled,
  emojiDisabled,
  calculatorDisabled,
  profileDisabled,
  billingDisabled,
  settingsDisabled,
  profileShortcut,
  billingShortcut,
  settingsShortcut,
  showSuggestionsGroup,
  showSettingsGroup,
}) => {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {showSuggestionsGroup && (
          <CommandGroup heading="Suggestions">
            <HoverableCommandItem hoverColor={hoverColor} disabled={calendarDisabled}>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </HoverableCommandItem>
            <HoverableCommandItem hoverColor={hoverColor} disabled={emojiDisabled}>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </HoverableCommandItem>
            <HoverableCommandItem hoverColor={hoverColor} disabled={calculatorDisabled}>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </HoverableCommandItem>
          </CommandGroup>
        )}
        <CommandSeparator />
        {showSettingsGroup && (
          <CommandGroup heading="Settings">
            <HoverableCommandItem hoverColor={hoverColor} disabled={profileDisabled}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>{profileShortcut || "⌘P"}</CommandShortcut>
            </HoverableCommandItem>
            <HoverableCommandItem hoverColor={hoverColor} disabled={billingDisabled}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>{billingShortcut || "⌘B"}</CommandShortcut>
            </HoverableCommandItem>
            <HoverableCommandItem hoverColor={hoverColor} disabled={settingsDisabled}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>{settingsShortcut || "⌘S"}</CommandShortcut>
            </HoverableCommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
};

export const Default = Template.bind({});
Default.args = {
  hoverColor: "#e0e0e0", 
  calendarDisabled: false,
  emojiDisabled: false,
  calculatorDisabled: true,
  profileDisabled: false,
  billingDisabled: false,
  settingsDisabled: false,
  profileShortcut: "⌘P",
  billingShortcut: "⌘B",
  settingsShortcut: "⌘S",
  showSuggestionsGroup: true,
  showSettingsGroup: true,
};

// CommandDialog Template
const DialogTemplate: Story = ({
  calendarDisabled,
  emojiDisabled,
  calculatorDisabled,
  profileDisabled,
  billingDisabled,
  settingsDisabled,
  profileShortcut,
  billingShortcut,
  settingsShortcut,
  showSuggestionsGroup,
  showSettingsGroup,
  openShortcut,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const [modifier, key] = openShortcut.split("+");

    const toggleDialog = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === key.toLowerCase() && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };

    document.addEventListener("keydown", toggleDialog);
    return () => document.removeEventListener("keydown", toggleDialog);
  }, [openShortcut]);

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          {openShortcut}
        </kbd>{" "}
        to open the command dialog.
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {showSuggestionsGroup && (
            <CommandGroup heading="Suggestions">
              <CommandItem disabled={calendarDisabled}>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem disabled={emojiDisabled}>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled={calculatorDisabled}>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
          )}
          <CommandSeparator />
          {showSettingsGroup && (
            <CommandGroup heading="Settings">
              <CommandItem disabled={profileDisabled}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>{profileShortcut || "⌘P"}</CommandShortcut>
              </CommandItem>
              <CommandItem disabled={billingDisabled}>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>{billingShortcut || "⌘B"}</CommandShortcut>
              </CommandItem>
              <CommandItem disabled={settingsDisabled}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>{settingsShortcut || "⌘S"}</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export const WithDialog = DialogTemplate.bind({});
WithDialog.args = {
  calendarDisabled: false,
  emojiDisabled: false,
  calculatorDisabled: true,
  profileDisabled: false,
  billingDisabled: false,
  settingsDisabled: false,
  profileShortcut: "⌘P",
  billingShortcut: "⌘B",
  settingsShortcut: "⌘S",
  showSuggestionsGroup: true,
  showSettingsGroup: true,
  openShortcut: "⌘+J", 
};
