import React from "react";
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

interface SwitchDemoProps {
  backgroundColor?: string; 
  labelColor?: string; 
  switchSize?: number; 
  spacing?: number; 
  labelText?: string; 
  switchTrackColor?: string; 
  switchThumbColor?: string; 
}

export default function SwitchDemo({
  backgroundColor,
  labelColor,
  switchSize,
  spacing,
  labelText,
  switchTrackColor,
  switchThumbColor,
}: SwitchDemoProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: `${spacing}px`,
        backgroundColor,
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Switch
        id="airplane-mode"
        style={{
          width: `${switchSize * 2}px`,
          height: `${switchSize}px`,
          backgroundColor: switchTrackColor,
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            width: `${switchSize}px`,
            height: `${switchSize}px`,
            backgroundColor: switchThumbColor,
            borderRadius: "50%",
          }}
        />
      </Switch>
      <Label htmlFor="airplane-mode" style={{ color: labelColor }}>
        {labelText}
      </Label>
    </div>
  );
}
