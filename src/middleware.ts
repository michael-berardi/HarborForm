import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Countries to block
// IN: India, PK: Pakistan, CN: China, BD: Bangladesh, NG: Nigeria
// RU: Russia, IR: Iran, KP: North Korea, SY: Syria, CU: Cuba
const BLOCKED_COUNTRIES = new Set([
    'IN', 'PK', 'CN', 'BD', 'NG',
    'RU', 'IR', 'KP', 'SY', 'CU',
    'BR', 'VN', 'ID', 'PH', 'RO',
    'UA', 'TH', 'KH', 'MM', 'LA',
    'TR', 'KE'
]);

export function middleware(req: NextRequest) {
    // Get country from Vercel's geolocation header
    const country = (req as NextRequest & { geo?: { country?: string } }).geo?.country || req.headers.get('x-vercel-ip-country');

    if (country && BLOCKED_COUNTRIES.has(country)) {
        return new NextResponse('Access Denied', { status: 403 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - robots.txt (robots file)
         * - sitemap.xml (sitemap file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
};
