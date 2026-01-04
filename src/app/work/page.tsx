'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, TrendingUp, Users, DollarSign, BarChart, Zap, Search, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects as projectData } from '@/lib/project-data';
import type { LucideIcon } from 'lucide-react';

import { Eye, MousePointerClick } from 'lucide-react';

// Icon mapping for metrics
const iconMap: Record<string, LucideIcon> = {
  "Lead Capture": TrendingUp,
  "Timeline": BarChart,
  "ROI": DollarSign,
  "Search Traffic": Users,
  "Ranking": TrendingUp,
  "Leads/Day": Zap,
  "Search Rankings": Search,
  "Lead Quality": Award,
  "Engagement": TrendingUp,
  "Revenue Impact": DollarSign,
  "Google Impressions": Eye,
  "Pageviews": BarChart,
  "Search Impressions": Eye,
  "Search Clicks": MousePointerClick,
};

// Extend projects with icons
const projects = projectData.map(p => ({
  ...p,
  metrics: p.metrics.map(m => ({
    ...m,
    icon: iconMap[m.label] || BarChart
  }))
}));


export default function Work() {
  return (
    <main className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 relative transition-colors duration-300 font-sans" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 transition-colors text-xs font-bold uppercase tracking-[0.2em] group"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-24 mt-8 md:mt-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            Case Studies.
          </h1>
          <p className="text-base md:text-xl max-w-2xl leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            We don&apos;t hide our work behind NDAs. Here are real examples of how we&apos;ve engineered growth for our partners.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-32 pb-16 md:pb-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-16 items-start border-t border-zinc-200 dark:border-white/5 pt-8 md:pt-12">

                {/* Meta Column */}
                <div className="md:col-span-4 space-y-4 md:space-y-8">
                  <div>
                    <p className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-2">{project.industry}</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{project.client}</h2>
                    <h3 className="text-base md:text-xl font-medium transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{project.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-500/10 dark:bg-zinc-500/10 border border-zinc-200 dark:border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="flex items-center gap-2 border-b border-zinc-300 dark:border-white/30 pb-1 hover:border-blue-500 transition-colors text-sm font-medium pt-4" style={{ color: 'var(--text-primary)' }}
                  >
                    Read Full Case Study <ArrowUpRight size={16} />
                  </Link>
                </div>

                {/* Content Column */}
                <div className="md:col-span-8 space-y-8">
                  <Link href={`/work/${project.slug}`} className="block">
                    <div className={`aspect-[16/10] md:aspect-video w-full rounded-xl md:rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors`}>
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.client}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
                      <div className="absolute bottom-0 left-0 p-4 md:p-8">
                        <div className="backdrop-blur-md p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10 max-w-sm" style={{ backgroundColor: 'var(--glass-bg)' }}>
                          <p className="text-xs md:text-sm mb-2 md:mb-4 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{project.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 md:p-6 rounded-xl border border-zinc-200 dark:border-white/5 shadow-sm" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <div className="flex items-center gap-2 mb-2 text-[var(--text-muted)] transition-colors duration-300">
                          <metric.icon size={14} />
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{metric.label}</span>
                        </div>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-900 dark:from-white dark:to-zinc-400 transition-all duration-300">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}