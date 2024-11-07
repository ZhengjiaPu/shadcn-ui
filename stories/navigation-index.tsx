import * as React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/registry/default/ui/navigation-menu";
import { cn } from "@/lib/utils";

type NavigationDemoProps = {
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
};

const NavigationDemo: React.FC<NavigationDemoProps> = ({ backgroundColor, textColor, borderRadius }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Getting Started link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs/getting-started"
            className="p-3"
            style={{
              backgroundColor,
              color: textColor,
              borderRadius: borderRadius, // Apply border radius here
            }}
          >
            Getting Started
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Components link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs/components"
            className="p-3"
            style={{
              backgroundColor,
              color: textColor,
              borderRadius: borderRadius, // Apply border radius here
            }}
          >
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Documentation link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs/documentation"
            className="p-3"
            style={{
              backgroundColor,
              color: textColor,
              borderRadius: borderRadius, // Apply border radius here
            }}
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationDemo;
