'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useUI } from '@/context/UIContext';

export default function PhilosophyModal() {
  const { isPhilosophyOpen, closePhilosophy } = useUI();

  return (
    <AnimatePresence>
      {isPhilosophyOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhilosophy}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              layoutId="philosophy-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="pointer-events-auto w-full max-w-2xl bg-zinc-900/90 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden"
            >
              {/* Liquid Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <button
                onClick={closePhilosophy}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white">
                  Why Choose Liberty?
                </h2>

                <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-medium">
                  <p>
                    Liberty Design Studio was created because too many businesses were misled by agencies that promised results but never delivered.
                  </p>
                  <p>
                    We saw it happen over and over. Agencies would sell impressive-looking websites filled with buzzwords but with no real impact. Businesses were left with sites that didn&apos;t convert and SEO that failed to drive traffic.
                  </p>
                  <div className="pl-6 border-l-2 border-blue-500 my-8">
                    <p className="italic text-white">
                      &quot;If it does not move the needle, we do not do it.&quot;
                    </p>
                  </div>
                  <p>
                    We believe in transparency, strategy, and real results. Our clients are partners who trust us to grow their businesses.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden border border-white/20">
                    <Image src="/assets/images/michael-street.jpg" alt="Michael Berardi" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Michael Berardi</p>
                    <p className="text-zinc-500 text-sm">Founder, Liberty Design Studio</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
