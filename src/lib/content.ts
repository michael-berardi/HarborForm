// Scheduled Content System
// Centralized content data with publish date filtering

export interface ArticleContent {
    slug: string;
    title: string;
    category: string;
    readTime: string;
    date: string;
    publishDate: string; // ISO date, e.g. "2026-01-15" - content hidden until this date
    image: string;
    excerpt: string;
    color: string;
    content: ContentBlock[];
}

export interface ContentBlock {
    type: 'paragraph' | 'heading' | 'quote' | 'list';
    text?: string;
    items?: string[];
}

// Helper to check if content should be published
export function isPublished(publishDate: string): boolean {
    const now = new Date();
    const publish = new Date(publishDate);
    // Set time to start of day for consistent comparison
    now.setHours(0, 0, 0, 0);
    publish.setHours(0, 0, 0, 0);
    return publish <= now;
}

// Get today's date in ISO format
export function getTodayISO(): string {
    return new Date().toISOString().split('T')[0];
}

// All articles - add publishDate to schedule content
export const articles: ArticleContent[] = [
    {
        slug: 'operations-first-approach',
        title: 'The Operations-First Approach to Web Design',
        category: 'Strategy',
        readTime: '5 min read',
        date: 'Jan 1, 2026',
        publishDate: '2026-01-01', // Already published
        image: '/assets/insights/thumbnail-operations-first-approach-web-design.png',
        excerpt: 'Why treating your website like a system, not a project, leads to better outcomes.',
        color: 'from-blue-900/20 to-zinc-900',
        content: [
            { type: 'paragraph', text: 'Most web design projects fail before the first wireframe is drawn. The problem is not aesthetics. The problem is that design teams start with the wrong question. They ask "What should this look like?" instead of "What should this do?"' },
            { type: 'heading', text: 'The Brochure Problem' },
            { type: 'paragraph', text: 'Traditional agency models treat websites as brochures. A one-time project with a start date, an end date, and a handoff. The client gets a beautiful artifact. Then it sits there, collecting digital dust while the business evolves around it.' },
            { type: 'paragraph', text: 'Within six months, the site no longer reflects current offerings. The team has changed. The market has shifted. But the website remains frozen in time because updating it requires another project, another budget, another round of approvals.' },
            { type: 'heading', text: 'Websites Are Infrastructure' },
            { type: 'paragraph', text: 'The operations-first approach starts with a different premise. Your website is not a project. It is infrastructure. It should be designed with the same rigor you apply to any system critical to your business operations.' },
            { type: 'paragraph', text: 'This means:' },
            {
                type: 'list', items: [
                    'Integration with your CRM and lead management from day one',
                    'Analytics tied to actual business outcomes, not vanity metrics',
                    'Content architecture that allows rapid updates without developer involvement',
                    'Performance benchmarks that are monitored and maintained continuously'
                ]
            },
            { type: 'heading', text: 'The ROI Difference' },
            { type: 'paragraph', text: 'When you treat a website as infrastructure, you measure it differently. Instead of asking "Does this look good?" you ask "Is this generating qualified leads? Is it reducing friction in our sales process? Is it supporting our team\'s daily work?"' },
            { type: 'quote', text: 'Every element must earn its place. If a page, form, or feature cannot be tied back to revenue or clear operational value, it should not exist.' },
            { type: 'paragraph', text: 'The operations-first approach is not about sacrificing design quality. It is about ensuring that design decisions serve business objectives. Beautiful and functional are not opposites. They are requirements.' },
            { type: 'heading', text: 'Implementation' },
            { type: 'paragraph', text: 'If you are planning a web project, start with an operations audit. Map how leads currently move through your business. Identify where digital touchpoints fail or create friction. Only then should you begin discussing visual design.' },
            { type: 'paragraph', text: 'The best-looking website in your industry is worthless if it does not move your business forward. Start with operations. Let design follow.' }
        ]
    },
    {
        slug: 'vanity-metrics',
        title: 'Why Vanity Metrics Are Killing Your Marketing Budget',
        category: 'Performance Marketing',
        readTime: '7 min read',
        date: 'Dec 15, 2025',
        publishDate: '2025-12-15', // Already published
        image: '/assets/insights/thumbnail-vanity-metrics-killing-marketing-budget.png',
        excerpt: 'The hidden cost of optimizing for the wrong numbers.',
        color: 'from-purple-900/20 to-zinc-900',
        content: [
            { type: 'paragraph', text: 'Your marketing dashboard shows impressive numbers. Impressions are up. Social followers are growing. Email open rates look healthy. But revenue is flat. Pipeline is stagnant. Something is broken, and the metrics are hiding it.' },
            { type: 'heading', text: 'The Vanity Trap' },
            { type: 'paragraph', text: 'Vanity metrics are numbers that make you feel good without indicating actual business performance. They are easy to measure, easy to grow, and easy to report to stakeholders who do not know better. They are also dangerous.' },
            { type: 'paragraph', text: 'Common vanity metrics include:' },
            {
                type: 'list', items: [
                    'Social media followers (without engagement or conversion data)',
                    'Website traffic (without source quality or intent signals)',
                    'Email list size (without engagement segmentation)',
                    'Impressions and reach (without click-through context)'
                ]
            },
            { type: 'heading', text: 'The Cost of Misdirection' },
            { type: 'paragraph', text: 'Every dollar spent optimizing a vanity metric is a dollar not spent on something that matters. Worse, vanity metrics can actively mislead decision-making. A campaign that generates massive reach but zero qualified leads looks like success in the weekly report while draining budget from activities that actually produce revenue.' },
            { type: 'quote', text: 'If you cannot draw a direct line from a metric to revenue or operational efficiency, question why you are tracking it.' },
            { type: 'heading', text: 'What to Measure Instead' },
            { type: 'paragraph', text: 'Revenue-focused marketing requires different metrics. The goal is to track the full path from first touch to closed deal, identifying where the funnel leaks and where investment pays off.' },
            {
                type: 'list', items: [
                    'Cost per qualified lead (not just cost per lead)',
                    'Lead-to-opportunity conversion rate',
                    'Sales cycle length by lead source',
                    'Customer lifetime value by acquisition channel',
                    'Return on ad spend against actual closed revenue'
                ]
            },
            { type: 'heading', text: 'The Attribution Problem' },
            { type: 'paragraph', text: 'Accurate measurement requires proper attribution infrastructure. Most businesses underinvest in tracking, then struggle to understand which activities drive results. Before launching any new marketing initiative, ensure you can measure its contribution to the bottom line.' },
            { type: 'paragraph', text: 'This is not glamorous work. It requires technical implementation, discipline in data collection, and patience in analysis. But it is the foundation of marketing that actually works.' },
            { type: 'heading', text: 'Taking Action' },
            { type: 'paragraph', text: 'Audit your current metrics. For each number you report, ask: Does this directly connect to revenue or a clear business objective? If the answer is no, consider whether tracking it is worth the attention it demands.' },
            { type: 'paragraph', text: 'Replace feel-good numbers with meaningful indicators. Your budget will go further. Your decisions will be sharper. And your marketing will finally produce the returns it should.' }
        ]
    },
    {
        slug: 'programmatic-seo-case-study',
        title: 'Programmatic SEO: A Case Study in NYC Lead Generation',
        category: 'SEO',
        readTime: '10 min read',
        date: 'Dec 1, 2025',
        publishDate: '2025-12-01', // Already published
        image: '/assets/insights/thumbnail-programmatic-seo-nyc-lead-generation.png',
        excerpt: 'How we helped a real estate firm dominate local search.',
        color: 'from-emerald-900/20 to-zinc-900',
        content: [
            { type: 'paragraph', text: 'When a boutique commercial real estate firm in Manhattan approached us, they faced a familiar problem. Despite years of market expertise and a strong reputation, their digital presence was invisible. Zillow, LoopNet, and well-funded competitors dominated every search term that mattered.' },
            { type: 'heading', text: 'The Challenge' },
            { type: 'paragraph', text: 'Commercial real estate search is hyperlocal. Prospects search for specific building types in specific neighborhoods. "Office space in SoHo." "Retail for lease in Tribeca." "Co-working space Flatiron." Each variation represents a potential lead, but manually creating optimized content for every possible search term is impractical.' },
            { type: 'paragraph', text: 'The client had a modest content budget and a small team. Competing head-to-head with aggregators using traditional SEO methods was not viable.' },
            { type: 'heading', text: 'The Programmatic Approach' },
            { type: 'paragraph', text: 'Programmatic SEO generates pages at scale by combining structured data with template-driven content. Instead of writing individual pages for each keyword, you build a system that creates and maintains thousands of pages automatically.' },
            { type: 'paragraph', text: 'For this client, we built an architecture that:' },
            {
                type: 'list', items: [
                    'Pulled live listing data from their property management system',
                    'Combined it with structured neighborhood and building data',
                    'Generated optimized landing pages for every property type in every neighborhood',
                    'Automatically updated as inventory changed'
                ]
            },
            { type: 'heading', text: 'Technical Implementation' },
            { type: 'paragraph', text: 'The system was built on Next.js with server-side generation. Each page included unique, contextual content that passed quality thresholds while maintaining consistency. We implemented schema markup for local business and real estate listings, improving visibility in rich results.' },
            { type: 'quote', text: 'Within 90 days, the client went from page 4 to position 1-3 for over 200 high-intent local search terms.' },
            { type: 'heading', text: 'Results' },
            { type: 'paragraph', text: 'The numbers tell the story:' },
            {
                type: 'list', items: [
                    '400% increase in organic search traffic',
                    '3-5 qualified leads per day from organic search alone',
                    'Position 1-3 rankings for 200+ local terms',
                    'Cost per lead reduced by 70% compared to paid advertising'
                ]
            },
            { type: 'heading', text: 'Key Takeaways' },
            { type: 'paragraph', text: 'Programmatic SEO is not a shortcut for thin content. It requires genuine value on each page, proper technical implementation, and ongoing maintenance. Done correctly, it allows smaller players to compete with well-funded competitors by matching scale with precision.' },
            { type: 'paragraph', text: 'The approach works best for businesses with structured data assets, recurring content patterns, and hyperlocal or long-tail search opportunities. If your business fits that profile, programmatic SEO may be the most efficient path to organic dominance.' }
        ]
    }
];

// Get all published articles (for listings)
export function getPublishedArticles(): ArticleContent[] {
    return articles.filter(a => isPublished(a.publishDate));
}

// Get article by slug (returns even unpublished for preview)
export function getArticleBySlug(slug: string): ArticleContent | undefined {
    return articles.find(a => a.slug === slug);
}

// Check if specific article is published
export function isArticlePublished(slug: string): boolean {
    const article = getArticleBySlug(slug);
    return article ? isPublished(article.publishDate) : false;
}
