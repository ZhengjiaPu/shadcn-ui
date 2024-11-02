import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

type CardWithPictureProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
  buttonText?: string;
};

export function CardWithPicture({
  imageUrl = "https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg",
  title = "Contact us",
  description = "Submit a partnership enquiry, you can also make a donation by contacting the University revenue team.",
  buttonText = "Explore more →",
}: CardWithPictureProps) {
  return (
    <Card className="max-w-md bg-white rounded-md shadow-sm overflow-hidden">
      <img
        src={imageUrl}
        alt="University Building"
        className="w-80 h-60 object-cover object-center"
      />
      <CardHeader className="bg-gray-100 p-3">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <CardDescription className="text-sm mb-3">{description}</CardDescription>
        <Button className="w-full py-4 px-4">{buttonText}</Button>
      </CardContent>
    </Card>
  );
}

export default CardWithPicture;
