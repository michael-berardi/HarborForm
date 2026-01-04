'use client';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
    const pathname = usePathname();
    // Don't render footer on homepage/root path because it's handled manually in page.tsx for scroll snapping
    if (pathname === '/') return null;
    return <Footer />;
}
