// lib/case-studies.ts

export interface CaseStudyStep {
  title: string;
  description: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  explanation?: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  description: string;
  heroImage: string;
  challenge: string;
  beforePoints: string[];
  metrics: CaseStudyMetric[];
  detailedResults: CaseStudyMetric[];
  steps: CaseStudyStep[];
  tags: string[];
  services: string[];
  timeline: string;
  seoTitle: string;
  seoDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "value-of-architecture",
    client: "The Value of Architecture",
    industry: "Luxury Real Estate",
    headline: "Laying the Foundation for Exponential Social Media Growth",
    description: "We built the social media and email marketing foundation for a Beverly Hills luxury brokerage specializing in architecturally significant properties. That foundation has since compounded into a major digital presence.",
    heroImage: "/assets/work/value-of-architecture.png",
    timeline: "8 Weeks",
    services: ["Social Media Marketing", "Email Marketing", "Content Strategy"],
    seoTitle: "The Value of Architecture Case Study | Social Media Growth | Liberty Design Studio",
    seoDescription: "How we helped TVOA, a Beverly Hills luxury real estate brokerage, build the social media foundation that has since grown to 90K Instagram followers and 38K Facebook followers.",
    challenge: "The Value of Architecture (TVOA) is a luxury real estate brokerage founded by Brian Linder, a licensed architect whose distinct vision positions TVOA at the intersection of architecture and real estate. Their inventory consists of 'properties with design integrity'—from Neutra masterpieces to contemporary hillside estates. We were brought in to build a social media and email marketing foundation that would help amplify their unique positioning to design-conscious buyers.",
    beforePoints: [
      "Social media presence in the hundreds of followers",
      "Untapped potential for reaching design-focused audiences",
      "Room to build direct relationships with high-net-worth collectors",
      "Opportunity to create systematic lead nurturing through email"
    ],
    metrics: [
      { label: "Instagram Today", value: "90K" },
      { label: "Facebook Today", value: "38.5K" },
      { label: "YouTube Today", value: "8.1K" }
    ],
    detailedResults: [
      { label: "Instagram Followers", value: "90K", explanation: "From hundreds of followers when we started to 90K today. The foundation we built has compounded through consistent execution of the content strategy." },
      { label: "Facebook Likes", value: "38.5K", explanation: "Facebook presence grew from minimal following to over 38,000 engaged followers interested in architecturally significant properties." },
      { label: "YouTube Subscribers", value: "8.1K", explanation: "The YouTube channel has grown to over 8,000 subscribers showcasing architectural property tours and design insights." },
      { label: "Initial Engagement Lift", value: "+180%", explanation: "During our engagement, Instagram post engagement increased 180% through the content strategy and posting cadence we established." },
      { label: "Email Open Rates", value: "42%", explanation: "Email campaigns achieved 42% average open rates—well above industry standard—through segmented audiences and curated content." },
      { label: "Foundation Built", value: "Compounding", explanation: "The systems and strategies we put in place continue to drive growth. Brian and his team have built on this foundation to reach their current scale." }
    ],
    steps: [
      { title: "Social Media Foundation", description: "Built the initial social media strategy and content approach for Instagram and Facebook. Established posting cadence, content themes, and engagement tactics that could scale over time." },
      { title: "Content Strategy Development", description: "Created a content framework focused on architectural storytelling—property spotlights featuring architect bios, design history, and what makes each property significant to collectors." },
      { title: "Email Marketing System", description: "Implemented a lead magnet and email nurturing system to capture and segment design-conscious prospects. Built automated sequences for different buyer preferences." },
      { title: "Handoff for Scale", description: "Delivered documented systems and strategies that the TVOA team has since executed and expanded. The compounding growth to 90K+ Instagram followers reflects their continued execution of this foundation." }
    ],
    tags: ["Luxury Real Estate", "Social Media Marketing", "Email Marketing", "Beverly Hills", "Content Strategy"]
  },
  {
    slug: "pep-real-estate",
    client: "PEP Real Estate",
    industry: "Commercial Real Estate",
    headline: "Outranking LoopNet on Competitive Soho Keywords",
    description: "We built a digital infrastructure that put a boutique Soho landlord on page one of Google for competitive short-tail keywords, directly competing with and outranking major platforms like LoopNet.",
    heroImage: "/assets/work/pep-real-estate.png",
    timeline: "6 Weeks",
    services: ["Programmatic SEO", "Web Design", "Lead Automation", "CRM Integration"],
    seoTitle: "PEP Real Estate Case Study | Outranking LoopNet | Liberty Design Studio",
    seoDescription: "How we helped PEP Real Estate rank on page one of Google for competitive keywords like 'soho office' and 'soho office space', outranking LoopNet and major platforms.",
    challenge: "PEP Real Estate owns premium commercial space across Soho's most sought-after addresses: 54 Crosby Street, 69 Mercer Street, 39 Wooster Street, and more. The opportunity was clear: build direct search visibility for their own properties rather than relying on third-party platforms. We set out to make PEP the first result when someone searches for Soho office space.",
    beforePoints: [
      "Opportunity to own search results for their own premium addresses",
      "Potential to establish direct relationships with tenants",
      "Chance to build a scalable programmatic SEO architecture",
      "Room to automate inventory updates and lead management"
    ],
    metrics: [
      { label: "Google Impressions", value: "+308%" },
      { label: "Page 1 Rankings", value: "10+" },
      { label: "Search Traffic", value: "+138%" }
    ],
    detailedResults: [
      { label: "'soho office'", value: "Position 6", explanation: "Ranking #6 on Google for the highly competitive short-tail keyword 'soho office', directly competing with LoopNet and major commercial real estate platforms." },
      { label: "'soho office space'", value: "Position 7", explanation: "Appearing on page one for 'soho office space' with 178 monthly impressions. This is a competitive term that typically only major platforms rank for." },
      { label: "'soho office rent'", value: "Position 5", explanation: "Top 5 ranking for 'soho office rent', a high-intent keyword that captures active searchers looking for Soho commercial space." },
      { label: "Google Impressions", value: "133,000", explanation: "Search visibility grew to 133,000 annual impressions, up 308% year-over-year. PEP now appears on thousands of relevant searches monthly." },
      { label: "Annual Visits", value: "57,000", explanation: "Total site visits grew to 57,000 annually, representing 138% growth. These are direct visitors to PEP's properties, bypassing broker intermediaries." },
      { label: "'54 Crosby Street'", value: "Position 2", explanation: "Near-dominant ranking for their flagship property address, capturing 26% of clicks from searchers looking for this specific building." }
    ],
    steps: [
      { title: "Competitive Keyword Analysis", description: "Identified the high-volume, high-intent keywords that LoopNet and major platforms were dominating. Mapped the opportunity to overtake them with targeted content and technical SEO." },
      { title: "Programmatic Page Architecture", description: "Built unique, SEO-optimized landing pages for every building, floor, and unit. Each page targets specific searches like 'soho office space for rent' and building-specific queries." },
      { title: "Technical SEO Foundation", description: "Implemented schema markup, optimized site structure, and built internal linking patterns that signal authority on Soho commercial real estate to search engines." },
      { title: "Direct Lead Capture", description: "Connected all inquiry forms directly to their CRM, eliminating the need for third-party platforms and the commissions that come with them." }
    ],
    tags: ["Commercial Real Estate", "Programmatic SEO", "Lead Automation", "Soho NYC"]
  },
  {
    slug: "property-perfected",
    client: "Property Perfected",
    industry: "Property Management",
    headline: "From Zero to 574% Search Visibility Growth",
    description: "Built an entire digital presence from scratch for a Jersey City property management company, delivering explosive month-over-month SEO growth and ranking for competitive local keywords.",
    heroImage: "/assets/work/property-perfected.png",
    timeline: "4 Weeks",
    services: ["Web Design", "Local SEO", "Lead Capture", "Content Strategy"],
    seoTitle: "Property Perfected Case Study | 574% SEO Growth | Liberty Design Studio",
    seoDescription: "How we built Property Perfected's digital presence from zero to 574% search impression growth, doubling search clicks and ranking for Jersey City property management keywords.",
    challenge: "Property Perfected was ready to establish their digital presence in the Jersey City property management market. With a strong reputation built through referrals and word-of-mouth, the next step was building a professional website that would capture that momentum and compete for organic search visibility against established players.",
    beforePoints: [
      "Strong referral reputation ready to be amplified online",
      "Opportunity to claim local search territory in Jersey City",
      "Chance to build a modern lead capture system from the ground up",
      "Potential to establish digital authority in a growing market"
    ],
    metrics: [
      { label: "Search Impressions", value: "+574%" },
      { label: "Search Clicks", value: "+100%" },
      { label: "Bounce Rate", value: "-14%" }
    ],
    detailedResults: [
      { label: "Google Impressions", value: "735", explanation: "Search impressions grew 574% month-over-month, putting the Property Perfected brand in front of hundreds of potential clients searching for property management services." },
      { label: "Search Click Growth", value: "+100%", explanation: "Organic search clicks doubled month-over-month, with a 70% improvement in click-through rate as we optimized meta descriptions and search result positioning." },
      { label: "Click-Through Rate", value: "1.9%", explanation: "CTR improved 70% as search result positioning and meta descriptions were optimized for user intent and engagement." },
      { label: "Branded Search", value: "#1 Position", explanation: "Now ranking #1 for the branded term 'property perfected' with a 40.91% CTR, establishing brand authority in search results." },
      { label: "Bounce Rate", value: "-14%", explanation: "Bounce rate improved 14%, indicating better user engagement and content relevance. Visitors are finding what they need and exploring the site." },
      { label: "Homepage Engagement", value: "1m 2s", explanation: "Average time on the homepage exceeds one minute, demonstrating quality content consumption and genuine visitor interest." }
    ],
    steps: [
      { title: "Brand-First Web Design", description: "Built a professional, conversion-focused website that establishes immediate credibility in the competitive property management space. The design prioritizes trust signals and clear value propositions." },
      { title: "Local SEO Foundation", description: "Implemented strategic targeting for competitive keywords including 'jersey city property management' and 'property management companies jersey city.' These terms now show in hundreds of monthly searches." },
      { title: "Content Strategy", description: "Created a Resources section that drives engagement and positions Property Perfected as a local authority. This content addresses common property owner questions and builds topical relevance." },
      { title: "Lead Capture Integration", description: "Integrated streamlined contact forms with clear calls-to-action throughout the user journey. Every page is optimized to convert visitors into inquiries." }
    ],
    tags: ["Property Management", "Local SEO", "Lead Capture", "Jersey City"]
  },
  {
    slug: "lucero-legal",
    client: "Lucero Legal",
    industry: "Legal / Immigration",
    headline: "Professional Digital Presence for International Immigration Counsel",
    description: "Built a bilingual website for an Argentina-based immigration and investment law firm, establishing authority for international clients seeking residency, citizenship, and real estate legal services.",
    heroImage: "/assets/work/lucero-legal.png",
    timeline: "5 Weeks",
    services: ["Web Design", "Brand Identity", "Bilingual Content Strategy", "Lead Capture", "SEO"],
    seoTitle: "Lucero Legal Case Study | Immigration Law Website | Liberty Design Studio",
    seoDescription: "How we built a professional digital presence for Lucero Legal, an Argentina-based immigration law firm serving international investors and expatriates.",
    challenge: "Lucero Legal was ready to expand their reach to an international audience—primarily English-speaking investors, retirees, and digital nomads considering relocation to Argentina. The opportunity: build a bilingual digital presence that establishes the firm as the go-to resource for international clients navigating Argentine immigration and investment law.",
    beforePoints: [
      "Opportunity to build a professional bilingual brand identity",
      "Untapped potential in English-language immigration searches",
      "Chance to simplify complex legal services for international clients",
      "Room to build an integrated consultation booking system"
    ],
    metrics: [
      { label: "Organic Traffic", value: "+180%" },
      { label: "Consultation Requests", value: "2.5x" },
      { label: "International Leads", value: "+200%" }
    ],
    detailedResults: [
      { label: "Organic Traffic", value: "+180%", explanation: "Organic search traffic grew 180% within the first quarter, driven by targeted content around Argentine immigration, residency, and investment visa keywords." },
      { label: "Consultation Requests", value: "2.5x", explanation: "Consultation booking requests increased 2.5x through clear calls-to-action and an integrated scheduling system." },
      { label: "International Leads", value: "+200%", explanation: "Leads from English-speaking markets (US, UK, Europe) increased 200%, establishing the firm as a go-to resource for expats." },
      { label: "Practice Area Pages", value: "6 Core Pages", explanation: "Built dedicated landing pages for Immigration & Visas, Residency & Citizenship, Real Estate Law, Corporate, Compliance, and general consultation." },
      { label: "Content Authority", value: "Resource Hub", explanation: "Created an educational resource section with guides on DNI procurement, permanent residency, and citizenship pathways." },
      { label: "Bilingual Experience", value: "Seamless", explanation: "Implemented a fully bilingual experience allowing visitors to toggle between English and Spanish content seamlessly." }
    ],
    steps: [
      { title: "Brand Identity Development", description: "Developed a sophisticated, trustworthy brand identity that communicates legal expertise while remaining approachable to international clients unfamiliar with Argentine legal processes." },
      { title: "Bilingual Content Strategy", description: "Created comprehensive content in both English and Spanish, ensuring the firm could serve its international client base while maintaining local credibility." },
      { title: "Practice Area Architecture", description: "Built dedicated landing pages for each practice area—Immigration, Residency, Real Estate, Corporate, and Compliance—optimized for both user experience and search visibility." },
      { title: "Lead Capture & Scheduling", description: "Integrated a consultation booking system with intake forms that pre-qualify leads and provide the firm with context before initial calls." }
    ],
    tags: ["Legal", "Immigration Law", "Argentina", "Bilingual Website", "International", "Lead Capture"]
  },
  {
    slug: "woodrow-on-30th",
    client: "Woodrow on 30th",
    industry: "Student Housing",
    headline: "Rapid Tour and Lead Generation for Student Housing via Google Ads",
    description: "Launched a targeted Google Ads campaign with clear attribution for a Baltimore student housing community, delivering a 7% CTR and generating qualified tours ahead of the academic year.",
    heroImage: "/assets/work/woodrow-on-30th.png",
    timeline: "4 Weeks",
    services: ["Paid Search", "Conversion Tracking", "Lead Generation", "Analytics"],
    seoTitle: "Woodrow on 30th Case Study | Student Housing Lead Gen | Liberty Design Studio",
    seoDescription: "How we helped Woodrow on 30th generate qualified student housing tours in Baltimore through targeted Google Ads and conversion tracking.",
    challenge: "A student housing operator for Woodrow on 30th, serving Johns Hopkins University in Baltimore, came to us with a fixed deadline and a clear business imperative. The academic year was approaching, units were still available, and they needed scheduled tours and qualified inquiries quickly. They had experimented with advertising before but lacked reliable conversion tracking, so they could not confidently tie spend to real leasing interest. With no visibility into which campaigns were driving actual tours, it was difficult for them to scale or adjust strategy.",
    beforePoints: [
      "Fixed deadline with academic year approaching",
      "Units available but no reliable conversion tracking",
      "No visibility into which campaigns drove actual tours",
      "Unable to scale or adjust strategy confidently"
    ],
    metrics: [
      { label: "Click-Through Rate", value: "> 7%" },
      { label: "Attributed Tours", value: "8+" },
      { label: "Weekly Peak", value: "3 Tours" }
    ],
    detailedResults: [
      { label: "Click-Through Rate", value: "> 7%", explanation: "Click-through rate peaked above seven percent while cost-per-click remained efficient, confirming that the targeting was resonating with motivated prospects." },
      { label: "Attributed Tours", value: "8+", explanation: "The tracking we put in place showed at least eight conversions attributable to paid search, providing clear evidence that the paid strategy was working." },
      { label: "Weekly Peak", value: "3 Conversions", explanation: "Achieved a peak of three conversions in a single week tied directly to the campaign, helping the property convert interest into scheduled visits." },
      { label: "Tracking Visibility", value: "100%", explanation: "Implemented straight-through conversion tracking so inquiries and tour requests could be tied directly back to specific ads and keywords." },
      { label: "Budget Efficiency", value: "Optimized", explanation: "Structured budget for efficiency and qualified engagement rather than broad, unfocused reach, ensuring every dollar contributed to leasing goals." },
      { label: "Targeting Precision", value: "High Intent", explanation: "Prioritized terms and locations with demonstrated intent, targeting searchers actively looking for student housing near campus." }
    ],
    steps: [
      { title: "Measurement Foundation", description: "We implemented straight-through conversion tracking so inquiries and tour requests could be tied directly back to specific ads and keywords. With that measurement foundation in place, we launched a sharply focused Google Ads campaign." },
      { title: "High-Intent Targeting", description: "Launched a campaign targeting high-intent searchers actively looking for student housing near campus. Campaign buildout prioritized terms and locations with demonstrated intent." },
      { title: "Efficiency Structure", description: "The budget was structured for efficiency and qualified engagement rather than broad, unfocused reach. We focused on driving actual tours, not just clicks." },
      { title: "Attribution & Optimization", description: "Used clear attribution data to confirming that the targeting was resonating. Those attributed tour bookings helped the property convert interest into scheduled visits." }
    ],
    tags: ["Student Housing", "Google Ads", "Baltimore", "Lead Gen"]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
