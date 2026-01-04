import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Philosophy | Design for Revenue | Liberty Design Studio',
    description: 'We believe websites should be business assets, not art projects. Our approach focuses on clarity, speed, and measurable conversion.',
    openGraph: {
        title: 'Our Philosophy | Liberty Design Studio',
        description: 'Design for revenue, not just applause.',
        type: 'website',
    },
};

export default function PhilosophyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
