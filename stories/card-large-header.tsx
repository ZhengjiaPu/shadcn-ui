import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

type LargeHeaderCardProps = {
  headerText?: string;
  description?: string;
  buttonText?: string;
};

export function LargeHeaderCard({
  headerText = "The University of Sydney is ranked 19th in the 2024 QS World University Rankings",
  description = "The University of Sydney was founded on the principle of giving everyone the opportunity to realise their potential through education and still holds that belief just as strongly today.",
  buttonText = "Explore your study options →",
}: LargeHeaderCardProps) {
  return (
    <Card className="max-w-xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden p-2">
      <div>
        <CardHeader className="text-2xl font-bold mb-2">
          {headerText}
        </CardHeader>
        <CardDescription className="text-sm mb-4 ml-6">
          {description}
        </CardDescription>
      </div>
      <div className="text-right ml-6">
        <Button className="mt-2 py-1 px-4">{buttonText}</Button>
      </div>
    </Card>
  );
}

export default LargeHeaderCard;
