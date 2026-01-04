import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Liberty Design Studio',
    description: 'We are a specialized digital growth partner. We build high-performance websites and marketing systems for businesses ready to scale.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Liberty Design Studio',
        description: 'Building the digital infrastructure for your next stage of growth.',
        siteName: 'Liberty Design Studio',
        type: 'website',
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
