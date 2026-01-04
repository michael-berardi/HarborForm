'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, MapPin, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const credibilityStats = [
  { value: "2018", label: "Founded" },
  { value: "675+", label: "Projects Delivered" },
  { value: "3", label: "States with Real Estate Expertise" },
  { value: "2–4 Weeks", label: "Typical Launch Timeline" }
];

const industries = [
  "Real estate brokerages and developers",
  "Architecture and design firms",
  "Professional services practices",
  "Brands that measure marketing by revenue"
];



export default function About() {
  return (
    <main className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="max-w-5xl mx-auto">

        {/* 1. Hero: The Human Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-32"
        >
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 block">Who We Are</span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            About Liberty Design Studio
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 md:mb-12 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
            Digital infrastructure for real estate and professional services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-4 md:space-y-6 text-sm md:text-lg leading-relaxed font-medium transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              <h2 className="text-xl md:text-3xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>The People Behind the Engine</h2>
              <p className="text-[var(--text-secondary)]">
                Michael Berardi founded Liberty Design Studio in 2018 because traditional agencies were failing to align with business reality. They delivered designs, but not results. We operate differently.
              </p>
              <p className="text-[var(--text-secondary)]">
                Drawing on direct transaction experience in the New York, California, and Texas real estate markets, we build real estate digital infrastructure designed to perform. We engineer the systems that support your pipeline from the first click to the final contract.
              </p>
              <p className="text-[var(--text-secondary)]">
                Liberty Design Studio builds the digital systems that sit underneath your marketing and operations: sites, funnels, and workflows that move leads from interest to signed agreements.
              </p>
            </div>

            {/* Founder Card */}
            <div className="glass-panel p-0 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <div className="aspect-[4/3] relative">
                <Image src="/assets/images/michael-street.jpg" alt="Michael Berardi" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Michael Berardi</h3>
                  <p className="text-sm md:text-base text-blue-400 font-medium italic">Founder & Lead Engineer</p>
                </div>
              </div>
              <div className="p-5 md:p-8">
                <p className="text-sm font-medium mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                  Michael leads strategy and builds the systems that connect traffic, leads, and deals.
                </p>
                <ul className="space-y-4">
                  {[
                    "Founder & Lead Engineer",
                    "Transacted commercial & luxury residential RE in TX, NY, CA",
                    "$50M+ Client Revenue Generated",
                    "675+ digital projects delivered since 2018"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2. By the Numbers */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-32 py-10 md:py-16 border-y border-white/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {credibilityStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{stat.value}</p>
                <p className="text-[9px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-[var(--text-muted)] font-bold leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 3. Who We Work With & Locations */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-24 mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-blue-500 mb-6">
              <Target size={24} />
              <h2 className="text-2xl font-bold uppercase tracking-widest text-sm">Who We Work With</h2>
            </div>
            <p className="text-base md:text-lg font-medium mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              We partner with teams that treat their digital presence as critical infrastructure.
            </p>
            <ul className="space-y-4">
              {industries.map((industry, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-medium transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {industry}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-blue-500 mb-6">
              <MapPin size={24} />
              <h2 className="text-2xl font-bold uppercase tracking-widest text-sm">Where We Work</h2>
            </div>
            <p className="text-base md:text-xl leading-relaxed font-medium mb-4 md:mb-6 text-balance transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              Based in New York City with active market experience in New York, Los Angeles, San Francisco, Austin, and Miami.
            </p>
            <p className="text-[var(--text-muted)] font-medium text-sm md:text-base">
              We also serve international clients. Wherever you are, we work via cloud-based collaboration to ensure fast, transparent execution.
            </p>
          </motion.div>
        </section>



        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-800 text-white p-10 md:p-16 lg:p-20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-blue-500 blur-3xl" />
              <div className="absolute bottom-10 right-32 w-32 h-32 rounded-full bg-purple-500 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Let&apos;s build your growth engine.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                We&apos;ve helped clients achieve 300%+ SEO growth, 3X lead increases, and page-one rankings. Your business could be next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-audit"
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-500/25 hover:scale-[1.02]"
                >
                  Book a Strategy Audit
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors text-white font-medium"
                >
                  See Our Results
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}