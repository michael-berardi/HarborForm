'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Zap, PenTool, Code, BarChart3, CheckCircle2, ArrowRight,
    Globe, Search, Mail, Palette, Target, Clock, TrendingUp
} from 'lucide-react';

// Animation wrapper
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

export default function ServicesPage() {
    // Core engine services (4 cylinders)
    const engineServices = [
        {
            id: "01",
            title: "Strategy",
            icon: <Zap size={24} className="text-amber-500" />,
            description: "We don't guess. We engineer a roadmap based on market data, competitor weakness, and your specific growth levers.",
            features: ["Market Analysis", "Brand Positioning", "User Research", "Conversion Mapping"],
            color: "from-amber-500/20 to-orange-500/20",
            border: "hover:border-amber-500/50"
        },
        {
            id: "02",
            title: "Design",
            icon: <PenTool size={24} className="text-blue-500" />,
            description: "Visuals that command authority. We craft premium aesthetics that separate you from the noise immediately.",
            features: ["UI/UX Design", "Design Systems", "Motion & Interaction", "Visual Identity"],
            color: "from-blue-500/20 to-cyan-500/20",
            border: "hover:border-blue-500/50"
        },
        {
            id: "03",
            title: "Engineering",
            icon: <Code size={24} className="text-emerald-500" />,
            description: "Speed is currency. We build on Next.js for sub-second load times and perfect SEO scores.",
            features: ["Next.js Development", "Headless CMS", "API Integration", "Performance Tuning"],
            color: "from-emerald-500/20 to-teal-500/20",
            border: "hover:border-emerald-500/50"
        },
        {
            id: "04",
            title: "Growth",
            icon: <BarChart3 size={24} className="text-purple-500" />,
            description: "Launch is just day one. We implement analytics loops to turn traffic into pipeline.",
            features: ["SEO Optimization", "Analytics Setup", "A/B Testing", "Lifecycle Marketing"],
            color: "from-purple-500/20 to-pink-500/20",
            border: "hover:border-purple-500/50"
        }
    ];

    // Detailed service offerings
    const detailedServices = [
        {
            icon: Globe,
            title: "Web Design & Development",
            description: "High-performance websites built on Next.js with premium aesthetics, perfect Lighthouse scores, and conversion-focused architecture.",
            deliverables: ["Custom Design", "Responsive Development", "CMS Integration", "Performance Optimization", "Analytics Setup"],
            timeline: "4-8 weeks"
        },
        {
            icon: Search,
            title: "SEO & Content Strategy",
            description: "Programmatic SEO that ranks. We build content architectures that capture high-intent traffic and convert searchers into leads.",
            deliverables: ["Keyword Strategy", "Technical SEO Audit", "Content Architecture", "Link Building", "Rank Tracking"],
            timeline: "Ongoing"
        },
        {
            icon: Mail,
            title: "Email & Lifecycle Marketing",
            description: "Automated sequences that nurture leads from awareness to closed deal. Every email engineered for engagement.",
            deliverables: ["Email Strategy", "Automation Flows", "Template Design", "A/B Testing", "Performance Reports"],
            timeline: "2-4 weeks setup"
        },
        {
            icon: Palette,
            title: "Brand Identity & Visual Systems",
            description: "Distinctive visual identities that communicate authority. From logo to complete design systems.",
            deliverables: ["Logo Design", "Color & Typography", "Brand Guidelines", "Asset Library", "Collateral Templates"],
            timeline: "3-6 weeks"
        },
        {
            icon: Target,
            title: "Lead Generation Infrastructure",
            description: "End-to-end lead capture systems: landing pages, forms, CRM integration, and automated follow-up.",
            deliverables: ["Landing Pages", "Lead Magnets", "CRM Setup", "Automation Workflows", "Conversion Tracking"],
            timeline: "2-4 weeks"
        },
        {
            icon: TrendingUp,
            title: "Social Media Marketing",
            description: "Strategic content that builds authority and drives engagement. From luxury real estate to professional services.",
            deliverables: ["Content Strategy", "Post Creation", "Community Management", "Paid Campaigns", "Analytics & Reporting"],
            timeline: "Ongoing"
        }
    ];

    // Process steps
    const processSteps = [
        {
            number: "01",
            title: "Discovery",
            description: "We audit your current state, understand your goals, and identify the gaps between where you are and where you need to be."
        },
        {
            number: "02",
            title: "Strategy",
            description: "We map your market, study your competitors, and engineer a roadmap with clear milestones and measurable outcomes."
        },
        {
            number: "03",
            title: "Build",
            description: "Our team executes on design and development with weekly check-ins, transparent timelines, and no surprises."
        },
        {
            number: "04",
            title: "Launch",
            description: "We deploy with rigorous QA, set up analytics, and ensure everything runs at peak performance from day one."
        },
        {
            number: "05",
            title: "Grow",
            description: "Post-launch optimization, content strategy, and ongoing support to compound your results over time."
        }
    ];

    // Results metrics
    const results = [
        { value: "+308%", label: "Average SEO Growth" },
        { value: "10+", label: "Page 1 Rankings" },
        { value: "3X", label: "Lead Increase" },
        { value: "4-8", label: "Week Launch Time" }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            {/* Hero */}
            <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 max-w-7xl mx-auto">
                <FadeIn>
                    <div className="max-w-4xl">
                        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--accent-primary)] font-bold mb-4 md:mb-6">
                            What We Build
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.05]">
                            The Digital{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                Engine.
                            </span>
                        </h1>
                        <p className="text-base md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                            We don&apos;t sell &quot;websites.&quot; We build high-performance digital infrastructure that converts traffic into revenue. The Liberty Engine runs on four cylinders, firing in sequence to drive growth.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* The Digital Engine - 4 Cylinders */}
            <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 tracking-tight">
                        Four Cylinders. One Engine.
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {engineServices.map((s, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                className={`group h-full p-8 md:p-10 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-all duration-300 ${s.border}`}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${s.color}`}>
                                        {s.icon}
                                    </div>
                                    <span className="text-5xl font-bold text-[var(--text-muted)] opacity-10 group-hover:opacity-30 transition-opacity">
                                        {s.id}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-3">{s.title}</h3>
                                <p className="text-[var(--text-secondary)] text-base mb-6 leading-relaxed">
                                    {s.description}
                                </p>

                                <ul className="space-y-2">
                                    {s.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-medium text-[var(--text-secondary)]">
                                            <CheckCircle2 size={14} className="text-[var(--accent-primary)]" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Detailed Services */}
            <section className="py-16 md:py-24 px-6 bg-[var(--bg-secondary)]">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="max-w-3xl mb-12 md:mb-16">
                            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--accent-primary)] font-bold mb-3 md:mb-4">
                                Service Offerings
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                                What We Deliver
                            </h2>
                            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                Every engagement is tailored to your specific needs. Here&apos;s what we build.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {detailedServices.map((service, i) => (
                            <FadeIn key={i} delay={i * 0.05}>
                                <div className="group h-full p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <service.icon size={24} className="text-[var(--accent-primary)]" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mb-6">
                                        <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">Deliverables</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.deliverables.map((d, j) => (
                                                <span key={j} className="text-xs px-2 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                                        <Clock size={14} />
                                        <span>{service.timeline}</span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <FadeIn>
                    <div className="max-w-3xl mb-12 md:mb-16">
                        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--accent-primary)] font-bold mb-3 md:mb-4">
                            Our Process
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                            How We Work
                        </h2>
                        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            A proven methodology refined across 675+ projects. No surprises, no scope creep, just results.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {processSteps.map((step, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="relative">
                                {/* Connector line (hidden on mobile, shown on larger screens) */}
                                {i < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[var(--border-default)] to-transparent" />
                                )}

                                <div className="text-5xl font-bold text-[var(--accent-primary)]/20 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Results Banner */}
            <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {results.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-white/70 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Pricing Philosophy */}
            <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <FadeIn>
                    <div className="max-w-3xl mb-12 md:mb-16">
                        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--accent-primary)] font-bold mb-3 md:mb-4">
                            Investment
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                            What to Expect
                        </h2>
                        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            Every project is unique, but here&apos;s a transparent look at our typical engagement ranges.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FadeIn delay={0}>
                        <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-2">Starting at</div>
                            <div className="text-4xl font-bold mb-4">$8,000</div>
                            <h3 className="text-xl font-bold mb-3">Focused Projects</h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-6">
                                Single-page landing sites, brand refreshes, or targeted SEO campaigns with clear scope.
                            </p>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> 2-4 week timeline</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Defined deliverables</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> 30-day support</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
                            <div className="absolute top-4 right-4 text-xs px-2 py-1 bg-white/20 rounded-full">Most Popular</div>
                            <div className="text-sm text-white/70 uppercase tracking-wider mb-2">Starting at</div>
                            <div className="text-4xl font-bold mb-4">$15,000</div>
                            <h3 className="text-xl font-bold mb-3">Full Builds</h3>
                            <p className="text-white/80 text-sm mb-6">
                                Complete website redesigns, multi-page sites, and integrated marketing infrastructure.
                            </p>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white" /> 4-8 week timeline</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white" /> Strategy included</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white" /> 90-day support</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-2">Starting at</div>
                            <div className="text-4xl font-bold mb-4">$3,000<span className="text-lg font-normal">/mo</span></div>
                            <h3 className="text-xl font-bold mb-3">Ongoing Growth</h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-6">
                                Retainer partnerships for continuous SEO, content, social media, and optimization.
                            </p>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Monthly reporting</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Priority support</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Flexible scope</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-800 text-white p-8 md:p-20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                                <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
                                <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-purple-500 blur-3xl" />
                            </div>

                            <div className="relative z-10 max-w-2xl">
                                <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 md:mb-6">
                                    Ready to upgrade your infrastructure?
                                </h2>
                                <p className="text-zinc-400 text-base md:text-xl mb-8 md:mb-10">
                                    Most businesses are running on legacy systems. Let&apos;s build you an engine that actually competes.

                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
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
                                        See Our Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
