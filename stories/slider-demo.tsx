import React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/registry/default/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider> & {
  backgroundColor?: string;
  trackColor?: string;
  thumbColor?: string;
  size?: "small" | "medium" | "large";
};

export default function SliderDemo({
  className,
  backgroundColor,
  trackColor,
  thumbColor,
  size,
  ...props
}: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      backgroundColor={backgroundColor}
      trackColor={trackColor}
      thumbColor={thumbColor}
      size={size}
      {...props}
    />
  );
}
