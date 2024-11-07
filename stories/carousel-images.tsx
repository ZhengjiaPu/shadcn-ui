import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel";

type CarouselImageProps = {
  images?: string[];
  delay?: number;
  width?: string;
  height?: string;
};

export function CarouselImage({
  images = [
    "/examples/Chinatown.jpg",
    "/examples/BondiBeach.jpg",
    "/examples/SydneyOperaHouse.png",
    "/examples/SydneyTower.jpg",
    "/examples/USYD.jpeg",
  ],
  delay = 4000,
  width = "w-full",
  height = "max-w-xs",
}: CarouselImageProps) {
  const plugin = React.useRef(
    Autoplay({ delay, stopOnInteraction: true })
  );

  return (
    <Carousel
      className={`${width} ${height}`}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="max-w-full max-h-full"
                  />
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

export default CarouselImage;
