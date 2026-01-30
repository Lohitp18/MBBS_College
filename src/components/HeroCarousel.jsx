'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroCarousel() {

  const IMAGES = [
    "/images/banner-3.jpg",
    "/images/banner66.jpeg",
    "/images/banner33.jpeg",
  ];

  const images = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index === images.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(images.length - 2);
      }, 700);
    }
    const t = setTimeout(() => setTransition(true), 50);
    return () => clearTimeout(t);
  }, [index, images.length]);

  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
      className="overflow-hidden bg-white"
    >
      <div
        className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative min-w-full h-[260px] sm:h-[360px] md:h-[450px] lg:h-[560px]"
          >
            <Image
              src={src}
              alt={`Slide ${i}`}
              fill
              priority={i === 1}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
