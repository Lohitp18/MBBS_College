'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function HeroCarousel() {
    const IMAGES = [
        "/images/banner-3.jpg",
        "/images/banner-2.jpg",
        
        "/images/banner-5.jpeg",
        "/images/banner-7.jpeg",

        // "/images/hero-section2.png",
        // "/images/hero-section3.png"
    ];

    const images = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];

    const [index, setIndex] = useState(1);
    const [transition, setTransition] = useState(true);
    const slideRef = useRef();

    const nextSlide = () => setIndex((prev) => prev + 1);

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
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
        <>
            <div className="overflow-hidden shadow">
                <div
                    ref={slideRef}
                    className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="min-w-full relative sm:h-80 md:h-[400px] lg:h-[500px]" // 👈 reduce height here
                        >

                            <Image
                                src={src}
                                alt={`Slide ${i}`}

                                className="object-cover"
                                width={1920}
                                height={800}
                                priority={i === 1} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}