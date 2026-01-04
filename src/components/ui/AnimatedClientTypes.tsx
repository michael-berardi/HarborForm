'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const clientTypes = [
    'Real Estate Leaders.',
    'SaaS Founders.',
    'E-Commerce Brands.',
    'Law Firms.',
    'Luxury Brokerages.',
    'Property Managers.',
    'Professional Services.',
    'Those Who Refuse to Settle.'
];

export function AnimatedClientTypes() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (isComplete) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = prev + 1;
                if (next >= clientTypes.length - 1) {
                    // Stop on the last item
                    setTimeout(() => setIsComplete(true), 100);
                    return clientTypes.length - 1;
                }
                return next;
            });
        }, 2200);

        return () => clearInterval(interval);
    }, [isComplete]);

    return (
        <span className="relative inline-block min-w-[280px] sm:min-w-[340px] md:min-w-[480px] lg:min-w-[580px]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    className="text-transparent bg-clip-text inline-block will-change-transform"
                    style={{
                        backgroundImage: isComplete
                            ? 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)'
                            : 'linear-gradient(135deg, var(--accent-primary), var(--hero-gradient-text))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                    initial={{
                        opacity: 0,
                        y: 40,
                        filter: 'blur(12px)',
                        scale: 0.9,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        y: -40,
                        filter: 'blur(12px)',
                        scale: 0.9,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
                    }}
                >
                    {/* Shimmer overlay on final state */}
                    {isComplete && (
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                                duration: 1.5,
                                delay: 0.3,
                                ease: 'easeInOut',
                            }}
                            style={{
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                                maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                            }}
                        />
                    )}

                    <span className={`relative ${isComplete ? 'animate-pulse-subtle' : ''}`}>
                        for {clientTypes[currentIndex]}
                    </span>
                </motion.span>
            </AnimatePresence>

            {/* Decorative underline that appears on final state */}
            {isComplete && (
                <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'center' }}
                />
            )}
        </span>
    );
}
