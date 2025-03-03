'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    '/army1jaidon.jpeg',
    '/bellajaidon.jpeg',
    '/giojaidon.jpeg',
    '/armyjaidon.jpeg',
    '/kidjaidon.jpeg',
    '/lunajaidon.jpeg',
    '/salutejaidon.jpeg',
    '/marriedjaidon.jpeg',
];

export default function CyclingAvatar() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = () => {
    goToNextImage();
  };

  return (
    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-neutral-200 shadow-xl bg-neutral-100">
      <Image
        src={images[currentImageIndex]}
        alt="Profile picture"
        fill
        className={`object-cover transition-opacity duration-600 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        onError={handleImageError}
      />
    </div>
  );
} 