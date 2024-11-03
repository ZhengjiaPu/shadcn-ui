import * as React from "react";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel";

type CarouselDemoProps = {
  items?: React.ReactNode[]; // Dynamically pass items to display in the carousel
  width?: string;
  height?: string;
  cardClass?: string; // Custom class for cards
  itemCount?: number; // Number of items in the carousel
  textColor?: string; // Text color using Tailwind classes
};

export function CarouselDemo({
  items = Array.from({ length: 5 }, (_, i) => <span className="text-4xl font-semibold">{i + 1}</span>),
  width = "w-full",
  height = "max-w-xs",
  cardClass = "flex aspect-square items-center justify-center p-6",
  itemCount = 5,
  textColor = "text-black", // Default text color is black
}: CarouselDemoProps) {
  return (
    <Carousel className={`${width} ${height}`}>
      <CarouselContent>
        {Array.from({ length: itemCount }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className={`${cardClass} ${textColor}`}>
                  {items[index] || <span className="text-4xl font-semibold">{index + 1}</span>}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselDemo;
