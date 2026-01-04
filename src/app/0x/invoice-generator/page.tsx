'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    ChevronLeft,
    FileText,
    CheckCircle2,
    Clock,
    ExternalLink,
    AlertTriangle,
    Plus,
    Download
} from 'lucide-react';
import { DataStore, Invoice, BillingItem } from '@/lib/data-store';

export default function InvoiceGenerator() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [billingItems, setBillingItems] = useState<BillingItem[]>([]);

    useEffect(() => {
        setInvoices(DataStore.getInvoices());
        setBillingItems(DataStore.getBillingItems());
    }, []);

    const getItemTitle = (id: string) => billingItems.find(i => i.id === id)?.title || 'Unknown Item';

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12">
            <div className="max-w-5xl mx-auto">
                <Link href="/0x" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-8 group">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Admin</span>
                </Link>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-zinc-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Invoice Generator</h1>
                            <p className="text-zinc-500">Review and finalize client invoice drafts</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <section>
                            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Latest Drafts</h2>
                            {invoices.length === 0 ? (
                                <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-2xl p-12 text-center">
                                    <p className="text-zinc-600 italic">No invoice drafts available yet. Generate one from the Billing Helper.</p>
                                    <Link href="/0x/billing-helper" className="mt-4 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                                        Go to Billing Helper
                                        <Plus className="w-4 h-4" />
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {[...invoices].reverse().map((invoice) => (
                                        <div key={invoice.id} className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
                                            <div className="p-6 border-b border-zinc-800/50 flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-lg font-bold text-zinc-100 font-mono tracking-tight">{invoice.id}</h3>
                                                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">
                                                        {new Date(invoice.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' })}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-bold text-white">${invoice.total}</p>
                                                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                                        Draft
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-zinc-950/30">
                                                <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">Line Items ({invoice.items.length})</h4>
                                                <div className="space-y-2">
                                                    {invoice.items.map(itemId => (
                                                        <div key={itemId} className="flex justify-between items-center text-xs text-zinc-400">
                                                            <span className="truncate max-w-[250px]">{getItemTitle(itemId)}</span>
                                                            <span className="text-zinc-600">$150.00</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="p-4 bg-zinc-900/10 flex items-center justify-between gap-4">
                                                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 text-xs font-semibold text-zinc-400 hover:text-white transition-all">
                                                    <Download className="w-3.5 h-3.5" />
                                                    Download PDF
                                                </button>
                                                <a
                                                    href="https://squareup.com/dashboard/invoices"
                                                    target="_blank"
                                                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-lg shadow-indigo-500/10"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                    Commit to Square
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
                            <div className="flex items-start gap-4 mb-4">
                                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                                <div>
                                    <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest">Action Required</h3>
                                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                                        Drafted invoices must be manually created in Square until the direct API integration is finalized.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-amber-500/10">
                                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-3">Workflow Efficiency</p>
                                <ol className="space-y-3">
                                    <li className="flex gap-2 text-[11px] text-zinc-500">
                                        <span className="text-amber-500/50 font-mono">01</span>
                                        Download PDF for internal studio records.
                                    </li>
                                    <li className="flex gap-2 text-[11px] text-zinc-500">
                                        <span className="text-amber-500/50 font-mono">02</span>
                                        Copy items into Square's "New Invoice" form.
                                    </li>
                                    <li className="flex gap-2 text-[11px] text-zinc-500">
                                        <span className="text-amber-500/50 font-mono">03</span>
                                        Mark draft as "Sent" in this panel.
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-xl">
                            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Operational Stats</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-zinc-600">Total Drafts</span>
                                    <span className="font-bold text-zinc-400">{invoices.length}</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-zinc-600">Draft Value</span>
                                    <span className="font-bold text-amber-500">${invoices.reduce((acc, inv) => acc + inv.total, 0)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
