import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Work | Case Studies & Results | Liberty Design Studio',
    description: 'See how we have helped real estate and professional services firms scale through better digital infrastructure. Real results, confirmed revenue.',
    alternates: {
        canonical: '/work',
    },
    openGraph: {
        title: 'Our Work | Liberty Design Studio',
        description: 'Real client results. Digital infrastructure that pays for itself.',
        siteName: 'Liberty Design Studio',
        type: 'website',
    },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return children;
}
