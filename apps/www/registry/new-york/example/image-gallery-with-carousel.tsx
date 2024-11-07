import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/registry/new-york/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/new-york/ui/carousel"

export function GalleryWithCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const data = [
    {
      imagelink:
        "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/BondiBeach.jpg?raw=true",
    },
    {
      imagelink:
        "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/Chinatown.jpg?raw=true",
    },
    {
      imagelink:
        "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/SydneyOperaHouse.png?raw=true",
    },
    {
      imagelink:
        "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/SydneyTower.jpg?raw=true",
    },
    {
      imagelink:
        "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/USYD.jpeg?raw=true",
    },
  ]

  return (
    <Carousel
      className="h-auto w-full max-w-2xl "
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((imagelink, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={imagelink.imagelink}
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
  )
}
export default GalleryWithCarousel
