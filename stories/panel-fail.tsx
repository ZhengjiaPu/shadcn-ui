import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/default/ui/card";

type FailPanelProps = {
  title?: string;
  message?: string;
  buttonText?: string;
  titleColor?: string;
  messageColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
};

export default function FailPanel({
  title = "Application Failed",
  message = "Please try again",
  buttonText = "Back",
  titleColor = "#FFFFFF",
  messageColor = "#000000",
  buttonColor = "#000000",
  buttonTextColor = "#FFFFFF"
}: FailPanelProps) {
  return (
    <Card className="w-[350px] rounded-md bg-white shadow-md">
      <CardHeader className="rounded-t-md p-4 font-semibold" style={{ backgroundColor: titleColor }}>
        <CardTitle className="text-center font-bold text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-center" style={{ color: messageColor }}>
          {message}
        </CardDescription>
        <div className="mt-4 text-center">
          <Button style={{ backgroundColor: buttonColor, color: buttonTextColor }}>
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
