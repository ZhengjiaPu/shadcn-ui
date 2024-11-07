import * as React from "react";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel";

type CarouselOrientationProps = {
  itemCount?: number;
  align?: "start" | "center" | "end";
  orientation?: "horizontal" | "vertical";
  width?: string;
  height?: string;
};

export default function CarouselOrientation({
  itemCount = 5,
  align = "start",
  orientation = "vertical",
  width = "w-full",
  height = "max-w-xs",
}: CarouselOrientationProps) {
  return (
    <Carousel
      opts={{
        align: align,
      }}
      orientation={orientation}
      className={`${width} ${height}`}
    >
      <CarouselContent className={orientation === "vertical" ? "-mt-1 h-[200px]" : ""}>
        {Array.from({ length: itemCount }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
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
