'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
    images: string[];
    projectTitle: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, projectTitle }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (images.length === 0) {
        return (
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">No images available</span>
            </div>
        );
    }

    const handlePrevious = () => {
        setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative group">
                <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                    <Image
                        src={images[selectedIndex]}
                        alt={`${projectTitle} screenshot ${selectedIndex + 1}`}
                        fill
                        className="object-contain"
                        priority={selectedIndex === 0}
                    />
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} className="text-gray-800" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} className="text-gray-800" />
                        </button>
                    </>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {selectedIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="relative">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all ${index === selectedIndex
                                    ? 'ring-4 ring-accent shadow-lg scale-105'
                                    : 'ring-2 ring-gray-200 hover:ring-gray-300 opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <div className="w-24 h-16 relative bg-gray-100">
                                    <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
