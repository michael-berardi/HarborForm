'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const industries = [
    {
        name: 'Real Estate',
        href: '/industries/real-estate',
        tagline: 'Digital infrastructure for brokerages, developers, and property managers.',
        featuredClient: 'PEP Real Estate',
        featuredResult: 'Page 1 rankings vs LoopNet',
        featuredImage: '/assets/work/pep-real-estate.png',
        capabilities: ['SEO Architecture', 'Lead Automation', 'Listing Optimization'],
    },
    {
        name: 'Professional Services',
        href: '/industries/professional-services',
        tagline: 'Authority positioning for firms where reputation drives revenue.',
        featuredClient: 'Lucero Legal',
        featuredResult: 'Complete brand & digital transformation',
        featuredImage: '/assets/work/lucero-legal.png',
        capabilities: ['Brand Identity', 'Web Development', 'Content Strategy'],
    },
    {
        name: 'SaaS',
        href: '/industries/saas',
        tagline: 'Scalable acquisition funnels that reduce CAC and increase LTV.',
        featuredClient: 'Coming Soon',
        featuredResult: 'Conversion-focused product marketing',
        featuredImage: '/assets/images/insights/saas-growth.jpg',
        capabilities: ['Growth Systems', 'Conversion Optimization', 'Retention'],
    },
    {
        name: 'E-commerce',
        href: '/industries/ecommerce',
        tagline: 'Full-funnel optimization from discovery to repeat purchase.',
        featuredClient: 'Coming Soon',
        featuredResult: 'Revenue-first digital strategy',
        featuredImage: '/assets/images/insights/ecommerce-strategy.jpg',
        capabilities: ['Lifecycle Marketing', 'Cart Recovery', 'Brand Building'],
    },
];

export default function IndustriesPage() {
    return (
        <main className="min-h-screen pt-28 md:pt-32 pb-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
            {/* Hero */}
            <div className="px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 md:mb-32"
                >
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">Industries</span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 max-w-4xl" style={{ color: 'var(--text-primary)' }}>
                        We build for industries where leads become deals.
                    </h1>
                    <p className="text-base md:text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                        Each sector has its own signals, timelines, and conversion patterns. We engineer systems that respect these differences.
                    </p>
                </motion.div>
            </div>

            {/* Industry Sections - Full Width Visual Impact */}
            <div className="space-y-0">
                {industries.map((industry, i) => (
                    <motion.section
                        key={industry.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`relative group ${i % 2 === 0 ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-primary)]'}`}
                    >
                        <Link href={industry.href} className="block">
                            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
                                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                                    {/* Content */}
                                    <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 mb-4 block">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 group-hover:text-blue-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                            {industry.name}
                                        </h2>
                                        <p className="text-base md:text-xl mb-6 md:mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            {industry.tagline}
                                        </p>

                                        {/* Featured Client Result */}
                                        <div className="mb-8 p-6 rounded-2xl border border-white/10" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                                            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Featured Result</p>
                                            <p className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{industry.featuredClient}</p>
                                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{industry.featuredResult}</p>
                                        </div>

                                        {/* Capabilities */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {industry.capabilities.map((cap) => (
                                                <span key={cap} className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10" style={{ color: 'var(--text-muted)' }}>
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center gap-3 text-blue-500 font-bold group-hover:gap-4 transition-all duration-300">
                                            <span>Explore {industry.name}</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                            <Image
                                                src={industry.featuredImage}
                                                alt={industry.name}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500" />
                                        </div>

                                        {/* Decorative element */}
                                        <div className="absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.section>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-32 rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-800 text-white p-10 md:p-16 lg:p-20 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/10" />
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                        <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-blue-500 blur-3xl" />
                        <div className="absolute bottom-10 right-32 w-32 h-32 rounded-full bg-purple-500 blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                            Different industry?
                        </h2>
                        <p className="text-zinc-400 text-base md:text-xl mb-8 md:mb-10">
                            We bring the same infrastructure-first approach to any sector where digital performance matters.
                        </p>
                        <Link
                            href="/book-audit"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-[1.02]"
                        >
                            Book a Strategy Audit
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
