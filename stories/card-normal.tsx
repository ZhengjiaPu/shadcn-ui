import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

type CardWithNormalProps = {
  title?: string;
  description?: string;
  buttonText?: string;
};

export function CardWithNormal({
  title = "Contact us",
  description = "Submit a partnership enquiry or make a donation by contacting the University revenue team.",
  buttonText = "Explore more →",
}: CardWithNormalProps) {
  return (
    <Card className="w-[350px] bg-white rounded-lg shadow-sm overflow-hidden">
      <CardHeader className="bg-gray-100 p-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-sm mb-4">{description}</CardDescription>
        <Button className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-700 text-white">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default CardWithNormal;
