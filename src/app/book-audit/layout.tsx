import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free Strategy Audit | Book Your 30-Minute Growth Session | Liberty Design Studio',
    description: 'Get a free 30-minute strategy audit. We analyze your digital presence, identify quick wins, and deliver a custom growth roadmap. No obligation, pure value.',
    openGraph: {
        title: 'Free Strategy Audit | Liberty Design Studio',
        description: 'Book a 30-minute strategy session. We identify your highest-impact opportunities.',
        type: 'website',
    },
};

export default function BookAuditLayout({ children }: { children: React.ReactNode }) {
    return children;
}
