'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, CheckCircle2, Zap, Layers, Search } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PhilosophyPage() {
  const approachRef = useRef(null);
  const isApproachInView = useInView(approachRef, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState(-1);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (isApproachInView && !hasInteracted) {
      const startDelay = 1000;
      const stepDuration = 2500;
      const timers: NodeJS.Timeout[] = [];

      // Sequence for 4 cards
      [0, 1, 2, 3].forEach((index) => {
        const timer = setTimeout(() => {
          if (!hasInteracted) {
            setActiveCard(index);
          }
        }, startDelay + (index * stepDuration));
        timers.push(timer);
      });

      const endTimer = setTimeout(() => {
        if (!hasInteracted) {
          setActiveCard(-1);
        }
      }, startDelay + (4 * stepDuration));
      timers.push(endTimer);

      return () => timers.forEach(clearTimeout);
    }
  }, [isApproachInView, hasInteracted]);

  const handleMouseEnter = (index: number) => {
    setHasInteracted(true);
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(-1);
  };

  return (
    <main className="min-h-screen transition-colors duration-300 font-sans selection:bg-blue-500/30" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* 1. Hero: "Built for outcomes." */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 pt-28 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        {/* Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.02] pointer-events-none z-0">
          <Image
            src="/assets/images/logo-white.png"
            alt=""
            fill
            className="object-contain"
            style={{ filter: 'var(--logo-filter, none)' }}
          />
        </div>

        <motion.div
          className="z-10 text-center max-w-4xl relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Subtle Glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-3xl -z-10 rounded-full opacity-50 dark:opacity-10 pointer-events-none" />

          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">The Manifesto</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            Built for outcomes.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-400 dark:from-zinc-100 dark:to-zinc-500">Not optics.</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium transition-colors duration-300 space-y-4 md:space-y-6" style={{ color: 'var(--text-secondary)' }}>
            <p>
              Most agencies are focused on looking impressive. Beautiful presentations. Clever slogans. Award entries. None of that pays your bills.
            </p>
            <p>
              Your website and your marketing exist for one reason. To create new business. To move real deals forward. To make your operations more efficient and predictable.
            </p>
            <p className="text-[var(--text-primary)] font-bold">
              Our work is built around that simple idea.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Section: The Problem */}
      <section className="py-24 px-6 border-y border-white/5 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>The Problem With The Industry</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              <p>
                A lot of digital work is decoration. Smooth animations that slow the page. Pages that rank for irrelevant phrases. Reports filled with vanity metrics that sound good and change nothing.
              </p>
              <p>
                Owners do not need more noise. They need systems that capture demand, route it correctly, and support actual transactions.
              </p>
              <p className="text-[var(--text-primary)] font-medium italic border-l-2 border-blue-500 pl-4">
                We treat marketing as infrastructure. If it does not help the business run better, it does not belong.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Section: Our Principle */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12 shadow-2xl dark:shadow-none"
          >
            {/* Tech Grid Background */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            {/* Status Bar */}
            <div className="relative z-10 flex items-center justify-between mb-12 border-b border-zinc-100 dark:border-white/5 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">System Core</span>
              </div>
              <div className="text-xs font-mono text-zinc-400">LIB-SYS-01</div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 font-mono">Our Principle</h2>
              <blockquote className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-zinc-900 dark:text-white leading-tight">
                &quot;Everything must earn its place.&quot;
              </blockquote>
              <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-6 md:mb-8 max-w-3xl mx-auto">
                Every page. Every form. Every campaign. Every automation. It must have a clear job and measurable impact. If it cannot be tied back to revenue or clear operational value, we remove it.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                <Shield size={16} className="text-[var(--text-muted)]" />
                <span className="text-sm font-medium text-[var(--text-muted)]">Zero Fluff Policy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Section: What We Believe */}
      <section className="py-24 px-6 border-y border-white/5 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center text-[var(--text-primary)]">What We Believe Good Digital Work Should Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "It should be fast.",
              "It should be simple to use.",
              "It should integrate with your operations.",
              "It should help you see where revenue really comes from.",
              "It should scale without collapsing when volume increases."
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[var(--bg-primary)]"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-medium text-[var(--text-primary)]">{item}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[var(--bg-primary)] opacity-50"
            >
              <span className="font-medium text-[var(--text-secondary)] italic">Anything else is noise.</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Section: The Liberty Approach (Animated) */}
      <section className="py-32 px-6 max-w-7xl mx-auto" ref={approachRef}>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>The Liberty Approach</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {[
            { title: "Operations-first", icon: Layers, desc: "We do not see your website as a brochure. It is a system inside your business. It is connected to your CRM, your calendar, your email, and your team’s daily work. We design with that reality in mind." },
            { title: "Clarity over cleverness", icon: Search, desc: "People should immediately understand who you are, what you do, and how to move forward. Clear language beats clever language every time." },
            { title: "Speed as a requirement", icon: Zap, desc: "Slow systems lose money. We design for fast load times and fast projects. Most work is shipped in weeks. Improvement then continues from real data." },
            { title: "Partnership & Long-Term Thinking", icon: Shield, desc: "We build systems designed to survive market cycles and staff turnover. We stay close to the numbers after launch, ensuring your infrastructure improves over time rather than going stale." },
          ].map((std, i) => (
            <div
              key={i}
              className={`glass-panel p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-default ${i === activeCard
                ? 'border-blue-500 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] bg-blue-500/5 translate-y-[-4px]'
                : 'border-white/10'
                }`}
              style={{ backgroundColor: i === activeCard ? undefined : 'var(--glass-bg)' }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 transition-colors duration-500 ${i === activeCard ? 'bg-blue-500 text-white' : 'bg-blue-500/10 text-blue-500'}`}>
                <std.icon size={20} />
              </div>
              <h3 className={`text-xl font-bold mb-3 md:mb-4 transition-colors duration-300 ${i === activeCard ? 'text-blue-400' : ''}`} style={{ color: i === activeCard ? undefined : 'var(--text-primary)' }}>{std.title}</h3>
              <p className="leading-relaxed text-sm font-medium transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{std.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Section: What Our Clients Come To Us For */}
      <section className="py-32 px-6 border-t border-white/5 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12 text-[var(--text-primary)]">What Our Clients Come To Us For</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              "They want fewer moving parts, not more.",
              "They want qualified leads instead of random traffic.",
              "They want a site that functions like an engine, not a brochure.",
              "They want someone who understands deals, not just design."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-lg font-medium text-[var(--text-primary)]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <p className="text-xl font-bold text-[var(--text-primary)]">They care about performance. So do we.</p>
          </div>
        </div>
      </section>

      {/* 7. Final Call-to-Action */}
      <section className="py-32 px-6 text-center border-t border-white/5 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Ready To Take This Seriously?</h2>
          <p className="text-base md:text-xl mb-8 md:mb-12 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            If you are done with decorative marketing and are ready to treat your digital presence as core infrastructure, we can help.
          </p>

          <Link
            href="/book-audit"
            className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-transform hover:scale-105 shadow-xl inline-block"
          >
            Book a Strategy Audit
          </Link>
        </div>
      </section>

    </main>
  );
}
