import React, { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent } from "@/registry/default/ui/card";

type CardWithDrawerProps = {
  imageUrl?: string;
  cardTitle?: string;
  userName?: string;
  buttonText?: string;
  buttonLink?: string;
  width?: string;
  height?: string;
};

export function CardWithDrawer({
  imageUrl = "https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg",
  cardTitle = "University of Sydney",
  userName = "Mariana",
  buttonText = "Explore More",
  buttonLink = "https://www.sydney.edu.au/",
  width = "w-1/2",
  height = "h-64",
}: CardWithDrawerProps) {
  const [isHovered, setIsHovered] = useState(false);

  const navigateToLink = () => {
    window.open(buttonLink, "_blank");
  };

  return (
    <Card
      className={`relative ${width} ${height} overflow-hidden shadow-lg rounded-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt="Image Models"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <CardContent
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          transition: "transform 0.3s",
          transform: isHovered ? "translateY(0)" : "translateY(100%)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "1rem",
        }}
      >
        <h3 className="font-bold">{cardTitle}</h3>
        <div className="flex items-center mt-4">
          <img
            src={imageUrl}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>Logged in as {userName}</span>
        </div>
        <Button variant="secondary" className="mt-4 w-full" onClick={navigateToLink}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default CardWithDrawer;
