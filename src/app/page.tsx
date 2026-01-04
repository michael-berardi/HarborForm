'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, BarChart3, Layout, Zap, Trophy, Target, Rocket, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import type { LucideIcon } from 'lucide-react';
import { projects } from '../lib/project-data';
import Footer from '@/components/layout/Footer';



// --- Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const ServiceCard = ({ icon: Icon, title, desc }: ServiceCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-zinc-200/80 dark:border-white/5 transition-all duration-500 group hover:border-blue-500/30 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] h-full"
  >
    <div className="w-14 h-14 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-400/20 transition-all duration-300 shadow-sm">
      <Icon size={26} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-bold mb-3 tracking-tight transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{title}</h3>
    <p className="text-[var(--text-secondary)] leading-relaxed text-sm font-medium opacity-90">{desc}</p>
  </motion.div>
);

// Client types for rotating text
const clientTypes = [
  'Real Estate Leaders.',
  'SaaS Founders.',
  'Ecom Brands.',
  'Law Firms.',
  'Luxury Brokerages.',
  'Property Managers.',
  'You.'
];

// Desktop Case Study Carousel with scroll and arrows
interface Project {
  slug: string;
  client: string;
  industry: string;
  image: string;
  metrics: { value: string; label: string }[];
}

const DesktopCaseStudyCarousel = ({ projects }: { projects: Project[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 500; // Card width + gap

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="hidden md:block relative -mx-6 md:-mx-12 overflow-hidden">
      {/* Scrollable Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-16 py-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {projects.map((work) => (
          <motion.div
            key={work.slug}
            className="w-[460px] flex-shrink-0 snap-center"
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Link href={`/work/${work.slug}`} className="block group h-full">
              <div className="rounded-2xl border border-zinc-200/80 dark:border-white/5 hover:border-blue-500/40 transition-all duration-300 h-full overflow-hidden relative shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 bg-[var(--bg-primary)]">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.client}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] mb-2 block">{work.industry}</span>
                    <h4 className="text-xl font-bold text-white">{work.client}</h4>
                  </div>
                </div>

                {/* Lower Content */}
                <div className="p-5 bg-[var(--bg-primary)]">
                  <div className="flex gap-5 mb-3">
                    {work.metrics.slice(0, 3).map((m, idx) => (
                      <div key={idx}>
                        <p className="text-base font-bold gradient-text-blue">{m.value}</p>
                        <p className="text-[9px] text-[var(--text-secondary)] uppercase font-bold">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-blue-500 text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Gradient Fades with Navigation Arrows */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10 flex items-center justify-start pl-4">
        <button
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center text-[var(--text-primary)] hover:bg-white/20 dark:hover:bg-white/10 hover:scale-110 transition-all shadow-lg"
          aria-label="Previous case study"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10 flex items-center justify-end pr-4">
        <button
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center text-[var(--text-primary)] hover:bg-white/20 dark:hover:bg-white/10 hover:scale-110 transition-all shadow-lg"
          aria-label="Next case study"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// Process Steps Horizontal Carousel for "How We Work"
const processSteps = [
  {
    num: "01",
    title: "Discovery & Audit",
    headline: "We analyze before we build.",
    desc: "Every engagement starts with a comprehensive audit of your current systems. We analyze your pipeline, identify where leads are falling through the cracks, and document the friction points that are costing you revenue. No assumptions. Just data.",
    details: ["Technical infrastructure review", "Lead flow analysis", "Competitive positioning audit", "Conversion bottleneck identification"]
  },
  {
    num: "02",
    title: "Custom Proposal",
    headline: "Clear scope. Clear cost. No surprises.",
    desc: "You receive a strategic plan built specifically for your situation. We define exactly what we will deliver, when we will deliver it, and what it will cost. Every line item is justified. Every deliverable is measurable.",
    details: ["Defined scope and deliverables", "Fixed timeline and milestones", "Transparent pricing", "Success metrics defined upfront"]
  },
  {
    num: "03",
    title: "Rapid Execution",
    headline: "We move fast without creating chaos.",
    desc: "Our typical launch window is weeks, not months. We maintain velocity through direct communication, focused sprints, and zero meetings that could be emails. You always know where we are in the process.",
    details: ["Weekly progress updates", "Direct access to your team", "Iterative development sprints", "Launch-ready in weeks"]
  },
  {
    num: "04",
    title: "Ongoing Optimization",
    headline: "Launch is just the start.",
    desc: "Systems improve through iteration. We monitor real performance data, identify what's working and what isn't, and continuously refine. Your digital infrastructure gets smarter over time.",
    details: ["Performance monitoring", "Data-driven refinements", "Conversion rate optimization", "Quarterly strategy reviews"]
  }
];

const ProcessCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const scrollToStep = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setActiveStep(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeStep && newIndex >= 0 && newIndex < processSteps.length) {
      setActiveStep(newIndex);
    }
  };

  return (
    <div className="hidden md:block relative">
      {/* Progress Bar */}
      <div className="flex justify-center gap-3 mb-8">
        {processSteps.map((step, i) => (
          <button
            key={i}
            onClick={() => scrollToStep(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${activeStep === i
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
              : 'bg-[var(--bg-primary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
          >
            <span className="text-sm font-bold">{step.num}</span>
            <span className="text-sm font-medium hidden lg:inline">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex" style={{ width: `${processSteps.length * 100}%` }}>
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 snap-center px-4"
              style={{ width: `${100 / processSteps.length}%` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-3xl mx-auto"
              >
                <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-blue-500/30 transition-all duration-500 group">
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <span className="text-2xl font-bold text-white">{step.num}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">{step.title}</h3>
                  <p className="text-blue-500 font-semibold text-lg mb-4">{step.headline}</p>
                  <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8">{step.desc}</p>

                  {/* Detail Points */}
                  <ul className="grid grid-cols-2 gap-3">
                    {step.details.map((detail, j) => (
                      <li key={j} className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500/50 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="w-12 h-12 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] hover:border-blue-500/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous step"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scrollToStep(Math.min(processSteps.length - 1, activeStep + 1))}
          disabled={activeStep === processSteps.length - 1}
          className="w-12 h-12 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] hover:border-blue-500/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next step"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// --- Main Page ---

export default function Home() {
  const containerRef = useRef(null);

  const [animationComplete, setAnimationComplete] = useState(false);

  // Mouse position for interactive shader effect
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Rotating text state
  const [textIndex, setTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [randomizedProjects, setRandomizedProjects] = useState(projects);

  useEffect(() => {
    // Randomize projects on mount, filtering out hidden ones
    const visibleProjects = projects.filter((p) => !('hidden' in p && p.hidden));
    setRandomizedProjects([...visibleProjects].sort(() => 0.5 - Math.random()));
  }, []);

  // Check if animation was shown in the last hour (only after hydration)
  useEffect(() => {
    const ANIMATION_KEY = 'hero_animation_shown';
    const ONE_HOUR = 60 * 60 * 1000; // 1 hour in ms

    const lastShown = localStorage.getItem(ANIMATION_KEY);
    const now = Date.now();

    if (lastShown && now - parseInt(lastShown, 10) < ONE_HOUR) {
      // Skip animation - go straight to final state
      setTextIndex(clientTypes.length - 1);
      setAnimationComplete(true);
    }

    // Mark as hydrated after checking localStorage
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    // Stop cycling when we reach the last item
    if (textIndex >= clientTypes.length - 1) {
      // Mark animation as complete and save timestamp
      if (!animationComplete && typeof window !== 'undefined') {
        setAnimationComplete(true);
        localStorage.setItem('hero_animation_shown', Date.now().toString());
      }
      return;
    }

    // Dynamic timing: accelerate through middle, slow for finale
    // Creates a "swoopy" rhythm that builds anticipation
    const timings = [
      2200,  // Real Estate Leaders - opening beat
      1400,  // SaaS Founders - picking up speed
      1100,  // Ecom Brands - faster  
      900,   // Law Firms - fastest
      1000,  // Luxury Brokerages - slight slowdown
      1200,  // Property Managers - building anticipation
      // "You." stays on screen (no timer needed)
    ];
    const displayDuration = timings[textIndex] || 1200;

    const timer = setTimeout(() => {
      setIsFading(true);
      // Smoother transition for fluid feel
      setTimeout(() => {
        const nextIndex = Math.min(textIndex + 1, clientTypes.length - 1);
        setTextIndex(nextIndex);
        setIsFading(false);
      }, 350);
    }, displayDuration);

    return () => clearTimeout(timer);
  }, [textIndex, animationComplete]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  return (
    <main ref={containerRef} className="h-[100dvh] w-full overflow-y-scroll md:snap-y md:snap-mandatory font-sans transition-colors duration-300 scroll-smooth" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen md:min-h-[100dvh] md:h-[100dvh] md:snap-start flex flex-col items-center justify-between overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
        onMouseMove={handleMouseMove}
      >
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none hero-grain">
          <div className="absolute inset-0 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }} />

          {/* Animated Gradient Orb 1 - top left */}
          <motion.div
            className="hero-orb hero-orb-1 w-[60%] h-[60%] -top-[15%] -left-[15%]"
            animate={{
              x: (mousePos.x - 0.5) * 40,
              y: (mousePos.y - 0.5) * 40,
            }}
            transition={{ type: 'spring', stiffness: 30, damping: 20 }}
          />

          {/* Animated Gradient Orb 2 - bottom right */}
          <motion.div
            className="hero-orb hero-orb-2 w-[55%] h-[55%] -bottom-[20%] -right-[10%]"
            animate={{
              x: (mousePos.x - 0.5) * -30,
              y: (mousePos.y - 0.5) * -30,
            }}
            transition={{ type: 'spring', stiffness: 25, damping: 18 }}
          />

          {/* Third subtle orb - center accent */}
          <motion.div
            className="absolute w-[30%] h-[30%] top-1/3 left-1/2 -translate-x-1/2 rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
              filter: 'blur(100px)'
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />

          {/* Radial fade to background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg-primary)_75%)] transition-colors duration-300" />

          {/* Watermark Logo - subtle parallax on hover */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.03]"
            animate={{
              x: `calc(-50% + ${(mousePos.x - 0.5) * -20}px)`,
              y: `calc(-50% + ${(mousePos.y - 0.5) * -20}px)`,
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 25 }}
          >
            <Image
              src="/assets/images/logo-white.png"
              alt=""
              fill
              className="object-contain"
              style={{ filter: 'var(--logo-filter, none)' }}
            />
          </motion.div>
        </div>

        {/* Accent line at bottom */}
        <div className="hero-accent-line" />

        {/* Content Layer */}
        <div className="z-10 text-center max-w-5xl mt-4 md:mt-10 relative mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.05] transition-colors duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                High-Performance Digital Infrastructure
              </motion.span>
              <br className="hidden md:block" />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="text-transparent bg-clip-text inline-block min-w-[280px] sm:min-w-[340px] md:min-w-[480px] lg:min-w-[580px]"
                  style={{
                    backgroundImage: (!isHydrated || textIndex >= clientTypes.length - 1)
                      ? 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)'
                      : 'linear-gradient(135deg, var(--accent-primary), var(--hero-gradient-text))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: isFading ? 0 : 1,
                    transform: isFading
                      ? 'translateY(12px) scale(0.96) rotateX(8deg)'
                      : 'translateY(0) scale(1) rotateX(0deg)',
                    transition: `
                      opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      background-image 0.6s cubic-bezier(0.4, 0, 0.2, 1)
                    `,
                    transformOrigin: 'center bottom',
                  }}
                >
                  for {isHydrated ? clientTypes[textIndex] : clientTypes[clientTypes.length - 1]}
                </span>
              </motion.span>
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed text-balance font-medium px-4 sm:px-0">
              Stop losing leads to outdated tech. We build fast, stable websites, SEO systems, and lead generation infrastructure that convert traffic into closed deals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center relative z-20">
              <Link
                href="/book-audit"
                className={`relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full font-semibold text-base transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-400/30 hover:scale-[1.02] pointer-events-auto ${animationComplete ? 'cta-glow' : ''}`}
              >
                Book a Strategy Audit
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 bg-[var(--bg-tertiary)] backdrop-blur-md border border-[var(--border-default)] rounded-full font-semibold transition-all pointer-events-auto hover:bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)]/30 hover:scale-[1.02]"
                style={{ color: 'var(--text-primary)' }}
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Geographic Focus */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 md:mt-14 text-xs md:text-sm text-[var(--text-muted)] font-medium"
          >
            Serving clients in New York, Los Angeles, San Francisco, Austin, Miami & internationally
          </motion.p>

          {/* Tech Stack Social Proof Bar */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 md:gap-10">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--text-muted)]">
              Built with
            </span>
            <div className="flex items-center gap-6 md:gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <svg className="h-5 md:h-6 w-auto" viewBox="0 0 180 180" fill="currentColor" style={{ color: 'var(--text-secondary)' }}>
                <title>Next.js</title>
                <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="white" /></mask>
                <g mask="url(#mask0)"><circle cx="90" cy="90" r="90" fill="currentColor" /><path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z" fill="var(--bg-primary)" /><rect x="115" y="54" width="12" height="72" fill="var(--bg-primary)" /></g>
              </svg>
              <svg className="h-5 md:h-6 w-auto" viewBox="0 0 283 64" fill="currentColor" style={{ color: 'var(--text-secondary)' }}>
                <title>Vercel</title>
                <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.09 3.5V0H82.13v34.25c0 5.63 2.15 10.75 5.89 14.5 3.73 3.75 8.75 5.75 14.5 5.75h5.5v-8.5h-5.5c-3.04 0-5.82-1.24-7.83-3.25a10.963 10.963 0 01-3.06-7.75zM0 32l28.5-28.5v57L0 32zm166.58-16.5a18.98 18.98 0 00-8.13 1.85 18.5 18.5 0 00-6.55 5.15c-1.72 2.13-2.95 4.68-3.59 7.45a20.94 20.94 0 00-.28 7.58 18.5 18.5 0 003.1 7.55c1.8 2.35 4.13 4.24 6.8 5.5a18.98 18.98 0 0016.26 0 18.5 18.5 0 006.8-5.5 18.5 18.5 0 003.1-7.55 20.94 20.94 0 00-.28-7.58 18.5 18.5 0 00-3.59-7.45 18.5 18.5 0 00-6.55-5.15 18.98 18.98 0 00-8.13-1.85h1.04zm0 28c-5.14 0-9.5-4.25-9.5-9.75s4.36-9.75 9.5-9.75 9.5 4.25 9.5 9.75-4.36 9.75-9.5 9.75zm92.42-18.5c-2.15-5.75-7.5-9.5-13.75-9.5-8.25 0-15 6.75-15 15s6.75 15 15 15c6.25 0 11.6-3.75 13.75-9.5h-11.5v-11h11.5zm35.5-9.5h-11v34h11v-34zm-5.5 45c-3.04 0-5.5-2.46-5.5-5.5s2.46-5.5 5.5-5.5 5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z" fill="currentColor" />
              </svg>
              <svg className="h-5 md:h-6 w-auto" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-secondary)' }}>
                <title>React</title>
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.44-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <svg className="h-5 md:h-6 w-auto" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-secondary)' }}>
                <title>TypeScript</title>
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
            </div>
          </div>

          <div className="hidden md:grid mt-10 md:mt-16 pb-[env(safe-area-inset-bottom)] grid-cols-3 gap-2 md:gap-8 max-w-4xl mx-auto border-t border-[var(--border-subtle)] pt-8" role="region" aria-label="Company Statistics">
            {[
              { label: 'Founded', value: '2018' },
              { label: 'Projects Delivered', value: '675+' },
              { label: 'Typical Launch', value: '1–3 Weeks' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20, scale: 0.9 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + (i * 0.15),
                  ease: [0.2, 0.65, 0.3, 0.9] // "Morphing magic" bezier
                }}
              >
                <div className="text-xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-1 font-heading">
                  {stat.value}
                </div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-secondary)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED WORK (CAROUSEL) */}
      <section className="min-h-[100dvh] md:h-[100dvh] md:snap-start flex flex-col justify-center py-20 px-0 transition-colors duration-300 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 px-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-3">Real Results</h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">Case Studies</h2>
              </div>
              <Link href="/work" className="hidden md:flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all">
                View All <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>

          {/* Mobile Vertical Stack (Top 3) */}
          <div className="md:hidden flex flex-col gap-8 px-2 pb-12">
            {randomizedProjects.slice(0, 3).map((work, i) => (
              <motion.div
                key={work.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/work/${work.slug}`} className="block group">
                  <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-zinc-900 border border-zinc-200 dark:border-white/10 group-hover:border-blue-500/40 transition-all duration-500 relative shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                    {work.image && (
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    {/* Tag */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold tracking-wider uppercase text-white">
                        {work.industry}
                      </span>
                    </div>
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {work.client}
                      </h3>
                      <p className="text-sm text-zinc-300 line-clamp-2 mb-4 font-medium">
                        {work.desc}
                      </p>
                      {/* Metrics Row */}
                      <div className="flex gap-4 mb-4">
                        {work.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx}>
                            <p className="text-lg font-bold text-white">{m.value}</p>
                            <p className="text-[10px] text-white/60 uppercase font-bold">{m.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-blue-400 text-xs uppercase tracking-widest font-bold">
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* View All Button */}
            <Link href="/work" className="w-full py-4 rounded-xl border border-zinc-200 dark:border-white/10 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors" style={{ color: 'var(--text-primary)' }}>
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Desktop Carousel */}
          <DesktopCaseStudyCarousel projects={randomizedProjects} />
        </div>
      </section>

      {/* 3. CAPABILITIES SECTION */}
      <section className="min-h-0 md:min-h-[100dvh] md:h-[100dvh] md:snap-start flex flex-col justify-center py-16 md:py-20 px-6 md:px-12 transition-colors duration-300 bg-[var(--bg-primary)]" id="services">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20 pt-12 md:pt-0">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Capabilities.</h2>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] font-medium">We build the digital infrastructure that supports growth.</p>
            </div>
          </FadeIn>

          {/* Capabilities Grid - Mobile 2-col / Desktop 3-col */}
          <div className="grid grid-cols-2 md:hidden gap-3 px-0">
            {[
              { icon: Layout, title: "Web Design", desc: "Websites built as core business infrastructure, designed around conversion." },
              { icon: Target, title: "SEO Strategy", desc: "Technical SEO and content strategy for durable organic traffic." },
              { icon: Zap, title: "Lead Acquisition", desc: "Paid and organic funnels built for intent and minimal friction." },
              { icon: Trophy, title: "Brand Authority", desc: "Clear positioning and identity systems that build trust." },
              { icon: BarChart3, title: "Revenue Tracking", desc: "Analytics that tie marketing activity to booked revenue." },
              { icon: Rocket, title: "Automation", desc: "Workflows that remove manual steps across operations." }
            ].map((service, i) => (
              <div key={i} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-zinc-200/80 dark:border-white/5">
                <div className="w-10 h-10 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400">
                  <service.icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-sm font-bold mb-1.5 text-[var(--text-primary)]">{service.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <ServiceCard
                icon={Layout}
                title="Web Design & Build"
                desc="Websites built as core business infrastructure. Fast, easy to navigate, and designed around conversion paths that match how buyers actually make decisions."
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ServiceCard
                icon={Target}
                title="Search Engine Strategy"
                desc="Technical SEO, structured architecture, and content strategy aligned from day one. The objective is durable organic traffic that produces inquiries, not vanity rankings."
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <ServiceCard
                icon={Zap}
                title="Lead Acquisition"
                desc="Paid and organic funnels built for intent. We attract people who are ready to move forward and route them into clear next steps with minimal friction."
              />
            </FadeIn>
            <FadeIn delay={0.4}>
              <ServiceCard
                icon={Trophy}
                title="Brand Authority"
                desc="Clear positioning and message discipline. Identity systems that communicate competence, trust, and professional credibility without unnecessary decoration."
              />
            </FadeIn>
            <FadeIn delay={0.5}>
              <ServiceCard
                icon={BarChart3}
                title="Revenue Tracking"
                desc="Analytics that tie marketing activity to booked revenue. Source tracking, attribution clarity, and reporting built around decisions, not dashboards for their own sake."
              />
            </FadeIn>
            <FadeIn delay={0.6}>
              <ServiceCard
                icon={Rocket}
                title="Automation"
                desc="Workflows that remove manual steps across marketing and operations. The goal is fewer breaks in the process and more consistent execution."
              />
            </FadeIn>
          </div>
        </div>
      </section >

      {/* 3.5 VALUE PROPOSITION (New Section) */}
      <section className="py-16 md:py-0 min-h-0 md:min-h-[60vh] md:h-[100dvh] md:snap-start flex flex-col justify-center px-6 md:px-12 transition-colors duration-300 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto w-full">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--text-primary)]">Tangible Success.</h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  We don&apos;t just deliver code. We deliver leverage. Our systems are designed to foster growth, delight your team, and increase revenue.
                </p>
                <Link href="/work" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  See the proof <ArrowRight size={18} />
                </Link>
              </div>
              <div className="space-y-4 md:space-y-6">
                {[
                  { title: "Revenue Velocity", desc: "Systems that capture demand rather than just displaying information." },
                  { title: "Operational Delight", desc: "Tools your team will actually enjoy using, reducing administrative friction." },
                  { title: "Market Authority", desc: "Positioning that makes you the obvious choice in your vertical." },
                  { title: "Professional Growth", desc: "Infrastructure that scales with you as you expand into new markets." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)]">{item.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. STRATEGIC INSIGHTS */}
      <section className="min-h-0 md:min-h-[100dvh] md:h-[100dvh] md:snap-start flex flex-col justify-center py-16 md:py-20 px-6 md:px-12 relative z-10 transition-colors duration-300 bg-[var(--bg-primary)]" id="insights">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <div className="mb-10 md:mb-16 pt-12 md:pt-0">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Strategic Insights.</h2>
              <p className="text-[var(--text-secondary)] font-medium text-lg max-w-2xl">
                Studio philosophy and high-leverage digital resources.
              </p>
            </div>
          </FadeIn>

          {/* Mobile Insights - Vertical Stack */}
          <div className="md:hidden flex flex-col gap-4 mb-6">
            {[
              { tag: "Strategy", title: "The Operations-First Approach to Web Design", desc: "Why treating your website like a system, not a project, leads to better outcomes.", image: "/assets/insights/thumbnail-operations-first-approach-web-design.png" },
              { tag: "Performance", title: "Why Vanity Metrics Waste Budget", desc: "The hidden cost of optimizing for the wrong numbers.", image: "/assets/insights/thumbnail-vanity-metrics-killing-marketing-budget.png" },
              { tag: "Brand Identity", title: "Trust Signals in the Digital Age", desc: "How to communicate credibility before a user reads a single word.", image: "/assets/insights/thumbnail-trust-signals-digital-age.png" }
            ].map((insight, i) => (
              <Link key={i} href="/insights" className="block group">
                <div className="flex gap-4 p-4 rounded-xl border border-zinc-200 dark:border-white/5 bg-[var(--bg-secondary)] hover:border-blue-500/30 transition-all">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
                    <Image src={insight.image} alt={insight.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-blue-500 text-[10px] font-bold tracking-wider uppercase mb-1 block">{insight.tag}</span>
                    <h3 className="text-sm font-bold mb-1 text-[var(--text-primary)] line-clamp-2 group-hover:text-blue-500 transition-colors">{insight.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2">{insight.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop Insights Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 mb-16">
            {[
              { tag: "Strategy", title: "The Operations-First Approach to Web Design", desc: "Why treating your website like a system, not a project, leads to better outcomes.", link: "/insights/operations-first-approach", image: "/assets/insights/thumbnail-operations-first-approach-web-design.png" },
              { tag: "Performance Marketing", title: "Why Vanity Metrics Waste Budget", desc: "The hidden cost of optimizing for the wrong numbers.", link: "/insights/vanity-metrics", image: "/assets/insights/thumbnail-vanity-metrics-killing-marketing-budget.png" },
              { tag: "SEO", title: "Programmatic SEO in Competitive Local Markets", desc: "How we helped a real estate firm dominate local search.", link: "/insights/programmatic-seo-nyc", image: "/assets/insights/thumbnail-programmatic-seo-nyc-lead-generation.png" }
            ].map((insight, i) => (
              <FadeIn key={i} delay={i * 0.1} className="min-w-[85vw] md:min-w-0 snap-center flex-shrink-0">
                <Link href="/insights" className="block group h-full">
                  <div className="rounded-2xl h-full border border-zinc-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 bg-[var(--bg-primary)] overflow-hidden">
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <Image src={insight.image} alt={insight.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 sm:p-8">
                      <span className="text-[10px] font-bold text-blue-500/80 dark:text-blue-400/80 uppercase tracking-[0.2em] mb-4 block">{insight.tag}</span>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{insight.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{insight.desc}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-4 md:mt-0">
            <Link href="/insights" className="text-blue-500 hover:text-blue-400 font-bold flex items-center justify-center gap-2 transition-colors">
              Read All Insights <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section >

      {/* 5. HOW WE WORK - Horizontal Swipe Carousel */}
      <section className="min-h-0 md:min-h-[100dvh] md:h-[100dvh] md:snap-start flex flex-col justify-center py-16 md:py-20 px-6 md:px-12 transition-colors duration-300 overflow-hidden bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16 pt-12 md:pt-0">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>How We Work</h2>
              <p className="text-[var(--text-secondary)] text-lg font-medium max-w-2xl mx-auto">A structured process built around clarity, speed, and measurable results.</p>
            </div>
          </FadeIn>

          {/* Mobile Vertical Steps */}
          <div className="md:hidden space-y-4">
            {[
              { step: "01", title: "Discovery & Audit", desc: "Analyze your digital footprint, market position, and operational bottlenecks." },
              { step: "02", title: "Strategic Architecture", desc: "Map user journey, technical requirements, and conversion paths." },
              { step: "03", title: "Design & Development", desc: "Build high-performance assets. Fast, responsive, rigorously tested." },
              { step: "04", title: "Launch & Optimization", desc: "Deploy with zero downtime and begin gathering data to refine." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <span className="text-sm font-bold text-white">{item.step}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-base font-bold mb-1 text-[var(--text-primary)]">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Horizontal Swipe Carousel */}
          <ProcessCarousel />
        </div>
      </section >

      {/* 6. RESULTS STRIP */}
      <section className="py-12 md:py-0 md:min-h-[50vh] md:h-[50vh] md:snap-start flex items-center px-6 md:px-12 transition-colors duration-300 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {[
              { metric: "10+", label: "Market Leaders", context: "Clients dominant in their niche" },
              { metric: "$50M+", label: "Transaction Volume", context: "Powered by our infrastructure" },
              { metric: "350%", label: "Avg. ROI", context: "First year performance" }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-center py-6 first:pt-0 md:py-0 md:px-4">
                <p className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-1">{card.metric}</p>
                <p className="text-sm md:text-lg font-bold text-zinc-200">{card.label}</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 mt-1">{card.context}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="min-h-0 md:min-h-[100dvh] md:h-[100dvh] md:snap-start flex flex-col justify-center py-16 md:py-20 px-6 md:px-12 transition-colors duration-300 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16 pt-12 md:pt-0">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Common Questions</h2>
              <p className="text-[var(--text-secondary)] text-base md:text-lg font-medium">Answers to common client questions.</p>
            </div>
          </FadeIn>

          {/* Mobile Vertical Scroll FAQ */}
          <div className="md:hidden overflow-y-auto pr-2 space-y-3">
            {[
              {
                q: "What does a project typically cost?",
                a: "Our engagements typically start at $5k for core web builds and scale based on complexity, integrations, and ongoing growth requirements. We provide transparent, fixed-pricing proposals."
              },
              {
                q: "How long does the process take?",
                a: "A typical website overhaul takes 4-8 weeks from kick-off to launch. Complex applications or enterprise systems may take longer. We operate on strict timelines with weekly updates."
              },
              {
                q: "Do you work with non-real estate clients?",
                a: "Yes. While real estate is our deepest vertical, we work with professional services, SaaS, and e-commerce clients. The common thread: businesses that measure marketing by revenue, not vanity metrics."
              }
            ].map((faq, i) => (
              <details key={i} className="group p-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] open:border-blue-500/30">
                <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-base transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                  {faq.q}
                  <span className="block group-open:hidden">+</span>
                  <span className="hidden group-open:block">-</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* Desktop Grid FAQ */}
          <div className="hidden md:block space-y-4">
            {[
              {
                q: "What does a project typically cost?",
                a: "Our engagements typically start at $5k for core web builds and scale based on complexity, integrations, and ongoing growth requirements. We provide transparent, fixed-pricing proposals."
              },
              {
                q: "How long does the process take?",
                a: "A typical website overhaul takes 4-8 weeks from kick-off to launch. Complex applications or enterprise systems may take longer. We operate on strict timelines with weekly updates."
              },
              {
                q: "Do you work with non-real estate clients?",
                a: "Yes. While real estate is our deepest vertical, we work with professional services, SaaS, and e-commerce clients. The common thread: businesses that measure marketing by revenue, not vanity metrics."
              }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <details className="group p-6 rounded-2xl border border-[var(--border-default)] transition-all duration-300 hover:border-blue-500/20 open:bg-[var(--bg-tertiary)] open:border-blue-500/20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-lg transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    {faq.q}
                    <span className="block group-open:hidden text-2xl font-light text-blue-500">+</span>
                    <span className="hidden group-open:block text-2xl font-light text-blue-500">−</span>
                  </summary>
                  <p className="mt-4 text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
                    {faq.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section >


      {/* 8. CTA / BOOKING SECTION */}
      <section className="min-h-0 md:h-[100dvh] md:snap-start flex flex-col items-center justify-between py-16 md:py-20 px-6 md:px-12 relative overflow-hidden transition-colors duration-300 bg-[var(--bg-primary)]">
        {/* Background FX */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-tight" style={{ color: 'var(--text-primary)' }}>
                Ready to Build<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500">Something Real?</span>
              </h2>
              <p className="text-lg md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                In 30 minutes, we identify your constraints. You leave with a plan.
              </p>
            </div>

            {/* Feature Cards - "What You'll Get" */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
              {[
                { title: "The Audit", desc: "Full review of your current digital infrastructure and performance gaps.", icon: Target },
                { title: "The Strategy", desc: "Three actionable recommendations you can implement immediately.", icon: Layout },
                { title: "The Roadmap", desc: "A clear path to revenue growth, whether you hire us or not.", icon: Rocket }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-blue-500" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <Link
                href="/book-audit"
                className="group relative px-8 py-5 md:px-12 md:py-6 bg-blue-600 text-white rounded-full font-bold text-lg md:text-2xl hover:bg-blue-500 transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book Your Free Audit <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <p className="text-sm uppercase tracking-widest text-[var(--text-muted)] font-bold">Limited Availability for Q1</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="md:snap-start">
        <Footer />
      </div>
    </main >
  );
}