import * as React from "react"

export function GalleryDefault() {
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
    <>
      <style>
        {`
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                }
                .gallery-item img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                }
                `}
      </style>
      <div className="gallery">
        {data.map(({ imagelink }, index) => (
          <div key={index} className="gallery-item">
            <img src={imagelink} alt={`Gallery image ${index}`} />
          </div>
        ))}
      </div>
    </>
  )
}
export default GalleryDefault
