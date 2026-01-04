import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Services Marketing | Law Firm & Consulting Websites | Liberty Design Studio',
    description: 'Digital infrastructure for law firms, consulting practices, and advisory businesses. Authority positioning, lead qualification, and thought leadership content.',
    openGraph: {
        title: 'Professional Services Marketing | Liberty Design Studio',
        description: 'Websites that communicate expertise and convert high-value clients. For law firms, consultants, and advisors.',
        type: 'website',
    },
    keywords: ['law firm marketing', 'consulting firm website', 'professional services marketing', 'lawyer seo', 'b2b professional services', 'attorney website design'],
};

export default function ProfessionalServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
