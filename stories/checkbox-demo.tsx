"use client";

import React from "react";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { Toaster } from "@/registry/default/ui/toaster";
import { useToast } from "@/registry/default/ui/use-toast";

type CheckboxDemoProps = {
  checkboxes?: { id: string; label: string }[]; // Array of checkboxes with id and label
  toastMessage?: string; // Custom toast message
  layout?: "vertical" | "horizontal"; // Layout option for checkboxes
};

export function CheckboxDemo({
  checkboxes = [
    { id: "Default checkbox", label: "Default checkbox" },
    { id: "Checked State", label: "Checked State" },
  ],
  toastMessage = "Checkbox Clicked",
  layout = "vertical",
}: CheckboxDemoProps) {
  const { toast } = useToast();

  function handleCheckboxClick(checkboxId: string) {
    toast({
      title: toastMessage,
      description: `You clicked on the checkbox with id: ${checkboxId}`,
    });
  }

  return (
    <>
      <Toaster />
      <div className={`flex ${layout === "vertical" ? "flex-col space-y-4" : "flex-row space-x-4"}`}>
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id} className="flex items-center space-x-2">
            <Checkbox id={checkbox.id} onClick={() => handleCheckboxClick(checkbox.id)} />
            <label
              htmlFor={checkbox.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {checkbox.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default CheckboxDemo;
