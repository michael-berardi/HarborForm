import { MetadataRoute } from 'next'
import { projects } from '@/lib/project-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://libertydesign.studio'

    // Core pages
    const routes = [
        '',
        '/work',
        '/services',
        '/about',
        '/contact',
        '/philosophy',
        '/insights',
        '/book-audit',
        '/industries',
        '/industries/ecommerce',
        '/industries/saas',
        '/industries/real-estate',
        '/industries/professional-services',
        '/privacy',
        '/terms',
        '/locations',
        '/locations/new-york',
        '/locations/los-angeles',
        '/locations/san-francisco',
        '/locations/austin',
        '/locations/miami',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const workRoutes = projects.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...routes, ...workRoutes]
}
