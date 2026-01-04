'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import type { LocationData } from '@/lib/location-data';
import { ArrowRight, CheckCircle2, MapPin, AlertCircle, Sparkles } from 'lucide-react';

interface LocationPageClientProps {
    location: LocationData;
}

export default function LocationPageClient({ location }: LocationPageClientProps) {
    // Fetch related case studies
    const relatedCaseStudies = location.relatedProjects
        .map(projectSlug => getCaseStudyBySlug(projectSlug))
        .filter((cs): cs is NonNullable<typeof cs> => cs !== undefined);

    return (
        <main className="min-h-screen pt-28 md:pt-32 pb-16 md:pb-24 font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

            {/* Hero Section */}
            <section className="px-4 sm:px-6 mb-16 md:mb-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                                <MapPin size={16} className="text-blue-500" />
                                <span className="text-blue-500 font-bold text-sm uppercase tracking-wider">{location.city}, {location.state}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                            <span className="text-[var(--text-primary)]">{location.title.split(' ').slice(0, -3).join(' ')} </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-cyan-400">
                                {location.title.split(' ').slice(-3).join(' ')}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-4">
                            {location.introText}
                        </p>

                        <p className="text-sm md:text-base font-semibold text-blue-500 mb-8">
                            {location.marketHighlight}
                        </p>

                        <Link
                            href="/book-audit"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-400/30 hover:scale-[1.02]"
                        >
                            Book a {location.city} Strategy Audit <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Local Stats Bar */}
            <section className="px-4 sm:px-6 mb-16 md:mb-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-4 md:gap-8 py-8 md:py-12 border-y border-[var(--border-subtle)]"
                    >
                        {location.localStats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">{stat.value}</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] font-bold">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Challenges & Solutions Grid */}
            <section className="px-4 sm:px-6 mb-16 md:mb-24 py-16 md:py-24 bg-[var(--bg-secondary)]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">

                        {/* Challenges Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[var(--text-primary)]">
                                {location.city} Market Challenges
                            </h2>
                            <p className="text-[var(--text-secondary)] text-base md:text-lg mb-8">
                                {location.description}
                            </p>

                            <div className="space-y-6">
                                {location.challenges.map((challenge, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="p-2 bg-red-500/10 rounded-lg text-red-500 h-fit mt-0.5 shrink-0">
                                            <AlertCircle size={18} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[var(--text-primary)] mb-1">{challenge.title}</h3>
                                            <p className="text-sm text-[var(--text-secondary)]">{challenge.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Solutions Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-default)] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-blue-500 mb-6">
                                    <Sparkles size={20} />
                                    <span className="text-sm font-bold uppercase tracking-wider">Our Approach</span>
                                </div>

                                <div className="space-y-6">
                                    {location.solutions.map((solution, i) => (
                                        <div key={i} className="p-4 md:p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                                            <h4 className="font-bold text-[var(--text-primary)] mb-2">{solution.title}</h4>
                                            <p className="text-sm text-[var(--text-secondary)]">{solution.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="px-4 sm:px-6 mb-16 md:mb-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-[var(--text-primary)]">
                            Built for the {location.city} Market
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {location.whyUs.map((item, index) => (
                                <div key={index} className="flex gap-4 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)]">
                                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold mb-2 text-[var(--text-primary)]">{item.title}</h3>
                                        <p className="text-[var(--text-secondary)] text-sm md:text-base">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Keywords */}
                        <div className="mt-8 flex gap-3 flex-wrap">
                            {location.keywords.map((keyword) => (
                                <span key={keyword} className="px-4 py-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] text-sm text-[var(--text-secondary)] font-medium">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Work Section */}
            {relatedCaseStudies.length > 0 && (
                <section className="px-4 sm:px-6 mb-16 md:mb-24">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-[var(--text-primary)]">
                                Our Work in {location.city} & Beyond
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {relatedCaseStudies.map((study) => (
                                    <Link
                                        key={study.slug}
                                        href={`/work/${study.slug}`}
                                        className="group block relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-default)] hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10"
                                    >
                                        <Image
                                            src={study.heroImage}
                                            alt={study.client}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                            <div className="text-xs font-bold text-white/70 mb-2 uppercase tracking-wider">
                                                {study.industry}
                                            </div>
                                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                                                {study.client}
                                            </h3>
                                            <div className="flex items-center text-blue-400 font-semibold text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                                View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="px-4 sm:px-6 pb-8">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-800 text-white p-8 md:p-12 lg:p-16 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                            <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-blue-500 blur-3xl" />
                            <div className="absolute bottom-10 right-32 w-32 h-32 rounded-full bg-purple-500 blur-3xl" />
                        </div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                                Ready to dominate the {location.city} market?
                            </h2>
                            <p className="text-zinc-400 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
                                Let&apos;s build the digital infrastructure your business deserves.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/book-audit"
                                    className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl shadow-blue-500/25 hover:scale-[1.02]"
                                >
                                    Book a Strategy Audit <ArrowRight size={20} className="ml-2" />
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
                </div>
            </section>
        </main>
    );
}
