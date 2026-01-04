import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Real Estate Marketing Agency | Agent & Broker Websites | Liberty Design Studio',
    description: 'Digital marketing for real estate professionals. High-performance websites, local SEO that ranks, and lead generation systems that convert in NYC, LA, SF, Austin, Miami.',
    openGraph: {
        title: 'Real Estate Marketing Agency | Liberty Design Studio',
        description: 'Stand out in crowded markets with websites that rank and convert. Serving agents and brokers in major metros.',
        type: 'website',
    },
    keywords: ['real estate marketing agency', 'real estate website design', 'realtor seo', 'real estate lead generation', 'idx website', 'real estate agent marketing'],
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
    return children;
}
