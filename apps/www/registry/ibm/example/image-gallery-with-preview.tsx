import React from "react"

export function GalleryWithPreView() {
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

  const [active, setActive] = React.useState(data[0].imagelink)
  const thumbnailCount = data.length // or a fixed number like 5
  const gridTemplateColumns = `repeat(${thumbnailCount}, minmax(0, 1fr))`

  return (
    <div>
      <div>
        <img
          className="h-auto w-full rounded-none object-cover object-center md:h-[480px]"
          src={active}
          alt="Selected"
        />
      </div>
      <div className="grid gap-4 mt-4" style={{ gridTemplateColumns }}>
        {data.map(({ imagelink }, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-none overflow-hidden"
            onClick={() => setActive(imagelink)}
          >
            <img
              src={imagelink}
              className="w-full h-full object-cover rounded-none"
              alt={`Thumbnail ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default GalleryWithPreView
