'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Target, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import AuditForm from '@/components/AuditForm';

export default function BookAudit() {
    const benefits = [
        { icon: Target, title: 'Find The Problems', desc: 'We pinpoint exactly what is slowing down your growth.' },
        { icon: Zap, title: '3 Quick Wins', desc: 'Actionable opportunities you can implement immediately' },
        { icon: TrendingUp, title: 'Custom Roadmap', desc: 'A clear path from where you are to where you want to be' },
    ];

    const idealFor = [
        'Businesses spending $5K+ monthly on marketing without clarity on ROI',
        'Companies with traffic but low conversion',
        'Teams ready to scale but unsure what to do next',
        'Founders tired of generic advice from agencies',
    ];

    const stats = [
        { value: '675+', label: 'Projects Delivered' },
        { value: '7+', label: 'Years in Business' },
        { value: '100%', label: 'Satisfaction Guarantee' },
    ];

    const faqs = [
        { q: 'What happens on the call?', a: 'We spend 30 minutes understanding your business, analyzing your current digital presence, and identifying the highest-impact opportunities. You leave with clear next steps whether we work together or not.' },
        { q: 'Is this actually free?', a: 'Yes. No credit card required, no obligation, no pushy sales pitch. We believe in delivering value upfront.' },
        { q: 'Who will I speak with?', a: 'You speak directly with our founder, Mike Berardi. No junior account managers or sales reps.' },
        { q: 'What should I prepare?', a: 'Just come ready to discuss your business goals and current challenges. Access to your analytics is helpful but not required.' },
    ];

    return (
        <main className="min-h-screen font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

            {/* Hero Section */}
            <section className="relative pt-20 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden min-h-[calc(100vh-80px)] md:min-h-0 flex flex-col justify-center">
                {/* Background Effects */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-4 md:mb-6 bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            FREE 30-MINUTE SESSION
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 transition-colors duration-300 hidden md:block" style={{ color: 'var(--text-primary)' }}>
                            Your Free Strategy Audit
                        </h1>
                        <h1 className="text-3xl font-bold tracking-tight mb-4 md:hidden" style={{ color: 'var(--text-primary)' }}>
                            Book Your Audit
                        </h1>
                        <p className="text-sm md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 hidden md:block" style={{ color: 'var(--text-secondary)' }}>
                            In 30 minutes, we identify the highest-impact constraints in your digital infrastructure and outline exactly how to fix them. You leave with a clear action plan.
                        </p>
                    </motion.div>

                    {/* Main Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="glass-panel p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-4 mb-8 pb-6 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-blue-400" />
                                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>30 minutes</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-500">
                                        <CheckCircle2 size={16} />
                                        <span className="text-sm font-medium">100% Free</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-500">
                                        <Shield size={16} />
                                        <span className="text-sm font-medium">No Pressure</span>
                                    </div>
                                </div>

                                <AuditForm />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-16 md:py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        What You Get
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {benefits.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-8 rounded-2xl border border-white/5 transition-colors duration-300"
                                style={{ backgroundColor: 'var(--bg-secondary)' }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                                    <item.icon size={24} className="text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 md:py-16 px-6 md:px-12 border-t border-b border-white/5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-3 gap-4 md:gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-2xl md:text-4xl font-bold mb-1 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{stat.value}</p>
                                <p className="text-xs md:text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                This Audit Is For You If...
                            </h2>
                            <ul className="space-y-4">
                                {idealFor.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={20} />
                                        <span className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 md:p-8 rounded-2xl border border-white/5"
                            style={{ backgroundColor: 'var(--bg-secondary)' }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Users size={24} className="text-blue-400" />
                                <h3 className="text-xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Who You Talk To</h3>
                            </div>
                            <p className="text-sm leading-relaxed mb-4 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                                You speak directly with our founder, Mike Berardi. With 7+ years of experience and 675+ projects delivered, he brings senior-level strategy to every conversation.
                            </p>
                            <p className="text-sm italic transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                                No junior account managers. No pushy sales reps. Direct access to expertise.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Geographic Focus */}
            <section className="py-12 md:py-16 px-6 md:px-12 border-t border-white/5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-sm md:text-base transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                        Serving clients in <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>New York, Los Angeles, San Francisco, Austin, Miami</span> and internationally
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Common Questions
                    </motion.h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-xl border border-white/5"
                                style={{ backgroundColor: 'var(--bg-secondary)' }}
                            >
                                <h3 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{faq.q}</h3>
                                <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
