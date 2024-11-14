import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/default/ui/card";

type SuccessPanelProps = {
  title?: string;
  referenceNumber?: string;
  titleColor?: string;
  descriptionColor?: string;
};

export default function SuccessPanel({
  title = "Application Complete",
  referenceNumber = "KDU3957KF",
  titleColor = "#4B5563",
  descriptionColor = "#6B7280"
}: SuccessPanelProps) {
  return (
    <Card className="w-[350px] rounded-md bg-white shadow-md">
      <CardHeader className="rounded-t-md bg-gray-100 p-4">
        <CardTitle className="text-center font-semibold" style={{ color: titleColor }}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="mb-4 text-center" style={{ color: descriptionColor }}>
          Your Reference Number:{" "}
          <span className="font-semibold" style={{ color: descriptionColor }}>
            {referenceNumber}
          </span>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
