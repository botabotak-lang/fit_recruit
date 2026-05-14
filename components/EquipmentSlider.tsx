"use client";

import Image from "next/image";
import { useState } from "react";

interface SlideImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface EquipmentSliderProps {
  images: SlideImage[];
  title: string;
}

export function EquipmentSlider({ images, title }: EquipmentSliderProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const img = images[current];

  return (
    <div className="relative h-56 w-full overflow-hidden bg-slate-50">
      <Image
        key={img.src}
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="h-56 w-full object-contain transition-opacity duration-300"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label={`${title}：前の画像`}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white hover:bg-black/60"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label={`${title}：次の画像`}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white hover:bg-black/60"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5" aria-hidden="true">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${i === current ? "bg-orange-500" : "bg-white/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
