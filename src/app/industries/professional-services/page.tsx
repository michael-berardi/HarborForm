'use client';
import Link from 'next/link';
import { Users, Shield, BarChart, TrendingUp, Briefcase, Clock } from 'lucide-react';

export default function ProfessionalServicesIndustryPage() {
    return (
        <main className="min-h-screen pt-28 md:pt-32 px-6 font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            {/* Hero */}
            <section className="max-w-7xl mx-auto mb-16 md:mb-32 flex flex-col items-start">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Professional Services</span>
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 max-w-4xl transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    Digital Systems for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Professional Service Firms.</span>
                </h1>
                <p className="text-base md:text-xl leading-relaxed max-w-2xl mb-8 md:mb-10 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    Law firms, consulting practices, and advisory businesses need digital infrastructure that reflects their expertise and converts high-value clients.
                </p>
                <Link href="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-full font-bold text-sm md:text-base hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/20">
                    Book a Strategy Audit
                </Link>
            </section>

            {/* Why Professional Services */}
            <section className="max-w-7xl mx-auto mb-16 md:mb-32">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Your Challenges</h2>
                        <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                            Professional service firms compete on trust and expertise. Your website must immediately communicate authority while providing clear paths for high-value prospects to engage.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="p-1 bg-blue-500/10 rounded text-blue-500 h-fit mt-1"><Briefcase size={18} /></div>
                                <div>
                                    <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Referral Dependency</h3>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Over-reliance on word-of-mouth limits growth predictability.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="p-1 bg-blue-500/10 rounded text-blue-500 h-fit mt-1"><Users size={18} /></div>
                                <div>
                                    <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Trust Barriers</h3>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>High-ticket services require exceptional proof of expertise.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="p-1 bg-blue-500/10 rounded text-blue-500 h-fit mt-1"><Clock size={18} /></div>
                                <div>
                                    <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Long Sales Cycles</h3>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Complex buying decisions require nurturing infrastructure.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-2xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Our Solution</h3>
                            <div className="space-y-6">
                                <div className="glass-panel p-6 rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                    <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>1. Authority Positioning</h4>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Websites designed to communicate expertise and build trust immediately.</p>
                                </div>
                                <div className="glass-panel p-6 rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                    <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>2. Lead Qualification</h4>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Intake systems that filter for high-value prospects worth your time.</p>
                                </div>
                                <div className="glass-panel p-6 rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                    <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>3. Content Strategy</h4>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Thought leadership content that drives organic search and referrals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="max-w-7xl mx-auto mb-16 md:mb-32 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>What Clients Report</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                    {[
                        { icon: TrendingUp, stat: "60%", label: "Reduction in unqualified leads" },
                        { icon: Shield, stat: "3x", label: "Increase in consultation bookings" },
                        { icon: BarChart, stat: "Top 5", label: "Local search rankings" }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-white/5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            <item.icon size={32} className="text-blue-500 mx-auto mb-4" />
                            <p className="text-4xl font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{item.stat}</p>
                            <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 text-center border-t border-white/5">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Ready to Scale Your Practice?</h2>
                <Link href="/contact" className="px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-zinc-200 transition-colors inline-block">
                    Book a Strategy Audit
                </Link>
            </section>
        </main>
    );
}
