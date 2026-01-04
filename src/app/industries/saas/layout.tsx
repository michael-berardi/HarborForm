import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SaaS Marketing Agency | B2B Growth Systems | Liberty Design Studio',
    description: 'SaaS growth infrastructure that turns traffic into trials and trials into revenue. Conversion-first landing pages, SEO content engines, and lifecycle automation.',
    openGraph: {
        title: 'SaaS Marketing Agency | Liberty Design Studio',
        description: 'Growth systems for software companies. Lower CAC through organic, improve trial conversion, scale MRR.',
        type: 'website',
    },
    keywords: ['saas marketing agency', 'b2b saas marketing', 'saas growth', 'product led growth', 'trial conversion', 'saas seo'],
};

export default function SaaSLayout({ children }: { children: React.ReactNode }) {
    return children;
}
