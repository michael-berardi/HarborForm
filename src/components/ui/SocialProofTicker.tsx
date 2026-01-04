'use client';

const recentActivity = [
  { client: "Value of Architecture", action: "launched new website", time: "2 days ago" },
  { client: "PEP Real Estate", action: "started SEO campaign", time: "1 week ago" },
  { client: "Property Perfected", action: "increased leads by 43%", time: "This month" },
  { client: "A Manhattan brokerage", action: "booked strategy audit", time: "Yesterday" }
];

export const SocialProofTicker = () => (
  <div className="overflow-hidden bg-[var(--bg-tertiary)] py-3 border-y border-[var(--border-subtle)] transition-colors duration-300">
    <div className="flex gap-12 animate-ticker whitespace-nowrap min-w-max">
      {[...recentActivity, ...recentActivity, ...recentActivity].map((item, i) => (
        <span key={i} className="text-sm text-[var(--text-secondary)] transition-colors duration-300">
          <strong className="text-[var(--accent-primary)] transition-colors duration-300">{item.client}</strong> {item.action} • {item.time}
        </span>
      ))}
    </div>
  </div>
);
