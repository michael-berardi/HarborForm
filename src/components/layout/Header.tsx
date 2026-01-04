'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Floating CTA Logic
  const [isTimeReady, setIsTimeReady] = useState(false);
  const [isOtherButtonVisible, setIsOtherButtonVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = 300; // Must scroll 300px before CTA can appear

  // 15s Timer
  useEffect(() => {
    const timer = setTimeout(() => setIsTimeReady(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll direction and position tracking
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    const handleScroll = () => {
      const currentScrollY = mainElement.scrollTop;
      const delta = currentScrollY - lastScrollY.current;

      // Track if at top (within 200px)
      setIsAtTop(currentScrollY < 200);

      // Track if scrolled enough
      setHasScrolledEnough(currentScrollY > scrollThreshold);

      // Only update direction for meaningful scroll movement
      if (Math.abs(delta) > 5) {
        setScrollDirection(delta > 0 ? 'down' : 'up');
      }

      lastScrollY.current = currentScrollY;
    };

    mainElement.addEventListener('scroll', handleScroll, { passive: true });
    return () => mainElement.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for other CTA buttons
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const isVisible = entries.some((entry) => entry.isIntersecting);
          setIsOtherButtonVisible(isVisible);
        },
        { threshold: 0, rootMargin: "0px 0px 200px 0px" } // Detect 200px before it enters viewport from bottom
      );

      // Target all Book Audit links that aren't the floating one specificially
      const buttons = document.querySelectorAll('a[href="/book-audit"]:not([data-floating-cta])');
      buttons.forEach((b) => observer.observe(b));

      return () => observer.disconnect();
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Smart visibility: show when scrolling up, hide when at top/scrolling down/other CTAs visible
  // Also hide on book-audit page since user is already there
  const isOnBookingPage = pathname === '/book-audit';
  const shouldShow = isTimeReady
    && !isOtherButtonVisible
    && !isAtTop
    && hasScrolledEnough
    && scrollDirection === 'up'
    && !isOnBookingPage;

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Philosophy', href: '/philosophy' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
  ];


  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-none"
      >
        <Link
          href="/"
          className="pointer-events-auto relative group"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          {/* Consistent Glass Button - Matching Nav */}
          <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 backdrop-blur-xl rounded-full shadow-2xl glass-panel transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-7 h-7 md:w-8 md:h-8">
              <Image
                src="/assets/images/logo-white.png"
                alt="Liberty Design Studio"
                fill
                className="object-contain transition-transform duration-500 group-hover:rotate-12"
                style={{ filter: 'var(--logo-filter, none)' }}
                priority
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="pointer-events-auto backdrop-blur-xl rounded-full p-2 shadow-2xl flex items-center justify-center glass-panel hover:scale-105 transition-transform duration-300">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 pointer-events-auto backdrop-blur-xl rounded-full p-1.5 pl-8 shadow-2xl glass-panel">
            <div className="flex gap-8 mr-6 text-sm font-semibold tracking-tight">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group transition-all duration-300 py-1"
                  style={{ color: isActive(link.href) ? 'var(--nav-text-active)' : 'var(--nav-text)' }}
                >
                  <span className="relative z-10 group-hover:text-blue-400 transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="absolute inset-0 -inset-x-2 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-lg blur-sm transition-all duration-300 scale-90 group-hover:scale-100" />
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              ))}
            </div>
            <Link
              href="/book-audit"
              className="relative group px-6 py-2.5 rounded-full text-sm font-bold transition-all"
            >
              {/* Glow ring */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 blur-md opacity-50 group-hover:opacity-75 group-hover:blur-lg transition-all duration-300 animate-pulse" />
              {/* Button background */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300" />
              {/* Text */}
              <span className="relative z-10 text-white">Book Audit</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-3 pointer-events-auto">
          <div className="backdrop-blur-xl rounded-full p-1.5 shadow-2xl glass-panel">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="backdrop-blur-xl rounded-full p-3 shadow-2xl glass-panel text-[var(--text-primary)] hover:scale-105 active:scale-95 transition-all"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Background with gradient */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 flex flex-col"
              style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              {/* Decorative gradient blobs */}
              <div className="absolute top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-40 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />

              {/* Header */}
              <div className="relative z-10 flex justify-between items-center p-6">
                <Link href="/" className="relative group">
                  <div className="absolute -inset-2 backdrop-blur-2xl rounded-2xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 shadow-2xl" />
                  <div className="relative w-10 h-10">
                    <Image
                      src="/assets/images/logo-white.png"
                      alt="Liberty Design Studio"
                      fill
                      className="object-contain"
                      style={{ filter: 'var(--logo-filter, none)' }}
                    />
                  </div>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="backdrop-blur-3xl rounded-full p-3 shadow-2xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 text-[var(--text-primary)] hover:scale-105 active:scale-95 transition-all"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="relative z-10 flex-1 flex flex-col justify-center px-8">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center gap-4 py-4 px-4 -mx-4 rounded-2xl transition-all duration-300"
                        style={{
                          backgroundColor: isActive(link.href) ? 'var(--bg-tertiary)' : 'transparent',
                        }}
                      >
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300"
                          style={{
                            backgroundColor: isActive(link.href) ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                            color: isActive(link.href) ? 'white' : 'var(--text-muted)'
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="text-3xl font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-300"
                          style={{ color: isActive(link.href) ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                        >
                          {link.name}
                        </span>
                        {isActive(link.href) && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="relative z-10 p-6 space-y-6">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-6 text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <a href="mailto:mike@libertydesign.studio" className="hover:text-blue-400 transition-colors">
                    mike@libertydesign.studio
                  </a>
                  <span>•</span>
                  <a href="tel:9414791845" className="hover:text-blue-400 transition-colors">
                    941-479-1845
                  </a>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="/book-audit"
                    className="block w-full text-center py-5 rounded-2xl font-bold text-lg relative overflow-hidden group"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  >
                    <span className="relative z-10 text-white">Book Strategy Audit</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>

                {/* Trust Badge */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center text-xs font-medium"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Since 2018 • 675+ Projects • Satisfaction Guaranteed
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Floating CTA Bar - Safari-style pill with spring animation */}
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              mass: 0.8
            }}
            className="md:hidden fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            style={{ paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}
          >
            <motion.div
              className="pointer-events-auto"
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(59, 130, 246, 0.2)",
                  "0 4px 30px rgba(59, 130, 246, 0.35)",
                  "0 4px 20px rgba(59, 130, 246, 0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ borderRadius: "9999px" }}
            >
              <Link
                href="/book-audit"
                data-floating-cta="true"
                className="flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md bg-[#1c1c1e]/90 border border-white/10 ring-1 ring-black/20"
              >
                <span className="text-[13px] font-medium text-white/90 tracking-wide pl-1">
                  Book Strategy Audit
                </span>
                <motion.div
                  className="w-7 h-7 rounded-full bg-[#2c2c2e] flex items-center justify-center"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}