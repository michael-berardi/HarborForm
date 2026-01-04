import Link from 'next/link';
import { locations } from '@/lib/location-data';
import { Metadata } from 'next';
import { ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Locations | Liberty Design Studio',
    description: 'Digital growth partners serving New York, Los Angeles, and Austin. We provide high-performance web design and SEO infrastructure across key markets.',
};

export default function LocationsIndex() {
    return (
        <main className="min-h-screen pt-28 md:pt-32 pb-16 md:pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:mb-24">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
                        Serving Key Markets
                    </h1>
                    <p className="text-base md:text-xl text-[var(--text-secondary)] max-w-2xl">
                        While we work globally, we have deep market expertise and optimization infrastructure built for these specific regions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {locations.map((location) => (
                        <Link
                            key={location.slug}
                            href={`/locations/${location.slug}`}
                            className="group block p-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-default)]">
                                    {location.state}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                                {location.city}
                            </h2>

                            <p className="text-[var(--text-secondary)] mb-8 line-clamp-3">
                                {location.description}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-[var(--accent-primary)]">
                                View Region
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
