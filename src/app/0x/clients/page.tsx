'use client';

import Link from 'next/link';
import { ArrowLeft, Users, Plus, Search } from 'lucide-react';

export default function ClientsPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            {/* Header */}
            <header className="border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-950/80 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/0x"
                            className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-emerald-400" />
                            <h1 className="text-lg font-semibold">Client Directory</h1>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Client
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-10">
                {/* Search */}
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search clients..."
                        className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-xl pl-12 pr-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                </div>

                {/* Empty State */}
                <div className="text-center py-16 bg-zinc-900/30 border border-zinc-800/30 rounded-2xl">
                    <Users className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                    <h2 className="text-lg font-medium text-zinc-300 mb-2">No clients yet</h2>
                    <p className="text-sm text-zinc-500 mb-6 max-w-sm mx-auto">
                        Add your first client to start tracking projects, proposals, and invoices.
                    </p>
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Your First Client
                    </button>
                </div>
            </main>
        </div>
    );
}
