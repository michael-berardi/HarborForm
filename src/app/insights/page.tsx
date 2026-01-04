'use client';
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedArticles } from '@/lib/content';

export default function InsightsPage() {
  const posts = getPublishedArticles();

  return (
    <main className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <section className="max-w-7xl mx-auto mb-12 md:mb-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>Insights.</h1>
          <p className="text-base md:text-xl leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            Strategies, case studies, and lessons from the engine room. We share what works, backed by data.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pb-16 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <Link href={`/insights/${post.slug}`} className="block h-full">
                <div className={`aspect-[16/10] md:aspect-video w-full rounded-xl md:rounded-2xl bg-gradient-to-br ${post.color} border border-zinc-200 dark:border-white/5 relative overflow-hidden mb-4 md:mb-6 group-hover:border-blue-500/30 transition-all duration-300`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span className="text-blue-600 dark:text-blue-400">{post.category}</span>
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="text-[var(--text-muted)]">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{post.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm transition-colors duration-300">{post.excerpt}</p>
                  <p className="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-[0.1em] mt-2 transition-colors duration-300">{post.date}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
