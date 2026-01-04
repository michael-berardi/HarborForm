import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Start Your Project | Liberty Design Studio',
    description: 'Ready to build? Contact Liberty Design Studio for high-performance web design, SEO, and digital growth systems. We only take 3 new clients per quarter.',
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Contact Liberty Design Studio',
        description: 'Book a strategy audit or get in touch. We build digital infrastructure for growth.',
        siteName: 'Liberty Design Studio',
        type: 'website',
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
