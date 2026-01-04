'use client';

import Link from 'next/link';
import { ArrowLeft, ClipboardList, RefreshCw } from 'lucide-react';

export default function SubmissionsPage() {
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
                            <ClipboardList className="w-5 h-5 text-purple-400" />
                            <h1 className="text-lg font-semibold">Audit Submissions</h1>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-10">
                {/* Info */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-8">
                    <p className="text-sm text-purple-300">
                        Audit form submissions are sent to your email via Resend. This page will display a log of recent submissions when connected to a database.
                    </p>
                </div>

                {/* Empty State */}
                <div className="text-center py-16 bg-zinc-900/30 border border-zinc-800/30 rounded-2xl">
                    <ClipboardList className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                    <h2 className="text-lg font-medium text-zinc-300 mb-2">No submissions logged</h2>
                    <p className="text-sm text-zinc-500 mb-6 max-w-sm mx-auto">
                        Connect to a database to store and view audit form submissions here.
                    </p>
                    <Link
                        href="https://resend.com/emails"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                    >
                        View in Resend →
                    </Link>
                </div>
            </main>
        </div>
    );
}
