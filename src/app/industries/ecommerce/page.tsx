'use client';
import Link from 'next/link';
import { ShoppingCart, Package, CreditCard, TrendingUp, BarChart, RefreshCw } from 'lucide-react';

export default function EcommerceIndustryPage() {
    return (
        <main className="min-h-screen pt-28 md:pt-32 px-6 font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            {/* Hero */}
            <section className="max-w-7xl mx-auto mb-16 md:mb-32 flex flex-col items-start">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">E-commerce</span>
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 max-w-4xl transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    Revenue Infrastructure for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Online Retail.</span>
                </h1>
                <p className="text-base md:text-xl leading-relaxed max-w-2xl mb-8 md:mb-10 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    E-commerce success requires more than a storefront. We build the systems that drive traffic, convert browsers to buyers, and maximize customer lifetime value.
                </p>
                <Link href="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-full font-bold text-sm md:text-base hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/20">
                    Book a Strategy Audit
                </Link>
            </section>

            {/* Challenges */}
            <section className="max-w-7xl mx-auto mb-16 md:mb-32">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>E-commerce Challenges</h2>
                        <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                            Competition is fierce. Ad costs keep rising. Cart abandonment bleeds revenue. And customer acquisition feels like a treadmill that never stops.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="p-1 bg-emerald-500/10 rounded text-emerald-500 h-fit mt-1"><ShoppingCart size={18} /></div>
                                <div>
                                    <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Cart Abandonment</h3>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>High-intent visitors leaving without converting.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="p-1 bg-emerald-500/10 rounded text-emerald-500 h-fit mt-1"><CreditCard size={18} /></div>
                                <div>
                                    <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Rising Ad Costs</h3>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Facebook and Google CPMs eating into margins.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="p-1 bg-emerald-500/10 rounded text-emerald-500 h-fit mt-1"><Package size={18} /></div>
                                <div>
                                    <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Low Repeat Rates</h3>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Customers buying once and never returning.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50" />
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-2xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Our E-commerce Stack</h3>
                            <div className="space-y-6">
                                <div className="glass-panel p-6 rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                    <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>1. Conversion Rate Optimization</h4>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>A/B tested checkout flows that recover abandoned carts.</p>
                                </div>
                                <div className="glass-panel p-6 rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                    <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>2. Email & SMS Automation</h4>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Lifecycle campaigns that drive repeat purchases and LTV.</p>
                                </div>
                                <div className="glass-panel p-6 rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                    <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>3. Organic Search Strategy</h4>
                                    <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>SEO that reduces dependency on paid traffic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="max-w-7xl mx-auto mb-16 md:mb-32 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Client Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                    {[
                        { icon: TrendingUp, stat: "35%", label: "Increase in conversion rate" },
                        { icon: RefreshCw, stat: "2.5x", label: "Improvement in repeat rate" },
                        { icon: BarChart, stat: "50%", label: "Reduction in CAC" }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-white/5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            <item.icon size={32} className="text-emerald-500 mx-auto mb-4" />
                            <p className="text-4xl font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{item.stat}</p>
                            <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 text-center border-t border-white/5">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Ready to Scale Revenue?</h2>
                <Link href="/contact" className="px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-zinc-200 transition-colors inline-block">
                    Book a Strategy Audit
                </Link>
            </section>
        </main>
    );
}
