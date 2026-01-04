import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industries | Liberty Design Studio',
    description: 'Specialized digital infrastructure for real estate, professional services, SaaS, and e-commerce. We build systems tailored to your industry.',
    alternates: {
        canonical: '/industries',
    },
    openGraph: {
        title: 'Industries | Liberty Design Studio',
        description: 'Specialized digital infrastructure for real estate, professional services, SaaS, and e-commerce.',
        siteName: 'Liberty Design Studio',
    },
};

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
