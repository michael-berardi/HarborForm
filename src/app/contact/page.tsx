'use client';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        {/* Left Column: Context */}
        <div className="space-y-6 md:space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Let&apos;s build.</h1>
            <p className="text-base md:text-lg leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              We only take on 3 new clients per quarter to ensure we can focus. Book a 15-minute audit to see if we&apos;re a fit.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-sm uppercase tracking-wider transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>What to expect:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span>Review of your current setup</span>
              </li>
              <li className="flex items-start gap-3 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span>Identification of 3 &quot;Quick Wins&quot;</span>
              </li>
              <li className="flex items-start gap-3 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span>A clear plan for next steps</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-white/10">
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Our Promise:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-emerald-500">
                  <CheckCircle2 size={16} /> <span>Free first consultation — no obligation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-500">
                  <CheckCircle2 size={16} /> <span>Satisfaction guarantee on all websites</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-500">
                  <CheckCircle2 size={16} /> <span>675+ projects delivered since 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Actions */}
        <div className="glass-panel p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-xl">
          <div className="grid gap-4">
            <div className="w-full">
              <Link
                href="/book-audit"
                className="flex items-center justify-center gap-3 w-full p-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Book Strategy Audit
              </Link>
              <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] mt-4 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>15-minute intro call • No obligation</p>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-xs uppercase transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>Or</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <a href="mailto:project@libertydesign.studio" className="flex items-center gap-4 w-full p-4 text-left rounded-xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/10">
              <div className="w-10 h-10 bg-zinc-800 text-zinc-400 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Email Us</h3>
                <p className="text-sm group-hover:text-blue-500 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>mike@libertydesign.studio</p>
              </div>
            </a>

            <div className="pt-6 text-center">
              <p className="text-sm mb-2 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Not ready to talk yet?</p>
              <Link href="/insights" className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors">
                Explore Our Insights →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* What Happens Next Section */}
      <section className="relative z-10 w-full max-w-4xl mt-16 md:mt-24 mb-8 md:mb-12 border-t border-white/10 pt-8 md:pt-12">
        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>What Happens Next?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { step: "01", title: "30-Minute Strategy Call", desc: "We get to know your business, goals, and current challenges." },
            { step: "02", title: "Custom Proposal", desc: "Within 48 hours, you receive a detailed plan with clear deliverables and pricing." },
            { step: "03", title: "Kickoff & Execution", desc: "Once approved, we move fast. Most projects launch in weeks, not months." }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-4">{item.step}</div>
              <h4 className="font-bold mb-2 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
              <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}