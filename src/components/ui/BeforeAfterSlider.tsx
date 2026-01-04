'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider = ({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[var(--border-subtle)]"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After Image (Full width, underneath) */}
      <div className="absolute inset-0">
        <Image src={after} alt={afterLabel} fill className="object-cover" />
        <span className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-xs font-bold rounded">{afterLabel}</span>
      </div>
      
      {/* Before Image (Clipped based on slider) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={before} alt={beforeLabel} fill className="object-cover" />
        <span className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 text-white text-xs font-bold rounded">{beforeLabel}</span>
      </div>
      
      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
          <div className="flex gap-0.5">
            <ChevronLeft size={16} />
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
