'use client';
import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Calendar, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Web Design', href: '/services' },
    { name: 'SEO Strategy', href: '/services' },
    { name: 'Lead Generation', href: '/services' },
    { name: 'Brand Identity', href: '/services' },
  ];

  const industries = [
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Professional Services', href: '/industries/professional-services' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'E-commerce', href: '/industries/ecommerce' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column - Wider */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/assets/images/logo-white.png"
                  alt="Liberty Design Studio"
                  fill
                  className="object-contain"
                  style={{ filter: 'var(--logo-filter, none)' }}
                />
              </div>
            </Link>
            <p className="text-base mb-6 leading-relaxed max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              Digital infrastructure for real estate and professional services. We build systems that convert traffic into revenue.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', hoverColor: 'hover:bg-blue-500/20 hover:text-blue-400' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', hoverColor: 'hover:bg-pink-500/20 hover:text-pink-400' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', hoverColor: 'hover:bg-blue-600/20 hover:text-blue-400' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${social.hoverColor}`}
                  style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Navigation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'var(--text-muted)' }}>
                Navigate
              </h4>
              <ul className="space-y-3">
                {navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium transition-colors duration-300 hover:text-[var(--accent-primary)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'var(--text-muted)' }}>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium transition-colors duration-300 hover:text-[var(--accent-primary)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'var(--text-muted)' }}>
                Industries
              </h4>
              <ul className="space-y-3">
                {industries.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium transition-colors duration-300 hover:text-[var(--accent-primary)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'var(--text-muted)' }}>
                Locations
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'New York', href: '/locations/new-york' },
                  { name: 'Los Angeles', href: '/locations/los-angeles' },
                  { name: 'Austin', href: '/locations/austin' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium transition-colors duration-300 hover:text-[var(--accent-primary)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'var(--text-muted)' }}>
                Contact
              </h4>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:mike@libertydesign.studio"
                  className="text-sm font-medium block transition-colors duration-300 hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  mike@libertydesign.studio
                </a>
                <a
                  href="tel:9414791845"
                  className="text-sm font-medium block transition-colors duration-300 hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  941-479-1845
                </a>
              </div>
              <Link
                href="/book-audit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02]"
              >
                <Calendar size={14} />
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 mb-10 border-y" style={{ borderColor: 'var(--border-subtle)' }}>
          {[
            { value: '2018', label: 'Founded' },
            { value: '675+', label: 'Projects' },
            { value: '4', label: 'States' },
            { value: '$50M+', label: 'Client Revenue' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © 2018–{currentYear} Liberty Design Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm transition-colors duration-300 hover:text-[var(--accent-primary)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm transition-colors duration-300 hover:text-[var(--accent-primary)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Terms
            </Link>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--accent-primary)]/20"
              style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
              aria-label="Back to top"
            >
              <ArrowUpRight size={18} className="rotate-[-45deg]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}