'use client';
import Link from 'next/link';
import { TrendingUp, Users, BarChart, Search, DollarSign } from 'lucide-react';

export default function RealEstateIndustryPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-32 px-4 md:px-6 font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Hero */}
      <section className="max-w-7xl mx-auto mb-16 md:mb-32 flex flex-col items-start">
        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Real Estate</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 max-w-4xl transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
          Digital Systems for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-white dark:to-zinc-500">Real Estate Professionals.</span>
        </h1>
        <p className="text-base md:text-xl leading-relaxed max-w-2xl mb-8 md:mb-10 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
          Stand out in a crowded market with high-performance websites,
          SEO that ranks, and lead generation systems that actually convert.
        </p>
        <Link href="/contact" className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-full font-bold text-sm md:text-base hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/20">
          Book a Real Estate Strategy Audit
        </Link>
      </section>

      {/* Challenges */}
      <section className="max-w-7xl mx-auto mb-16 md:mb-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>The Challenges You Face</h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              The real estate market is saturated. Zillow and Redfin dominate search results. Most agent websites are generic templates that fail to capture the unique value you bring to the table.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="p-1 bg-red-500/10 rounded text-red-500 h-fit mt-1"><TrendingUp size={18} /></div>
                <div>
                  <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Hyper-Competitive Markets</h3>
                  <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Standing out against thousands of other agents.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="p-1 bg-red-500/10 rounded text-red-500 h-fit mt-1"><Users size={18} /></div>
                <div>
                  <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Low Conversion Rates</h3>
                  <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Getting traffic but not leads. Browsers not becoming buyers.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="p-1 bg-red-500/10 rounded text-red-500 h-fit mt-1"><BarChart size={18} /></div>
                <div>
                  <h3 className="font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Local SEO Dominance</h3>
                  <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Struggling to rank for &quot;homes for sale in [neighborhood]&quot;.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-5 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden border border-white/5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
            <div className="relative z-10 space-y-8">
              <h3 className="text-xl md:text-2xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Our Solution: The Digital Engine</h3>
              <div className="space-y-6">
                <div className="glass-panel p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                  <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>1. High-Performance Architecture</h4>
                  <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Custom Next.js sites that load instantly and rank higher.</p>
                </div>
                <div className="glass-panel p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                  <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>2. Programmatic Local SEO</h4>
                  <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Automatically generate landing pages for every neighborhood you serve.</p>
                </div>
                <div className="glass-panel p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-primary)' }}>
                  <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>3. Automated Lead Nurturing</h4>
                  <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Systems that follow up with leads while you sleep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto mb-16 md:mb-32 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Real Estate Client Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: TrendingUp, stat: "+240%", label: "Lead capture increase" },
            { icon: Search, stat: "Top 3", label: "Local search rankings" },
            { icon: DollarSign, stat: "$2M+", label: "Revenue attributed" }
          ].map((item, i) => (
            <div key={i} className="p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <item.icon size={32} className="text-blue-500 mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{item.stat}</p>
              <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center border-t border-white/5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Ready to Dominate Your Market?</h2>
        <Link href="/contact" className="px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-zinc-200 transition-colors inline-block">
          Book a Strategy Audit
        </Link>
      </section>
    </main>
  );
}
