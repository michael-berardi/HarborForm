import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import Header from '@/components/layout/Header';
import Providers from '@/components/layout/Providers';
import ConditionalFooter from '@/components/layout/ConditionalFooter';
import { ThemeProvider } from '@/lib/theme-provider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://libertydesign.studio'),
  title: "Liberty Design Studio | Digital Marketing, Web Design, Branding & Ad Campaigns",
  description: "High-performance web design, SEO, and digital marketing for real estate and professional services. We build the digital infrastructure that converts traffic into closed deals.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Liberty Design Studio | Web Design & SEO for Real Estate",
    description: "High-performance digital marketing for real estate and professional services.",
    url: "https://libertydesign.studio",
    siteName: "Liberty Design Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liberty Design Studio | We Build Digital Engines",
    description: "Strategic web design, SEO, and digital marketing that drives real growth.",
    site: "@libertydesign",
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Liberty Design Studio",
  "description": "Digital infrastructure for high-yield operations. We build websites, SEO strategies, and marketing systems that produce measurable business results.",
  "url": "https://libertydesign.studio",
  "logo": "https://libertydesign.studio/assets/images/logo-white.png",
  "email": "mike@libertydesign.studio",
  "telephone": "+1-941-479-1845",
  "foundingDate": "2018",
  "founder": {
    "@type": "Person",
    "name": "Michael Berardi",
    "jobTitle": "Founder & Lead Engineer"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "areaServed": ["US"],
  "serviceType": [
    "Web Design",
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "Lead Generation",
    "Conversion Rate Optimization"
  ],
  "priceRange": "$$$",
  "sameAs": [
    "https://twitter.com/libertydesign",
    "https://www.linkedin.com/company/liberty-design-studio",
    "https://www.instagram.com/libertydesign"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!localTheme && supportDarkMode) localTheme = 'dark';
                  if (!localTheme) localTheme = 'light';
                  if (localTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="root" className={`${inter.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <Providers>
            <Header />
            {children}
            <ConditionalFooter />
          </Providers>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-S58J406YJV" />
    </html>
  );
}