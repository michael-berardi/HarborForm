import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Liberty Design Studio',
    description: 'Web design, SEO, brand identity, and growth marketing for real estate and professional services. The Digital Engine methodology delivers measurable results.',
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Services | Liberty Design Studio',
        description: 'Web design, SEO, brand identity, and growth marketing. The Digital Engine methodology: Strategy, Design, Engineering, Growth.',
        siteName: 'Liberty Design Studio',
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
