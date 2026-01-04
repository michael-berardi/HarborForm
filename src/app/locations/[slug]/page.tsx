import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations, getLocationBySlug } from '@/lib/location-data';
import LocationPageClient from './LocationPageClient';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const location = getLocationBySlug(slug);

    if (!location) {
        return {
            title: 'Location Not Found | Liberty Design Studio',
        };
    }

    return {
        title: `${location.title} | Liberty Design Studio`,
        description: location.description,
        alternates: {
            canonical: `/locations/${slug}`,
        },
        openGraph: {
            title: location.title,
            description: location.description,
            siteName: 'Liberty Design Studio',
            images: [location.heroImage],
        },
    };
}

export function generateStaticParams() {
    return locations.map((location) => ({
        slug: location.slug,
    }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = getLocationBySlug(slug);

    if (!location) {
        notFound();
    }

    return <LocationPageClient location={location} />;
}
