import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insights | Digital Strategy & SEO | Liberty Design Studio',
    description: 'Expert analysis on web design, SEO, and digital growth. No fluff, just actionable strategies for business leaders.',
    alternates: {
        canonical: '/insights',
    },
    openGraph: {
        title: 'Insights | Liberty Design Studio',
        description: 'Strategies for growth. Written by engineers and founders.',
        siteName: 'Liberty Design Studio',
        type: 'website',
    },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
