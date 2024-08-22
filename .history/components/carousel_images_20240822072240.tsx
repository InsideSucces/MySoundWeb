import React, { useState } from 'react';
import { Card, Image } from "@nextui-org/react";
import { motion } from 'framer-motion';



export default function AnimatedCarousel({ images }: { images: string[] }) {
    return (
        <div className="bg-transparent py-11 shadow-md">
            <div className="flex select-none gap-3 overflow-hidden">
                {Array(2)
                    .fill(null)
                    .map((_, index) => (
                        <div
                            key={index}
                            aria-hidden={index === 1}
                            className="flex min-w-full shrink-0 animate-scroll items-center justify-around gap-10"
                        >
                            {[...images, ...images].map((src, index) => (
                                <div className="mx-3" key={index}>
                                    <img
                                        className="h-auto w-auto object-contain rounded-lg"
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        width={315}
                                        height={344}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}