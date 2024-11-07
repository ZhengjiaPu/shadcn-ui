import * as React from "react";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel";

type CarouselSizeProps = {
  itemCount?: number;
  align?: "start" | "center" | "end";
  width?: string;
  height?: string;
};

export default function CarouselSize({
  itemCount = 5,
  align = "start",
  width = "w-full",
  height = "max-w-sm",
}: CarouselSizeProps) {
  return (
    <Carousel
      opts={{
        align: align,
      }}
      className={`${width} ${height}`}
    >
      <CarouselContent>
        {Array.from({ length: itemCount }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
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
