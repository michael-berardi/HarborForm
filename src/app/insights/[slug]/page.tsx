'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Calendar, ArrowRight } from 'lucide-react';
import { getArticleBySlug, getPublishedArticles, isArticlePublished } from '@/lib/content';

export default function InsightArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const article = getArticleBySlug(slug);
    const isPublished = article ? isArticlePublished(slug) : false;

    if (!article) {
        return (
            <main className="min-h-screen pt-32 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <div className="max-w-4xl mx-auto text-center py-32">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <p className="text-zinc-500 mb-8">The article you are looking for does not exist.</p>
                    <Link href="/insights" className="text-blue-500 hover:text-blue-400 font-medium">
                        ← Back to Insights
                    </Link>
                </div>
            </main>
        );
    }

    const otherArticles = getPublishedArticles().filter(a => a.slug !== slug).slice(0, 2);

    return (
        <>
            {/* Add noindex meta for unpublished content */}
            {!isPublished && (
                <head>
                    <meta name="robots" content="noindex, nofollow" />
                </head>
            )}
            <main className="min-h-screen pt-32 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <article className="max-w-4xl mx-auto">
                    {/* Preview banner for unpublished content */}
                    {!isPublished && (
                        <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-600 dark:text-yellow-400 text-sm font-medium">
                            📅 Scheduled for {article.date} - Not yet visible to the public
                        </div>
                    )}

                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link
                            href="/insights"
                            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-300 hover:text-blue-500"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            <ArrowLeft size={16} /> Back to Insights
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                            <span className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-wider">
                                <Tag size={14} /> {article.category}
                            </span>
                            <span className="inline-flex items-center gap-2 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                                <Clock size={14} /> {article.readTime}
                            </span>
                            <span className="inline-flex items-center gap-2 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                                <Calendar size={14} /> {article.date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            {article.title}
                        </h1>

                        <p className="text-xl leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                            {article.excerpt}
                        </p>
                    </motion.header>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative aspect-video w-full rounded-2xl overflow-hidden mb-16 border border-white/10"
                    >
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="prose prose-lg prose-invert max-w-none"
                    >
                        {article.content.map((block, i) => {
                            switch (block.type) {
                                case 'heading':
                                    return (
                                        <h2
                                            key={i}
                                            className="text-2xl md:text-3xl font-bold mt-12 mb-6 transition-colors duration-300"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            {block.text}
                                        </h2>
                                    );
                                case 'paragraph':
                                    return (
                                        <p
                                            key={i}
                                            className="text-lg leading-relaxed mb-6 transition-colors duration-300"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {block.text}
                                        </p>
                                    );
                                case 'quote':
                                    return (
                                        <blockquote
                                            key={i}
                                            className="border-l-4 border-blue-500 pl-6 my-8 italic text-xl transition-colors duration-300"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            {block.text}
                                        </blockquote>
                                    );
                                case 'list':
                                    return (
                                        <ul key={i} className="space-y-3 my-6 pl-6">
                                            {block.items?.map((item, j) => (
                                                <li
                                                    key={j}
                                                    className="flex items-start gap-3 text-lg transition-colors duration-300"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-3 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 p-10 rounded-3xl border border-white/10 text-center"
                        style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            Ready to Apply These Principles?
                        </h3>
                        <p className="text-lg mb-8 max-w-xl mx-auto transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                            Book a strategy audit and we will show you exactly how to implement these ideas for your business.
                        </p>
                        <Link
                            href="/book-audit"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-base hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/20"
                        >
                            Book a Strategy Audit <ArrowRight size={18} />
                        </Link>
                    </motion.section>

                    {/* Related Articles */}
                    {otherArticles.length > 0 && (
                        <section className="mt-24 mb-16 border-t border-white/10 pt-16">
                            <h3 className="text-2xl font-bold mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Continue Reading
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {otherArticles.map((related) => (
                                    <Link key={related.slug} href={`/insights/${related.slug}`} className="group block">
                                        <div className="aspect-video relative rounded-xl overflow-hidden mb-4 border border-white/5 group-hover:border-white/20 transition-colors">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{related.category}</span>
                                        <h4 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                            {related.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </article>
            </main>
        </>
    );
}
