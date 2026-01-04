'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {
    FileText,
    Receipt,
    BarChart3,
    Mail,
    Code,
    CreditCard,
    ExternalLink,
    LogOut,
    FileSpreadsheet,
    Users,
    ClipboardList,
    Settings,
} from 'lucide-react';

interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

interface Tool {
    name: string;
    description: string;
    url: string;
    icon: React.ReactNode;
    category: string;
}

const externalTools: Tool[] = [
    {
        name: 'Vercel Dashboard',
        description: 'Deployments, analytics, logs',
        url: 'https://vercel.com/dashboard',
        icon: <span className="text-lg">▲</span>,
        category: 'dev',
    },
    {
        name: 'GitHub Repo',
        description: 'Source code, issues, PRs',
        url: 'https://github.com/michael-berardi/liberty-design-studio',
        icon: <Code className="w-5 h-5" />,
        category: 'dev',
    },
    {
        name: 'Resend',
        description: 'Email delivery logs',
        url: 'https://resend.com/emails',
        icon: <Mail className="w-5 h-5" />,
        category: 'email',
    },
    {
        name: 'Zoho Mail',
        description: 'Business inbox',
        url: 'https://mail.zoho.com',
        icon: <Mail className="w-5 h-5" />,
        category: 'email',
    },
    {
        name: 'Square Dashboard',
        description: 'Invoices, payments, reports',
        url: 'https://squareup.com/dashboard',
        icon: <CreditCard className="w-5 h-5" />,
        category: 'billing',
    },
    {
        name: 'Google Analytics',
        description: 'Traffic, behavior, conversions',
        url: 'https://analytics.google.com',
        icon: <BarChart3 className="w-5 h-5" />,
        category: 'analytics',
    },
    {
        name: 'Google Search Console',
        description: 'SEO performance, indexing',
        url: 'https://search.google.com/search-console',
        icon: <BarChart3 className="w-5 h-5" />,
        category: 'analytics',
    },
    {
        name: 'Notion',
        description: 'Projects, docs, tasks',
        url: 'https://notion.so',
        icon: <FileSpreadsheet className="w-5 h-5" />,
        category: 'productivity',
    },
];

const internalTools = [
    {
        name: 'Task Planner',
        description: 'Assign and track operations',
        href: '/0x/task-planner',
        icon: <ClipboardList className="w-5 h-5" />,
        color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    },
    {
        name: 'Billing Helper',
        description: 'Stage work for invoicing',
        href: '/0x/billing-helper',
        icon: <Receipt className="w-5 h-5" />,
        color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30',
    },
    {
        name: 'Proposal Generator',
        description: 'Create and send client proposals',
        href: '/0x/proposals',
        icon: <FileText className="w-5 h-5" />,
        color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30',
    },
    {
        name: 'Client Directory',
        description: 'Manage client contacts',
        href: '/0x/clients',
        icon: <Users className="w-5 h-5" />,
        color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
    },
    {
        name: 'Audit Submissions',
        description: 'View form submissions',
        href: '/0x/submissions',
        icon: <Mail className="w-5 h-5" />,
        color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
    },
    {
        name: 'Invoice Generator',
        description: 'Review and finalize drafts',
        href: '/0x/invoice-generator',
        icon: <FileText className="w-5 h-5" />,
        color: 'from-zinc-500/20 to-zinc-600/10 border-zinc-500/30',
    },
];

export default function AdminDashboard({ user }: { user: User }) {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            {/* Header */}
            <header className="border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-950/80 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <Settings className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-zinc-100">Admin Panel</h1>
                            <p className="text-xs text-zinc-500">Liberty Design Studio</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {user.image && (
                                <img
                                    src={user.image}
                                    alt=""
                                    className="w-8 h-8 rounded-full ring-2 ring-zinc-700"
                                />
                            )}
                            <a
                                href="slack://open"
                                className="text-sm text-zinc-500 hover:text-[#4A154B] transition-colors flex items-center gap-1.5"
                                title="Open Slack"
                            >
                                <svg viewBox="0 0 122.8 122.8" className="w-3.5 h-3.5 fill-current">
                                    <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.4 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6zM45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.4c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58 0 52.2 0 45.2s5.8-12.9 12.9-12.9h32.3zM97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.4 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3zM77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.4c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" />
                                </svg>
                                <span className="hidden sm:inline">Slack</span>
                            </a>
                            <a
                                href="notion://open"
                                className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5 ml-4"
                                title="Open Notion"
                            >
                                <FileSpreadsheet className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Notion</span>
                            </a>
                            <div className="w-px h-4 bg-zinc-800 mx-4" />
                            <Link
                                href="/0x/assistant"
                                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mr-4"
                            >
                                Test Assistant
                            </Link>
                            <span className="text-sm text-zinc-400 hidden sm:inline">{user.name}</span>
                        </div>
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 rounded-lg transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">Sign out</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6 py-10">
                {/* Quick Actions */}
                <section className="mb-10">
                    <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {internalTools.map((tool) => (
                            <Link
                                key={tool.name}
                                href={tool.href}
                                className={`group bg-gradient-to-br ${tool.color} border rounded-xl p-5 hover:scale-[1.02] transition-all duration-200 hover:shadow-lg hover:shadow-black/20`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-zinc-300 group-hover:text-white transition-colors">
                                        {tool.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-medium text-zinc-100 group-hover:text-white transition-colors">
                                            {tool.name}
                                        </h3>
                                        <p className="text-sm text-zinc-400 mt-1">{tool.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="mb-10">
                    <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
                        Overview
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
                            <p className="text-2xl font-bold text-zinc-100">—</p>
                            <p className="text-sm text-zinc-500">Pending Audits</p>
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
                            <p className="text-2xl font-bold text-zinc-100">—</p>
                            <p className="text-sm text-zinc-500">Open Proposals</p>
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
                            <p className="text-2xl font-bold text-zinc-100">—</p>
                            <p className="text-sm text-zinc-500">Unpaid Invoices</p>
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-green-400">Live</span>
                            </div>
                            <p className="text-sm text-zinc-500">Site Status</p>
                        </div>
                    </div>
                </section>

                {/* External Tools */}
                <section>
                    <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
                        External Tools
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {externalTools.map((tool) => (
                            <a
                                key={tool.name}
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 bg-zinc-900/30 hover:bg-zinc-800/50 border border-zinc-800/30 hover:border-zinc-700/50 rounded-lg px-4 py-3 transition-all duration-200"
                            >
                                <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                    {tool.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors truncate">
                                        {tool.name}
                                    </p>
                                    <p className="text-xs text-zinc-500 truncate">{tool.description}</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                            </a>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-zinc-800/50 text-center">
                    <p className="text-xs text-zinc-600">
                        Hidden admin panel at <code className="text-zinc-500">/0x</code>
                    </p>
                </div>
            </main>
        </div>
    );
}
