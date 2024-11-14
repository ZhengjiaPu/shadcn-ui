import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuShortcut,
  ContextMenuLabel,
} from '@/registry/default/ui/context-menu';
import { cn } from '@/lib/utils';

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  argTypes: {
    menuItems: {
      control: 'object',
      description: 'Define custom menu items for the ContextMenu.',
      defaultValue: [
        { type: 'item', label: 'Back', shortcut: '⌘[', disabled: false },
        { type: 'item', label: 'Forward', shortcut: '⌘]', disabled: true },
        { type: 'separator' },
        { type: 'checkbox', label: 'Show Bookmarks Bar', checked: true, shortcut: '⌘⇧B' },
        { type: 'checkbox', label: 'Show Full URLs', checked: false },
        { type: 'separator' },
        { type: 'radio', label: 'Pedro Duarte', value: 'pedro' },
        { type: 'radio', label: 'Colm Tuite', value: 'colm' },
        {
          type: 'sub',
          label: 'More Tools',
          subItems: [
            { label: 'Save Page As...', shortcut: '⇧⌘S' },
            { label: 'Developer Tools' },
          ],
        },
      ],
    },
    focusColor: {
      control: 'text',
      description: 'Customize focus color for menu items with Tailwind color class.',
      defaultValue: 'bg-blue-100', // Tailwind class
    },
  },
} as Meta;

const Template: Story = ({ menuItems, focusColor }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        {menuItems.map((item, index) => {
          const itemClasses = cn("rounded-sm", focusColor);

          switch (item.type) {
            case 'item':
              return (
                <ContextMenuItem
                  key={index}
                  inset
                  disabled={item.disabled}
                  className={itemClasses}
                >
                  {item.label}
                  {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
                </ContextMenuItem>
              );
            case 'separator':
              return <ContextMenuSeparator key={index} />;
            case 'checkbox':
              return (
                <ContextMenuCheckboxItem
                  key={index}
                  checked={item.checked}
                  className={itemClasses}
                >
                  {item.label}
                  {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
                </ContextMenuCheckboxItem>
              );
            case 'radio':
              return (
                <ContextMenuRadioGroup key={index} value={item.value}>
                  <ContextMenuRadioItem
                    value={item.value}
                    className={itemClasses}
                  >
                    {item.label}
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              );
            case 'sub':
              return (
                <ContextMenuSub key={index} className={focusColor}>
                  <ContextMenuSubTrigger inset className={focusColor}>
                    {item.label}
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    {item.subItems.map((subItem, subIndex) => (
                      <ContextMenuItem key={subIndex} className={itemClasses}>
                        {subItem.label}
                        {subItem.shortcut && (
                          <ContextMenuShortcut>{subItem.shortcut}</ContextMenuShortcut>
                        )}
                      </ContextMenuItem>
                    ))}
                  </ContextMenuSubContent>
                </ContextMenuSub>
              );
            default:
              return null;
          }
        })}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { type: 'item', label: 'Back', shortcut: '⌘[', disabled: false },
    { type: 'item', label: 'Forward', shortcut: '⌘]', disabled: true },
    { type: 'separator' },
    { type: 'checkbox', label: 'Show Bookmarks Bar', checked: true, shortcut: '⌘⇧B' },
    { type: 'checkbox', label: 'Show Full URLs', checked: false },
    { type: 'separator' },
    { type: 'radio', label: 'Pedro Duarte', value: 'pedro' },
    { type: 'radio', label: 'Colm Tuite', value: 'colm' },
    {
      type: 'sub',
      label: 'More Tools',
      subItems: [
        { label: 'Save Page As...', shortcut: '⇧⌘S' },
        { label: 'Developer Tools' },
      ],
    },
  ],
  focusColor: 'focus:bg-blue-100', 
};
