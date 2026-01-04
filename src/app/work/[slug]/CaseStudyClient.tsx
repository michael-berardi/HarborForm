'use client';

import { caseStudies } from '@/lib/case-studies';
import { projects } from '@/lib/project-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, TrendingUp, Clock, Tag, ChevronRight } from 'lucide-react';

interface CaseStudyClientProps {
    slug: string;
}

export default function CaseStudyClient({ slug }: CaseStudyClientProps) {
    const caseStudy = caseStudies.find((cs) => cs.slug === slug);
    const project = projects.find((p) => p.slug === slug);

    if (!caseStudy || !project) {
        notFound();
    }

    // Get other case studies for navigation
    const otherCaseStudies = caseStudies.filter((cs) => cs.slug !== slug).slice(0, 2);

    return (
        <main className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-6xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-8 group transition-colors"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Case Studies
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column - Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-6">
                                {caseStudy.industry}
                            </span>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]" style={{ color: 'var(--text-primary)' }}>
                                {caseStudy.client}
                            </h1>

                            <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: 'var(--text-secondary)' }}>
                                {caseStudy.headline}
                            </p>

                            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                                {caseStudy.description}
                            </p>

                            {/* Quick Stats Row */}
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-blue-500" />
                                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{caseStudy.timeline}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Tag size={16} className="text-blue-500" />
                                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{caseStudy.services.slice(0, 2).join(' • ')}</span>
                                </div>
                            </div>

                            {/* Services Tags */}
                            <div className="flex flex-wrap gap-2">
                                {caseStudy.services.map((service) => (
                                    <span
                                        key={service}
                                        className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-colors"
                                        style={{
                                            backgroundColor: 'var(--bg-secondary)',
                                            borderColor: 'var(--border-subtle)',
                                            color: 'var(--text-muted)'
                                        }}
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            <div className={`aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} border border-white/10 shadow-2xl`}>
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={caseStudy.client}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Section */}
            <section className="py-16 md:py-24 px-6 md:px-12 border-t border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            The Results
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Verified metrics from real analytics data
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {caseStudy.metrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative p-8 md:p-10 rounded-2xl border overflow-hidden group"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderColor: 'var(--border-subtle)'
                                }}
                            >
                                {/* Gradient accent */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />

                                <div className="flex items-center gap-2 mb-4">
                                    <TrendingUp size={18} className="text-blue-500" />
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
                                        {metric.label}
                                    </span>
                                </div>

                                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                                    {metric.value}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                                The Challenge
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                                Where They Started
                            </h2>
                            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {caseStudy.challenge}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: 'var(--text-muted)' }}>
                                Pain Points
                            </span>
                            <div className="space-y-4">
                                {caseStudy.beforePoints.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-xl border"
                                        style={{
                                            backgroundColor: 'var(--bg-secondary)',
                                            borderColor: 'var(--border-subtle)'
                                        }}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-red-500 text-xs">✕</span>
                                        </div>
                                        <p className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>{point}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                            Our Approach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            The Strategic Execution
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            A systematic approach to solving complex digital challenges
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {caseStudy.steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative p-8 rounded-2xl border group hover:border-blue-500/30 transition-colors"
                                style={{
                                    backgroundColor: 'var(--bg-primary)',
                                    borderColor: 'var(--border-subtle)'
                                }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-500 font-bold">{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                            {step.title}
                                        </h3>
                                        <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Results Section */}
            <section className="py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                            Deep Dive
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            The Complete Picture
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            A detailed breakdown of every key metric and what it means
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {caseStudy.detailedResults.map((result, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 rounded-xl border"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderColor: 'var(--border-subtle)'
                                }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                        <Check size={16} className="text-green-500" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                        {result.label}
                                    </span>
                                </div>
                                <p className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                                    {result.value}
                                </p>
                                {result.explanation && (
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        {result.explanation}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                            Ready for Results Like These?
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Every engagement starts with a conversation about your goals. No templates, no generic solutions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-500 text-white font-bold text-sm uppercase tracking-wider hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
                        >
                            Start a Conversation
                            <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* More Case Studies */}
            {otherCaseStudies.length > 0 && (
                <section className="py-16 md:py-24 px-6 md:px-12 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center justify-between mb-12"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                More Case Studies
                            </h2>
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline"
                            >
                                View All <ChevronRight size={16} />
                            </Link>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {otherCaseStudies.map((cs, i) => {
                                const proj = projects.find((p) => p.slug === cs.slug);
                                return (
                                    <motion.div
                                        key={cs.slug}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        <Link href={`/work/${cs.slug}`} className="group block">
                                            <div className={`aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${proj?.color || 'from-zinc-800 to-zinc-900'} border border-white/5 mb-4 relative`}>
                                                {proj?.image && (
                                                    <Image
                                                        src={proj.image}
                                                        alt={cs.client}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-2 block">
                                                {cs.industry}
                                            </span>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                                                {cs.client}
                                            </h3>
                                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                                {cs.headline}
                                            </p>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
