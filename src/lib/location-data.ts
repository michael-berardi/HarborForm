export interface LocationChallenge {
    title: string;
    description: string;
}

export interface LocationSolution {
    title: string;
    description: string;
}

export interface LocationData {
    slug: string;
    city: string;
    state: string;
    title: string;
    description: string;
    heroImage: string;
    relatedProjects: string[];
    keywords: string[];
    introText: string;
    marketHighlight: string;
    challenges: LocationChallenge[];
    solutions: LocationSolution[];
    localStats: {
        label: string;
        value: string;
    }[];
    whyUs: {
        title: string;
        description: string;
    }[];
}

export const locations: LocationData[] = [
    {
        slug: "new-york",
        city: "New York",
        state: "NY",
        title: "Web Design & Growth Partners in New York City",
        description: "New York's most competitive markets require more than just aesthetic websites. We build high-performance digital infrastructure for NYC's elite real estate and professional service firms.",
        heroImage: "/assets/work/pep-real-estate.png",
        relatedProjects: ["pep-real-estate", "property-perfected"],
        keywords: ["New York Web Design", "NYC SEO Agency", "Real Estate Marketing NYC", "Manhattan Digital Agency"],
        introText: "From Soho, Manhattan to Jersey City, we help New York's most ambitious companies dominate their digital markets. In a city where attention is the most valuable currency, we ensure you capture it.",
        marketHighlight: "The most competitive digital market in the world.",
        challenges: [
            {
                title: "Hyper-Competitive Search",
                description: "Ranking in NYC means competing against national brands, funded startups, and established players with massive budgets."
            },
            {
                title: "Sophisticated Buyers",
                description: "New York clients demand premium experiences. Generic templates and slow sites signal amateur status."
            },
            {
                title: "Platform Dependence",
                description: "Most firms rely on LoopNet, Zillow, or StreetEasy rather than owning their own traffic and leads."
            }
        ],
        solutions: [
            {
                title: "Programmatic SEO Architecture",
                description: "We build page structures that target every neighborhood, building, and long-tail query your market searches for."
            },
            {
                title: "Performance-First Design",
                description: "Sub-second load times and conversion-focused layouts that match the pace New Yorkers expect."
            },
            {
                title: "Direct Lead Ownership",
                description: "Capture inquiries on your domain. No commissions. No intermediaries. Your leads, your relationships."
            }
        ],
        localStats: [
            { label: "NYC Projects", value: "120+" },
            { label: "Avg. SEO Lift", value: "+285%" },
            { label: "Client Retention", value: "94%" }
        ],
        whyUs: [
            {
                title: "Local Market Mastery",
                description: "We understand the nuances of the NY market, from commercial real estate in Soho to property management in the metro area."
            },
            {
                title: "Speed & Performance",
                description: "In the city that never sleeps, your website needs to be instant. We build highly optimized sites that load in milliseconds."
            }
        ]
    },
    {
        slug: "los-angeles",
        city: "Los Angeles",
        state: "CA",
        title: "Web Design & Digital Strategy in Los Angeles",
        description: "Capturing the luxury market in Los Angeles requires a blend of cinematic storytelling and technical precision. We help LA brands stand out in a visual-first market.",
        heroImage: "/assets/work/value-of-architecture.png",
        relatedProjects: ["value-of-architecture"],
        keywords: ["Los Angeles Web Design", "Luxury Real Estate Marketing LA", "Beverly Hills SEO", "LA Digital Agency"],
        introText: "Los Angeles is a visual-first market. We build platforms that marry the cinematic aesthetic LA expects with the conversion engineering your business needs.",
        marketHighlight: "Where visual excellence meets serious commerce.",
        challenges: [
            {
                title: "Visual Standards",
                description: "LA buyers expect Hollywood-quality presentation. Anything less signals you don't belong in the luxury tier."
            },
            {
                title: "International Competition",
                description: "Luxury properties compete for global buyers. Your digital presence must translate across cultures and currencies."
            },
            {
                title: "Attention Overload",
                description: "The entertainment capital produces more content than anywhere on earth. Standing out requires strategic precision."
            }
        ],
        solutions: [
            {
                title: "Cinematic Design Language",
                description: "Layouts, typography, and imagery that meet the visual expectations of the world's creative capital."
            },
            {
                title: "Global Audience Optimization",
                description: "SEO and content strategy built for international buyers searching from Dubai, Hong Kong, and London."
            },
            {
                title: "High-Net-Worth Lead Systems",
                description: "Qualification workflows that filter serious buyers from browsers, saving your team hours on unqualified leads."
            }
        ],
        localStats: [
            { label: "LA Clients", value: "35+" },
            { label: "Luxury Specialists", value: "8 Years" },
            { label: "Social Growth", value: "+180%" }
        ],
        whyUs: [
            {
                title: "Cinematic Aesthetics",
                description: "Our designs are built to match the high visual standards of Los Angeles luxury markets."
            },
            {
                title: "Targeted Growth",
                description: "We build systems that capture leads from high-net-worth individuals actively searching for premium properties."
            }
        ]
    },
    {
        slug: "san-francisco",
        city: "San Francisco",
        state: "CA",
        title: "Web Design & Digital Growth in San Francisco",
        description: "The Bay Area expects technical excellence. We build modern digital infrastructure for tech companies, SaaS founders, and forward-thinking real estate firms in the SF market.",
        heroImage: "/assets/work/lucero-legal.png",
        relatedProjects: ["lucero-legal", "value-of-architecture"],
        keywords: ["San Francisco Web Design", "Bay Area SEO", "Tech Startup Marketing", "SF Digital Agency", "SaaS Marketing"],
        introText: "San Francisco sets the standard for what digital should look like. We build with the same modern stack and performance expectations that Bay Area companies demand.",
        marketHighlight: "Tech capital that expects technical excellence.",
        challenges: [
            {
                title: "Tech-Savvy Audiences",
                description: "Your visitors know good code from bad. Slow sites, outdated stacks, and poor UX get immediately dismissed."
            },
            {
                title: "Premium Real Estate Costs",
                description: "With the highest property values in the country, every lead matters. Wasted clicks are expensive."
            },
            {
                title: "VC-Funded Competition",
                description: "Competing against startups with $10M marketing budgets requires efficiency and strategic precision."
            }
        ],
        solutions: [
            {
                title: "Modern Tech Stack",
                description: "Next.js, React, TypeScript. We build with the tools Silicon Valley engineers expect and respect."
            },
            {
                title: "Conversion-First Architecture",
                description: "Every element serves a purpose. No bloat, no vanity features. Pure performance."
            },
            {
                title: "Efficient Growth Systems",
                description: "SEO and paid strategies optimized for CAC, not vanity metrics. Every dollar tracks to revenue."
            }
        ],
        localStats: [
            { label: "SaaS Clients", value: "25+" },
            { label: "Avg. Page Speed", value: "98/100" },
            { label: "Conversion Lift", value: "+145%" }
        ],
        whyUs: [
            {
                title: "Engineering Excellence",
                description: "We build with the same modern stack (Next.js, React, TypeScript) that powers the best products in the Bay."
            },
            {
                title: "Startup Velocity",
                description: "We move at startup speed. Weeks, not months. Direct communication, no agency bloat."
            }
        ]
    },
    {
        slug: "austin",
        city: "Austin",
        state: "TX",
        title: "Digital Growth & Web Design in Austin",
        description: "Austin's rapid growth demands digital presence that cuts through the noise. We bring high-end design and technical excellence to the Texas market.",
        heroImage: "/assets/work/value-of-architecture.png",
        relatedProjects: ["value-of-architecture", "pep-real-estate"],
        keywords: ["Austin Web Design", "Texas Digital Agency", "Tech Growth Partner Austin", "Real Estate Marketing Austin"],
        introText: "As Austin continues its rapid ascent as a global tech and culture hub, the standard for digital presence is rising. We bring world-class design and engineering to Texas businesses.",
        marketHighlight: "America's fastest-growing tech and real estate market.",
        challenges: [
            {
                title: "Explosive Growth",
                description: "New competitors arrive daily. Establishing market position before saturation is critical."
            },
            {
                title: "Coastal Transplants",
                description: "Buyers from SF, LA, and NYC bring coastal expectations. Local-quality websites won't cut it."
            },
            {
                title: "Scaling Pains",
                description: "Fast growth often means outgrowing your systems. Infrastructure needs to scale with you."
            }
        ],
        solutions: [
            {
                title: "Coastal-Quality Design",
                description: "Premium aesthetics that meet the expectations of Silicon Valley and NYC transplants."
            },
            {
                title: "Scalable Architecture",
                description: "Systems designed to grow with your business. Add properties, services, and markets without rebuilding."
            },
            {
                title: "Local SEO Dominance",
                description: "Capture the Austin-specific searches before national players figure out the market."
            }
        ],
        localStats: [
            { label: "Texas Clients", value: "40+" },
            { label: "Local Rankings", value: "Top 3" },
            { label: "Lead Growth", value: "+220%" }
        ],
        whyUs: [
            {
                title: "Modern Tech Stack",
                description: "Austin is a tech city. We build with the modern stack (Next.js, React) that the local market respects and expects."
            },
            {
                title: "Scalable Infrastructure",
                description: "We build systems designed to grow with your business in one of the fastest-growing cities in America."
            }
        ]
    },
    {
        slug: "miami",
        city: "Miami",
        state: "FL",
        title: "Web Design & Digital Strategy in Miami",
        description: "Miami's luxury real estate and international buyer base demand bilingual excellence and premium digital experiences. We build infrastructure for the global gateway to Latin America.",
        heroImage: "/assets/work/lucero-legal.png",
        relatedProjects: ["lucero-legal", "value-of-architecture"],
        keywords: ["Miami Web Design", "Luxury Real Estate Marketing Miami", "Florida Digital Agency", "South Florida SEO", "Bilingual Marketing"],
        introText: "Miami is the gateway between North America and Latin America. We build digital infrastructure that speaks both languages and captures buyers from both hemispheres.",
        marketHighlight: "The global gateway to Latin American wealth.",
        challenges: [
            {
                title: "Bilingual Requirements",
                description: "Serious Miami players need English and Spanish. Half your market won't engage in a language they don't prefer."
            },
            {
                title: "International Buyers",
                description: "EB-5 investors, vacation home buyers, and Latin American wealth require specialized trust signals."
            },
            {
                title: "Seasonal Volatility",
                description: "Miami real estate runs on different rhythms. Digital systems need to capture demand when it peaks."
            }
        ],
        solutions: [
            {
                title: "Bilingual Infrastructure",
                description: "Seamless language switching. Native quality in both English and Spanish, not machine translation."
            },
            {
                title: "International Lead Systems",
                description: "Intake forms, qualification workflows, and CRM integrations built for cross-border transactions."
            },
            {
                title: "Luxury Visual Standards",
                description: "Miami buyers expect Art Basel aesthetics. Our designs match the visual language of South Beach luxury."
            }
        ],
        localStats: [
            { label: "Florida Clients", value: "20+" },
            { label: "International Leads", value: "+200%" },
            { label: "Bilingual Sites", value: "100%" }
        ],
        whyUs: [
            {
                title: "Bilingual Expertise",
                description: "We've built bilingual platforms for immigration law and luxury real estate. Both languages receive equal care."
            },
            {
                title: "Luxury Market Experience",
                description: "From Beverly Hills to South Beach, we understand the visual and functional expectations of high-net-worth buyers."
            }
        ]
    }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
    return locations.find((loc) => loc.slug === slug);
}
