import { caseStudies } from '@/lib/case-studies';
import { projects } from '@/lib/project-data';
import type { Metadata } from 'next';
import CaseStudyClient from './CaseStudyClient';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Liberty Design Studio',
    };
  }

  return {
    title: caseStudy.seoTitle,
    description: caseStudy.seoDescription,
    openGraph: {
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      type: 'article',
      images: [caseStudy.heroImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyClient slug={slug} />;
}