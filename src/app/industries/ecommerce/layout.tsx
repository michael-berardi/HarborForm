import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'E-commerce Marketing Agency | Conversion Rate Optimization | Liberty Design Studio',
    description: 'E-commerce growth systems that drive traffic, convert browsers to buyers, and maximize customer lifetime value. CRO, email automation, and organic search strategy.',
    openGraph: {
        title: 'E-commerce Marketing Agency | Liberty Design Studio',
        description: 'Revenue infrastructure for online retail. Conversion optimization, email automation, and SEO that reduces CAC.',
        type: 'website',
    },
    keywords: ['ecommerce marketing agency', 'conversion rate optimization', 'ecommerce seo', 'shopify marketing', 'ecommerce email marketing', 'cart abandonment'],
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
    return children;
}
