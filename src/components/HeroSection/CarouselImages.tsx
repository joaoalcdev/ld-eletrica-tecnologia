"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageHero_01 = require("/public/images/HeroBackground/bg_02.webp");
const ImageHero_02 = require("/public/images/HeroBackground/Imagehero_02.webp");
const ImageHero_03 = require("/public/images/HeroBackground/Imagehero_03.webp");
const ImageHero_04 = require("/public/images/HeroBackground/Imagehero_04.webp");

const CarouselImages: React.FC = () => {
  const images = [ImageHero_01, ImageHero_02, ImageHero_03, ImageHero_04];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the currentImageIndex in a loop
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="autoplay auto-play carousel w-full h-full p-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              index === currentImageIndex ? "visible" : "hidden"
            }`}
            style={{
              opacity: index === currentImageIndex ? 1 : 0, // Apply opacity 1 to the visible image, and 0 to hidden ones
              transition: "opacity 2s ease-in-out", // Add a 1-second ease-in-out transition
            }}
          >
            <Image alt="" src={image} className="w-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default CarouselImages;
