'use client';

import Image from 'next/image';

// Commented out array of images for future use
/*
const images = [
    '/army1jaidon.jpeg',
    '/bellajaidon.jpeg',
    '/giojaidon.jpeg',
    '/kidjaidon.jpeg',
    '/lunajaidon.jpeg',
    '/marriedjaidon.jpeg'
];
*/

export default function CyclingAvatar() {
  return (
    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-700 shadow-xl bg-neutral-100 dark:bg-neutral-800">
      <Image
        src="/lunajaidon.jpeg"
        alt="Profile picture"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
} 