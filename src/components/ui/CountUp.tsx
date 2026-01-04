'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export const CountUp = ({ value, suffix = '', className = '' }: { value: string | number, suffix?: string, className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

  // Parse numeric value from string (e.g. "675+" -> 675)
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;

      const controls = animate(0, numericValue, {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easeOut curve
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });

      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return <span ref={ref} className={className}>{displayValue}{suffix}</span>;
};
